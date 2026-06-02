# Appendix B: Pandas Cheat Sheet

## B.1 Overview

Pandas is the core Python library for data analysis. It provides powerful data structures and functions for working with structured data such as tables, time series, and mixed datasets.

This cheat sheet summarizes the most commonly used Pandas operations for data analysts.

---

# B.2 Importing Pandas

```python
import pandas as pd
```

---

# B.3 Creating DataFrames

## From dictionary

```python
df = pd.DataFrame({
    "Name": ["Alice", "Bob"],
    "Age": [25, 30]
})
```

---

## From CSV file

```python
df = pd.read_csv("data.csv")
```

---

## From Excel file

```python
df = pd.read_excel("data.xlsx")
```

---

## From JSON file

```python
df = pd.read_json("data.json")
```

---

# B.4 Inspecting Data

## First rows

```python
df.head()
```

---

## Last rows

```python
df.tail()
```

---

## Structure

```python
df.info()
```

---

## Shape

```python
df.shape
```

---

## Column names

```python
df.columns
```

---

## Summary statistics

```python
df.describe()
```

---

# B.5 Selecting Data

## Select column

```python
df["column_name"]
```

---

## Select multiple columns

```python
df[["col1", "col2"]]
```

---

## Select rows by index

```python
df.iloc[0:5]
```

---

## Select rows by label

```python
df.loc[0:5]
```

---

## Conditional selection

```python
df[df["Age"] > 25]
```

---

# B.6 Filtering Data

## Multiple conditions

```python
df[(df["Age"] > 25) & (df["City"] == "Toronto")]
```

---

## OR condition

```python
df[(df["Age"] > 25) | (df["City"] == "Toronto")]
```

---

# B.7 Sorting Data

## Ascending

```python
df.sort_values("Age")
```

---

## Descending

```python
df.sort_values("Age", ascending=False)
```

---

# B.8 Handling Missing Data

## Check missing values

```python
df.isnull().sum()
```

---

## Drop missing values

```python
df.dropna()
```

---

## Fill missing values

```python
df.fillna(0)
```

---

## Fill column-specific

```python
df["Age"].fillna(df["Age"].mean())
```

---

# B.9 Removing Duplicates

```python
df.drop_duplicates()
```

---

# B.10 Data Type Conversion

## Convert to numeric

```python
df["Age"] = pd.to_numeric(df["Age"])
```

---

## Convert to string

```python
df["Age"] = df["Age"].astype(str)
```

---

## Convert to datetime

```python
df["Date"] = pd.to_datetime(df["Date"])
```

---

# B.11 Column Operations

## Create new column

```python
df["New"] = df["A"] + df["B"]
```

---

## Apply function

```python
df["Age_Double"] = df["Age"].apply(lambda x: x * 2)
```

---

## Rename columns

```python
df.rename(columns={"Old": "New"})
```

---

# B.12 Grouping and Aggregation

## Group by single column

```python
df.groupby("City")["Revenue"].sum()
```

---

## Multiple aggregations

```python
df.groupby("City")["Revenue"].agg(["mean", "sum", "count"])
```

---

## Group by multiple columns

```python
df.groupby(["City", "Month"])["Revenue"].sum()
```

---

# B.13 Pivot Tables

```python
df.pivot_table(
    values="Revenue",
    index="City",
    columns="Month",
    aggfunc="sum"
)
```

---

# B.14 Merging and Joining

## Merge (SQL-style join)

```python
pd.merge(df1, df2, on="id")
```

---

## Left join

```python
pd.merge(df1, df2, on="id", how="left")
```

---

## Right join

```python
pd.merge(df1, df2, on="id", how="right")
```

---

## Outer join

```python
pd.merge(df1, df2, on="id", how="outer")
```

---

# B.15 Concatenation

## Row-wise

```python
pd.concat([df1, df2])
```

---

## Column-wise

```python
pd.concat([df1, df2], axis=1)
```

---

# B.16 Date and Time Features

## Extract year

```python
df["Year"] = df["Date"].dt.year
```

---

## Extract month

```python
df["Month"] = df["Date"].dt.month
```

---

## Extract weekday

```python
df["Weekday"] = df["Date"].dt.day_name()
```

---

# B.17 Handling Text Data

## Lowercase

```python
df["City"].str.lower()
```

---

## Strip spaces

```python
df["City"].str.strip()
```

---

## Replace values

```python
df["City"].replace("toronto", "Toronto")
```

---

# B.18 Missing Value Patterns

## Check nulls

```python
df.isnull().sum()
```

---

## Filter null rows

```python
df[df["Age"].isnull()]
```

---

# B.19 Sampling Data

## Random sample

```python
df.sample(10)
```

---

## Fraction sample

```python
df.sample(frac=0.1)
```

---

# B.20 Basic Visualization with Pandas

## Line plot

```python
df["Revenue"].plot()
```

---

## Bar plot

```python
df["City"].value_counts().plot(kind="bar")
```

---

## Histogram

```python
df["Age"].hist()
```

---

# B.21 Correlation

```python
df.corr(numeric_only=True)
```

---

# B.22 Exporting Data

## CSV

```python
df.to_csv("output.csv", index=False)
```

---

## Excel

```python
df.to_excel("output.xlsx", index=False)
```

---

## JSON

```python
df.to_json("output.json")
```

---

# B.23 Performance Tips

- Use `vectorized operations` instead of loops
- Avoid `.apply()` for large datasets when possible
- Drop unused columns early
- Use categorical types for repeated strings

---

# B.24 Common Pandas Patterns

## Top N rows

```python
df.sort_values("Revenue", ascending=False).head(10)
```

---

## Conditional update

```python
df.loc[df["Revenue"] < 0, "Revenue"] = 0
```

---

## Create bins

```python
pd.cut(df["Age"], bins=3)
```

---

# B.25 Key Takeaways

- Pandas is the core tool for data analysis in Python.
- It supports loading, cleaning, transforming, and analyzing data.
- Grouping, filtering, and merging are essential operations.
- Date-time and text processing are commonly used in analytics.
- Efficient use of Pandas improves performance significantly.
- Mastery of Pandas is essential for any data analyst.

---

# Appendix Summary

This cheat sheet provides a quick reference for the most commonly used Pandas operations in data analysis. It is designed for fast lookup during real-world work and projects.

Consistent practice with these functions will significantly improve your efficiency as a data analyst.