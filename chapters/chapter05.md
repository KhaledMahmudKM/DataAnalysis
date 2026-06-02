# Chapter 5: Data Cleaning and Preparation

## Learning Objectives

By the end of this chapter, you will be able to:

- Understand why data cleaning is critical in data analysis.
- Identify common data quality issues.
- Handle missing values effectively.
- Remove duplicates from datasets.
- Fix inconsistent formatting and data types.
- Detect and treat outliers.
- Perform basic data transformation and standardization.
- Prepare a dataset for exploratory data analysis.

---

# 5.1 Introduction

In real-world projects, raw data is almost never clean.

Even when data is collected from reliable systems, it often contains:

- Missing values
- Duplicate records
- Incorrect formats
- Inconsistent categories
- Invalid values
- Outliers

Data cleaning is the process of identifying and correcting these issues to ensure the dataset is accurate, consistent, and usable.

It is widely accepted that data analysts spend a significant portion of their time on data cleaning rather than analysis.

---

# 5.2 Why Data Cleaning Matters

Poor-quality data leads to poor-quality insights.

Examples of issues caused by unclean data:

- Incorrect revenue calculations
- Misleading trends
- Wrong business decisions
- Broken dashboards
- Inaccurate predictions

Clean data ensures:

- Reliable analysis
- Accurate reporting
- Trustworthy insights
- Reproducible results

---

# 5.3 Common Data Quality Issues

Before cleaning data, it is important to recognize typical problems.

## Missing Values

Some entries may be empty.

Example:

| Customer | Revenue |
|----------|----------|
| Alice | 1500 |
| Bob |  |
| Carol | 1800 |

---

## Duplicate Records

Same record appears more than once.

Example:

| ID | Name |
|----|------|
| 1 | Alice |
| 2 | Bob |
| 2 | Bob |

---

## Inconsistent Formatting

Example:

- “Toronto”
- “toronto”
- “TORONTO”

These represent the same value but appear differently.

---

## Incorrect Data Types

Example:

- Revenue stored as text instead of numeric
- Dates stored as strings

---

## Invalid Values

Example:

- Age = -10
- Revenue = -500 (if not allowed)
- Date = 31/02/2024

---

## Outliers

Extreme values that deviate significantly from others.

Example:

Most salaries: 40,000–90,000  
One salary: 5,000,000

---

# 5.4 Handling Missing Values

Missing data is one of the most common issues in analytics.

---

## Detect Missing Values

```python
df.isnull().sum()
```

This shows the number of missing values per column.

---

## Option 1: Remove Missing Values

### Remove rows

```python
df_clean = df.dropna()
```

### Remove columns

```python
df_clean = df.dropna(axis=1)
```

Use this when missing values are minimal.

---

## Option 2: Fill Missing Values

### Fill with a constant

```python
df["Revenue"] = df["Revenue"].fillna(0)
```

### Fill with mean

```python
df["Revenue"] = df["Revenue"].fillna(df["Revenue"].mean())
```

### Fill with median

```python
df["Revenue"] = df["Revenue"].fillna(df["Revenue"].median())
```

### Fill with forward fill

```python
df.fillna(method="ffill", inplace=True)
```

---

## Choosing a Strategy

| Situation | Approach |
|------------|----------|
| Few missing values | Remove rows |
| Numeric data | Mean or median |
| Time series | Forward fill |
| Categorical data | Mode or "Unknown" |

---

# 5.5 Handling Duplicates

Duplicates can distort analysis results.

---

## Detect Duplicates

```python
df.duplicated().sum()
```

---

## View Duplicates

```python
df[df.duplicated()]
```

---

## Remove Duplicates

```python
df = df.drop_duplicates()
```

---

## Keep Specific Duplicate

```python
df = df.drop_duplicates(keep="first")
```

---

# 5.6 Fixing Data Types

Incorrect data types can cause errors in calculations.

---

## Check Data Types

```python
df.dtypes
```

---

## Convert to Numeric

```python
df["Revenue"] = pd.to_numeric(df["Revenue"])
```

---

## Convert to String

```python
df["CustomerID"] = df["CustomerID"].astype(str)
```

---

## Convert to DateTime

```python
df["Date"] = pd.to_datetime(df["Date"])
```

---

## Example Problem

```text
Revenue = "1500"
```

Fix:

```python
df["Revenue"] = df["Revenue"].astype(int)
```

---

# 5.7 Standardizing Text Data

Text data often contains inconsistencies.

---

## Convert to Lowercase

```python
df["City"] = df["City"].str.lower()
```

---

## Convert to Uppercase

```python
df["City"] = df["City"].str.upper()
```

---

## Remove Spaces

```python
df["City"] = df["City"].str.strip()
```

---

## Replace Values

```python
df["City"] = df["City"].replace("toronto", "Toronto")
```

---

## Example Problem

| City |
|------|
| toronto |
| TORONTO |
| Toronto |

After cleaning:

| City |
|------|
| Toronto |
| Toronto |
| Toronto |

---

# 5.8 Handling Outliers

Outliers are extreme values that may distort analysis.

---

## Detect Outliers Using IQR

```python
Q1 = df["Revenue"].quantile(0.25)
Q3 = df["Revenue"].quantile(0.75)

IQR = Q3 - Q1

lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR
```

---

## Filter Out Outliers

```python
df_clean = df[
    (df["Revenue"] >= lower_bound) &
    (df["Revenue"] <= upper_bound)
]
```

---

## Alternative: Cap Outliers

```python
df["Revenue"] = df["Revenue"].clip(lower_bound, upper_bound)
```

---

# 5.9 Feature Creation (Basic Transformation)

Sometimes new variables improve analysis.

---

## Example: Revenue per Order

```python
df["RevenuePerOrder"] = df["Revenue"] / df["Orders"]
```

---

## Example: Extract Year from Date

```python
df["Year"] = df["Date"].dt.year
```

---

## Example: Extract Month

```python
df["Month"] = df["Date"].dt.month
```

---

# 5.10 Normalization (Basic Overview)

Normalization scales values to a common range.

---

## Min-Max Scaling

```python
df["RevenueScaled"] = (
    df["Revenue"] - df["Revenue"].min()
) / (
    df["Revenue"].max() - df["Revenue"].min()
)
```

Result range:

0 to 1

---

# 5.11 Data Validation Checks

After cleaning, validate the dataset.

---

## Check Shape

```python
df.shape
```

---

## Check Missing Values

```python
df.isnull().sum()
```

---

## Check Summary

```python
df.describe()
```

---

## Check Unique Values

```python
df["City"].unique()
```

---

# 5.12 Real-World Example

A retail dataset contains:

- Missing revenue values
- Duplicate transactions
- Mixed city formatting
- Incorrect date formats
- Extreme outliers in sales

Cleaning steps:

1. Remove duplicates
2. Fill missing revenue with median
3. Standardize city names
4. Convert dates to datetime
5. Remove extreme outliers
6. Validate dataset structure

Result:

A clean dataset ready for analysis and visualization.

---

# 5.13 Data Cleaning Workflow

A structured approach:

```text
Load Data
   ↓
Inspect Data
   ↓
Handle Missing Values
   ↓
Remove Duplicates
   ↓
Fix Data Types
   ↓
Standardize Text
   ↓
Handle Outliers
   ↓
Validate Dataset
   ↓
Proceed to Analysis
```

---

# 5.14 Best Practices

- Always inspect data before cleaning.
- Never assume data is clean.
- Keep raw data unchanged.
- Document all cleaning steps.
- Use reusable cleaning functions.
- Validate after every major transformation.
- Avoid unnecessary data loss.

---

# Key Takeaways

- Data cleaning is one of the most important steps in data analysis.
- Real-world datasets are often incomplete, inconsistent, or incorrect.
- Missing values can be removed or imputed.
- Duplicates can distort results and should be removed.
- Data types must be corrected before analysis.
- Text data often requires standardization.
- Outliers should be carefully handled, not blindly removed.
- Clean data leads to accurate and reliable insights.

---

# Chapter Summary

In this chapter, you learned how to clean and prepare raw datasets for analysis. You explored techniques for handling missing values, duplicates, incorrect data types, inconsistent text, and outliers. You also learned how to transform and validate data to ensure it is ready for exploratory analysis.

In the next chapter, you will begin exploring the data in depth using exploratory data analysis (EDA), where you will uncover patterns, trends, and insights.