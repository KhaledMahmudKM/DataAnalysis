# Chapter 3: Python for Data Analysis

## Learning Objectives

By the end of this chapter, you will be able to:

- Understand why Python is widely used in data analysis.
- Install and configure a Python data analysis environment.
- Work with variables, data types, and basic Python structures.
- Use lists, dictionaries, and functions.
- Understand the role of NumPy and Pandas.
- Load and inspect datasets using Python.
- Write simple scripts for data analysis tasks.

---

# 3.1 Introduction

Python has become one of the most popular programming languages in the world and is widely used in data analysis, data science, machine learning, automation, and software development.

For data analysts, Python provides:

- Simple and readable syntax
- Powerful data analysis libraries
- Excellent visualization tools
- Large community support
- Integration with databases and APIs

Many analytical tasks that are difficult or repetitive in spreadsheets can be automated efficiently using Python.

Throughout this book, Python will serve as the primary programming language for data analysis examples.

---

# 3.2 Why Python for Data Analysis?

Python offers several advantages.

## Easy to Learn

Python syntax is often easier to understand than many other programming languages.

Example:

```python
sales = 15000

if sales > 10000:
    print("Sales target achieved")
```

Even readers with little programming experience can understand this code.

---

## Extensive Library Ecosystem

Python includes thousands of libraries.

For analysts, the most important include:

| Library | Purpose |
|----------|----------|
| Pandas | Data manipulation |
| NumPy | Numerical computing |
| Matplotlib | Data visualization |
| Seaborn | Statistical visualization |
| OpenPyXL | Excel integration |
| Requests | API access |
| SQLite3 | Database access |

---

## Automation

Tasks such as:

- Data cleaning
- Report generation
- Data extraction
- File processing

can be automated using Python scripts.

---

## Industry Adoption

Python is used extensively in:

- Business analytics
- Financial analysis
- Data science
- Machine learning
- Research
- Engineering

Learning Python provides skills applicable across many industries.

---

# 3.3 Installing Python

Python can be downloaded from:

- Python.org
- Anaconda Distribution

For beginners, either option works well.

---

## Verify Installation

Open a terminal or command prompt.

```bash
python --version
```

Example output:

```text
Python 3.13.0
```

You may also use:

```bash
python3 --version
```

depending on your operating system.

---

# 3.4 Recommended Environment

A common setup for analysts is:

| Component | Purpose |
|------------|------------|
| Python | Programming language |
| VS Code | Code editor |
| Jupyter Notebook | Interactive analysis |
| Git | Version control |

---

## Installing Required Libraries

Use pip to install common analysis packages.

```bash
pip install pandas numpy matplotlib seaborn
```

Verify installation:

```python
import pandas as pd
import numpy as np

print("Libraries loaded successfully")
```

---

# 3.5 Running Python

Python code can be executed in several ways.

---

## Interactive Interpreter

Start Python:

```bash
python
```

Example:

```python
>>> 5 + 10
15
```

---

## Python Script

Create a file named:

```text
hello.py
```

Contents:

```python
print("Hello, Data Analysis")
```

Run:

```bash
python hello.py
```

---

## Jupyter Notebook

Jupyter Notebooks allow code, text, charts, and results to appear together.

Advantages:

- Interactive
- Excellent for exploration
- Widely used by analysts

Example notebook cell:

```python
sales = 10000
profit = 2500

profit_margin = profit / sales
profit_margin
```

The result appears directly below the cell.

---

# 3.6 Variables

Variables store data values.

Example:

```python
customer_name = "Alice"
sales = 1500
tax_rate = 0.13
```

Variables should have meaningful names.

Good:

```python
monthly_sales
customer_count
```

Poor:

```python
x
a
temp
```

unless used temporarily.

---

# 3.7 Python Data Types

Python supports several built-in data types.

---

## String

Text values.

```python
name = "Alice"
city = "Toronto"
```

---

## Integer

Whole numbers.

```python
orders = 120
```

---

## Float

Decimal values.

```python
revenue = 15234.75
```

---

## Boolean

True or False values.

```python
active_customer = True
```

---

## Check Data Types

```python
print(type(revenue))
```

Output:

```text
<class 'float'>
```

---

# 3.8 Basic Operators

Arithmetic operations are common in analysis.

```python
sales = 1000
expenses = 650

profit = sales - expenses

print(profit)
```

Output:

```text
350
```

Common operators:

| Operator | Meaning |
|-----------|-----------|
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| // | Integer Division |
| % | Modulus |
| ** | Exponent |

---

# 3.9 Lists

Lists store multiple values.

```python
sales = [1200, 1500, 1800, 2100]
```

Access elements:

```python
print(sales[0])
```

Output:

```text
1200
```

List length:

```python
len(sales)
```

Add elements:

```python
sales.append(2500)
```

Lists are frequently used when working with collections of data.

---

# 3.10 Dictionaries

Dictionaries store key-value pairs.

Example:

```python
customer = {
    "name": "Alice",
    "city": "Toronto",
    "revenue": 2500
}
```

Access values:

```python
customer["city"]
```

Output:

```text
Toronto
```

Dictionaries are commonly used when processing JSON data.

---

# 3.11 Conditional Statements

Conditions allow programs to make decisions.

Example:

```python
sales = 15000

if sales > 10000:
    print("Target achieved")
```

Using if-else:

```python
sales = 8000

if sales > 10000:
    print("Target achieved")
else:
    print("Target not achieved")
```

---

# 3.12 Loops

Loops repeat actions.

---

## For Loop

```python
sales = [1200, 1500, 1800]

for amount in sales:
    print(amount)
```

Output:

```text
1200
1500
1800
```

---

## Sum Example

```python
sales = [1200, 1500, 1800]

total = 0

for amount in sales:
    total += amount

print(total)
```

Output:

```text
4500
```

---

# 3.13 Functions

Functions allow code reuse.

Example:

```python
def calculate_profit(revenue, expenses):
    return revenue - expenses
```

Usage:

```python
profit = calculate_profit(5000, 3200)

print(profit)
```

Output:

```text
1800
```

Functions make analytical scripts easier to maintain.

---

# 3.14 Working with Files

Reading files is a common analyst task.

---

## Read Text File

```python
with open("sales.txt", "r") as file:
    data = file.read()

print(data)
```

---

## Write Text File

```python
with open("report.txt", "w") as file:
    file.write("Monthly Sales Report")
```

---

# 3.15 Introduction to NumPy

NumPy provides efficient numerical computing.

Import:

```python
import numpy as np
```

Create an array:

```python
sales = np.array([1200, 1500, 1800, 2000])
```

Calculate average:

```python
sales.mean()
```

Output:

```text
1625.0
```

Calculate total:

```python
sales.sum()
```

Output:

```text
6500
```

NumPy is faster and more efficient than standard Python lists for numerical calculations.

---

# 3.16 Introduction to Pandas

Pandas is the most important library for data analysts.

Import:

```python
import pandas as pd
```

Pandas introduces two primary structures:

- Series
- DataFrame

Most analytical work uses DataFrames.

---

# 3.17 Creating a DataFrame

Example:

```python
import pandas as pd

data = {
    "Name": ["Alice", "Bob", "Carol"],
    "Revenue": [1500, 2200, 1800]
}

df = pd.DataFrame(data)

print(df)
```

Output:

```text
    Name  Revenue
0  Alice     1500
1    Bob     2200
2  Carol     1800
```

---

# 3.18 Reading CSV Files

Analysts frequently work with CSV files.

Example:

```python
import pandas as pd

df = pd.read_csv("sales.csv")
```

Display first rows:

```python
df.head()
```

Example output:

```text
   Customer   Revenue
0  Alice      1500
1  Bob        2200
2  Carol      1800
```

---

# 3.19 Understanding DataFrames

View column names:

```python
df.columns
```

View shape:

```python
df.shape
```

Example:

```text
(1000, 8)
```

Meaning:

- 1000 rows
- 8 columns

---

## Data Types

```python
df.dtypes
```

Example output:

```text
Customer     object
Revenue       int64
```

---

## Summary Statistics

```python
df.describe()
```

Provides:

- Count
- Mean
- Standard deviation
- Minimum
- Maximum
- Quartiles

This is often one of the first commands analysts run when exploring data.

---

# 3.20 Basic Data Selection

Select a column:

```python
df["Revenue"]
```

Multiple columns:

```python
df[["Customer", "Revenue"]]
```

First row:

```python
df.iloc[0]
```

---

# 3.21 Basic Filtering

Example:

```python
high_value = df[df["Revenue"] > 2000]
```

This returns only rows where revenue exceeds 2000.

Example output:

```text
Customer    Revenue
Bob         2200
David       3500
```

Filtering is one of the most common operations in analytics.

---

# 3.22 Example Analysis

Consider the following dataset:

| Customer | Revenue |
|-----------|-----------|
| Alice | 1500 |
| Bob | 2200 |
| Carol | 1800 |
| David | 3500 |

Python code:

```python
import pandas as pd

df = pd.read_csv("customers.csv")

print(df["Revenue"].sum())
print(df["Revenue"].mean())
print(df["Revenue"].max())
```

Output:

```text
9000
2250.0
3500
```

Insights:

- Total revenue = 9000
- Average revenue = 2250
- Highest revenue = 3500

---

# 3.23 Best Practices

When writing analytical code:

- Use meaningful variable names.
- Keep scripts organized.
- Add comments where necessary.
- Validate input data.
- Save work in version control.
- Avoid duplicating code.
- Use functions for repeated tasks.

Example:

```python
# Calculate monthly profit
profit = revenue - expenses
```

---

# Key Takeaways

- Python is one of the most important tools for modern data analysts.
- Variables, lists, dictionaries, loops, and functions form the foundation of Python programming.
- NumPy provides efficient numerical operations.
- Pandas is the primary library used for data manipulation and analysis.
- DataFrames are the central structure used in Pandas.
- Analysts commonly load data from CSV files and perform filtering, aggregation, and summary operations.
- Python enables automation and reproducible analysis workflows.

---

# Chapter Summary

In this chapter, you learned the fundamentals of Python for data analysis. You explored Python syntax, data types, lists, dictionaries, loops, and functions. You also learned how to use NumPy for numerical computing and Pandas for working with datasets. Finally, you performed basic data loading, inspection, and filtering operations using DataFrames.

In the next chapter, you will learn how analysts acquire data from files, databases, APIs, and other sources, and how to prepare that data for analysis.