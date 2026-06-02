# Chapter 4: Data Acquisition and Loading

## Learning Objectives

By the end of this chapter, you will be able to:

- Understand the importance of data acquisition.
- Identify common sources of analytical data.
- Load data from CSV, Excel, JSON, and database sources.
- Retrieve data from APIs.
- Understand common data ingestion challenges.
- Validate data after loading.
- Build a repeatable data acquisition workflow.

---

# 4.1 Introduction

Before data can be analyzed, it must first be acquired and loaded into an environment where it can be processed.

Data acquisition is the process of collecting data from various sources and making it available for analysis.

In many organizations, data acquisition consumes a significant portion of an analyst's time.

Typical data sources include:

- CSV files
- Excel spreadsheets
- Databases
- APIs
- Log files
- Cloud storage
- Internal business applications
- External data providers

The quality of analysis depends heavily on the quality and completeness of the acquired data.

---

# 4.2 The Data Acquisition Process

A typical data acquisition workflow follows these steps:

```text
Identify Data Source
          ↓
Access Data
          ↓
Load Data
          ↓
Validate Data
          ↓
Store Data
          ↓
Analyze Data
```

Each step should be performed carefully to ensure data integrity.

---

# 4.3 Common Data Sources

Analysts commonly work with data from multiple sources.

| Source | Example |
|----------|----------|
| CSV Files | Exported reports |
| Excel Files | Business spreadsheets |
| Databases | Customer records |
| APIs | Weather or financial data |
| Log Files | Application activity |
| Cloud Storage | Shared datasets |
| Data Warehouses | Enterprise analytics |

Most projects involve data from more than one source.

---

# 4.4 Loading CSV Files

CSV (Comma-Separated Values) files are among the most common formats used in analytics.

Example file:

```csv
Customer,Revenue
Alice,1500
Bob,2200
Carol,1800
```

---

## Reading a CSV File

```python
import pandas as pd

df = pd.read_csv("sales.csv")
```

View the first rows:

```python
df.head()
```

Example output:

```text
  Customer  Revenue
0 Alice      1500
1 Bob        2200
2 Carol      1800
```

---

## Reading CSV with Different Delimiters

Some files use semicolons instead of commas.

Example:

```csv
Customer;Revenue
Alice;1500
Bob;2200
```

Load using:

```python
df = pd.read_csv("sales.csv", sep=";")
```

---

# 4.5 Loading Excel Files

Many organizations rely heavily on Excel.

Common extensions:

```text
.xlsx
.xls
```

---

## Reading Excel Files

```python
import pandas as pd

df = pd.read_excel("sales.xlsx")
```

Display records:

```python
df.head()
```

---

## Reading Specific Worksheets

```python
df = pd.read_excel(
    "sales.xlsx",
    sheet_name="January"
)
```

This is useful when workbooks contain multiple worksheets.

---

# 4.6 Loading JSON Data

JSON is commonly used in web applications and APIs.

Example JSON:

```json
[
    {
        "name": "Alice",
        "revenue": 1500
    },
    {
        "name": "Bob",
        "revenue": 2200
    }
]
```

---

## Read JSON File

```python
import pandas as pd

df = pd.read_json("customers.json")
```

Display contents:

```python
df.head()
```

---

# 4.7 Reading Text Files

Many systems generate text-based reports and logs.

Example:

```python
with open("report.txt", "r") as file:
    content = file.read()

print(content)
```

This method is useful when working with:

- Log files
- Configuration files
- Exported reports

---

# 4.8 Loading Data from Databases

Databases are one of the most important sources of analytical data.

Examples:

- SQLite
- MySQL
- PostgreSQL
- SQL Server
- Oracle

---

## Using SQLite

Create a database connection:

```python
import sqlite3

conn = sqlite3.connect("sales.db")
```

Run a query:

```python
import pandas as pd

query = """
SELECT *
FROM customers
"""

df = pd.read_sql(query, conn)
```

Display results:

```python
df.head()
```

---

## Why Databases Matter

Databases provide:

- Efficient storage
- Fast querying
- Data consistency
- Concurrent access

Most professional analysts spend considerable time querying databases.

---

# 4.9 Retrieving Data from APIs

APIs (Application Programming Interfaces) allow software systems to exchange data.

Many organizations provide APIs for:

- Weather data
- Stock market data
- Geographic data
- Social media information
- Business applications

---

## API Request Example

```python
import requests

url = "https://api.example.com/customers"

response = requests.get(url)

data = response.json()

print(data)
```

The response is often returned in JSON format.

---

## Converting API Data to a DataFrame

```python
import pandas as pd

df = pd.DataFrame(data)
```

The data can now be analyzed using Pandas.

---

# 4.10 Reading Multiple Files

Many projects involve multiple files.

Example:

```python
import pandas as pd

jan = pd.read_csv("jan.csv")
feb = pd.read_csv("feb.csv")

sales = pd.concat([jan, feb])

print(sales.shape)
```

This combines records into a single dataset.

---

# 4.11 Working with Large Files

Large datasets may contain millions of rows.

Loading the entire file at once may not be practical.

---

## Read Data in Chunks

```python
import pandas as pd

chunks = pd.read_csv(
    "large_file.csv",
    chunksize=10000
)

for chunk in chunks:
    print(chunk.shape)
```

Advantages:

- Lower memory usage
- Better scalability

---

# 4.12 Inspecting Newly Loaded Data

After loading data, analysts should immediately inspect it.

---

## View First Rows

```python
df.head()
```

---

## View Last Rows

```python
df.tail()
```

---

## View Structure

```python
df.info()
```

Example output:

```text
RangeIndex: 1000 entries

Customer      object
Revenue       int64
City          object
```

---

## View Shape

```python
df.shape
```

Output:

```text
(1000, 5)
```

Meaning:

- 1000 rows
- 5 columns

---

# 4.13 Verifying Data Quality

Loading data successfully does not guarantee correctness.

Always perform validation.

---

## Check Missing Values

```python
df.isnull().sum()
```

Example output:

```text
Customer     0
Revenue      5
City         2
```

---

## Check Duplicate Records

```python
df.duplicated().sum()
```

Example:

```text
12
```

Meaning:

12 duplicate rows exist.

---

## Check Data Types

```python
df.dtypes
```

Example output:

```text
Customer     object
Revenue       int64
```

Incorrect data types often cause analytical problems later.

---

# 4.14 Common Data Acquisition Problems

Analysts frequently encounter issues such as:

---

## Missing Data

Example:

```text
Customer,Revenue
Alice,1500
Bob,
Carol,1800
```

Some values are absent.

---

## Invalid Data

Example:

```text
Age = -5
```

Negative age values are invalid.

---

## Inconsistent Formatting

Example:

```text
Toronto
TORONTO
toronto
```

These represent the same city but appear differently.

---

## Corrupted Files

Files may contain:

- Missing columns
- Truncated records
- Invalid characters

Always inspect newly acquired data.

---

# 4.15 Building a Data Acquisition Workflow

A repeatable workflow improves reliability.

Example process:

```text
Receive Data
      ↓
Load Data
      ↓
Validate Structure
      ↓
Validate Values
      ↓
Store Working Copy
      ↓
Begin Analysis
```

Benefits:

- Reduced errors
- Better reproducibility
- Easier troubleshooting

---

# 4.16 Data Storage During Analysis

Analysts often create working copies of data.

Recommended practice:

```text
project/
│
├── raw_data/
│
├── processed_data/
│
├── notebooks/
│
├── reports/
│
└── scripts/
```

---

## Raw Data

Contains original files.

Never modify these files.

---

## Processed Data

Contains cleaned or transformed datasets.

Example:

```text
customers_clean.csv
sales_clean.csv
```

---

## Scripts

Contains Python scripts used for loading and processing.

Example:

```text
load_data.py
clean_data.py
```

This structure improves project organization.

---

# 4.17 Real-World Example

A retail company provides:

- Customer data in Excel
- Sales data in CSV
- Product information in a database
- Demographic information from a public API

The analyst performs the following:

1. Load customer spreadsheet.
2. Import sales CSV.
3. Query product database.
4. Retrieve demographic information from API.
5. Validate all datasets.
6. Combine datasets for analysis.

This type of multi-source acquisition is common in real-world projects.

---

# 4.18 Best Practices

When acquiring data:

- Keep original data unchanged.
- Document data sources.
- Validate data immediately after loading.
- Use consistent file naming.
- Automate repetitive imports.
- Maintain reproducible workflows.
- Verify row counts and column counts.
- Check data types before analysis.

Following these practices reduces errors and improves reliability.

---

# Key Takeaways

- Data acquisition is the first operational step in the analytics workflow.
- Analysts commonly load data from CSV, Excel, JSON, databases, APIs, and text files.
- Pandas provides powerful tools for importing data.
- Validation should occur immediately after loading.
- Missing values, duplicates, and formatting issues are common.
- Large datasets may require chunk-based processing.
- Well-organized project structures improve maintainability and reproducibility.

---

# Chapter Summary

In this chapter, you learned how analysts acquire and load data from various sources, including files, databases, and APIs. You explored techniques for importing data into Python using Pandas, validating loaded datasets, handling large files, and organizing analytical projects. You also learned common challenges encountered during data acquisition and the importance of establishing repeatable workflows.

In the next chapter, you will learn one of the most important skills in data analysis: cleaning and preparing data for reliable analysis.