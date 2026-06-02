let bookMeta = {};
let chapterFiles = []; // Only actual chapter files (no separators)
let currentChapterIndex = -1; // Index into chapterFiles[]

async function loadBookMeta() {
  const response = await fetch("book.json");
  bookMeta = await response.json();
  document.title = bookMeta.title;
  document.getElementById("book-title").textContent = bookMeta.title;
  document.getElementById("book-copyright").textContent = bookMeta.copyright;
}

// Load and render a markdown file into the content pane
function loadMarkdown(path, index) {
  // Update active state in sidebar
  document.querySelectorAll(".sidebar ul li a.toc-link").forEach(a => a.classList.remove("active"));
  if (index !== undefined) {
    currentChapterIndex = index;
    if (index >= 0) {
      const links = document.querySelectorAll(".sidebar ul li a.toc-link");
      links.forEach(a => {
        if (parseInt(a.dataset.index) === index) a.classList.add("active");
      });
    }
  }

  updateNavArrows();

  fetch(path)
    .then(response => {
      if (!response.ok) throw new Error(response.statusText);
      return response.text();
    })
    .then(markdown => {
      const html = marked.parse(markdown);
      document.getElementById("content").innerHTML =
        buildNavBar("top") + `<div class="chapter-body">${html}</div>` + buildNavBar("bottom");

      // Re-attach nav button listeners
      attachNavListeners();

      hljs.highlightAll();

      // Re-typeset MathJax if available
      if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise([document.getElementById("content")]);
      }

      // Scroll content area to top
      document.getElementById("content").scrollTop = 0;
      window.scrollTo(0, 0);
    })
    .catch(err => {
      document.getElementById("content").innerHTML = `<p>Error loading file: ${err}</p>`;
      console.error(err);
    });
}

// Build a prev/next navigation bar HTML string
function buildNavBar(position) {
  const hasPrev = currentChapterIndex > 0;
  const hasNext = currentChapterIndex >= 0 && currentChapterIndex < chapterFiles.length - 1;
  // For "home" (index === -1), next is index 0
  const isHome = currentChapterIndex === -1;
  const showNext = hasNext || isHome;

  return `
    <div class="chapter-nav chapter-nav--${position}">
      <button class="nav-btn nav-btn--prev" data-action="prev" ${hasPrev ? "" : "disabled"}>
        <span class="nav-arrow">&#8592;</span>
        <span class="nav-label">${hasPrev ? chapterFiles[currentChapterIndex - 1].title : "Previous"}</span>
      </button>
      <button class="nav-btn nav-btn--next" data-action="next" ${showNext ? "" : "disabled"}>
        <span class="nav-label">${isHome && chapterFiles.length > 0 ? chapterFiles[0].title : (hasNext ? chapterFiles[currentChapterIndex + 1].title : "Next")}</span>
        <span class="nav-arrow">&#8594;</span>
      </button>
    </div>`;
}

function attachNavListeners() {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.action;
      if (action === "prev" && currentChapterIndex > 0) {
        const prev = chapterFiles[currentChapterIndex - 1];
        loadMarkdown(prev.path, currentChapterIndex - 1);
      } else if (action === "next") {
        const nextIndex = currentChapterIndex === -1 ? 0 : currentChapterIndex + 1;
        if (nextIndex < chapterFiles.length) {
          const next = chapterFiles[nextIndex];
          loadMarkdown(next.path, nextIndex);
        }
      }
    });
  });
}

function updateNavArrows() {
  // Nav bars are rebuilt on each load, so nothing extra needed here
}

async function generateTOC() {
  const response = await fetch("chapters/chapters.json");
  const entries = await response.json();
  const toc = document.getElementById("toc");

  // Home link
  const homeLi = document.createElement("li");
  const homeA = document.createElement("a");
  homeA.href = "#";
  homeA.textContent = "Home";
  homeA.className = "toc-link";
  homeA.dataset.index = "-1";
  homeA.addEventListener("click", e => {
    e.preventDefault();
    loadMarkdown("chapters/home.md", -1);
  });
  homeLi.appendChild(homeA);
  toc.appendChild(homeLi);

  // Process entries: strings = chapter file, objects with "separator" key = divider
  let chapterIndex = 0;

  for (const entry of entries) {
    // --- Separator ---
    if (typeof entry === "object" && entry.separator) {
      const li = document.createElement("li");
      li.className = "toc-separator";
      li.textContent = entry.separator;
      toc.appendChild(li);
      continue;
    }

    // --- Chapter file (string or object with "file") ---
    const file = typeof entry === "string" ? entry : entry.file;
    const chapterPath = `chapters/${file}`;

    // Fetch and extract heading
    let title = file.replace(".md", "");
    try {
      const mdResponse = await fetch(chapterPath);
      const markdown = await mdResponse.text();
      const match = markdown.match(/^#\s+(.*)/m);
      if (match) title = match[1];
    } catch (e) { /* keep filename as title */ }

    // Store in chapterFiles array
    const idx = chapterIndex++;
    chapterFiles.push({ file, path: chapterPath, title });

    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = title;
    a.className = "toc-link";
    a.dataset.index = idx;
    a.addEventListener("click", e => {
      e.preventDefault();
      loadMarkdown(chapterPath, idx);
    });
    li.appendChild(a);
    toc.appendChild(li);
  }
}

// Configure marked + highlight.js
marked.setOptions({
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value;
    }
    return hljs.highlightAuto(code).value;
  }
});

// MathJax config
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']]
  },
  svg: { fontCache: 'global' }
};

async function initializeBook() {
  await loadBookMeta();
  await generateTOC();
  loadMarkdown("chapters/home.md", -1);
}

initializeBook();
