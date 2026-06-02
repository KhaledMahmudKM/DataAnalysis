# Chapter 6: Exploratory Data Analysis (EDA)

## Learning Objectives

By the end of this chapter, you will be able to:

- Understand what Exploratory Data Analysis (EDA) is.
- Perform univariate, bivariate, and multivariate analysis.
- Use summary statistics to understand datasets.
- Identify patterns, trends, and anomalies.
- Understand relationships between variables.
- Use grouping and aggregation for insights.
- Apply basic correlation analysis.
- Build a structured EDA workflow.

---

# 6.1 Introduction

Exploratory Data Analysis (EDA) is the process of analyzing datasets to understand their main characteristics, often with the help of visual methods and summary statistics.

EDA is typically performed after data cleaning and before formal modeling or reporting.

The main goal of EDA is to answer questions such as:

- What does the data look like?
- What patterns exist in the data?
- Are there any anomalies or outliers?
- How are variables related to each other?

EDA helps analysts develop intuition about the dataset before making decisions.

---

# 6.2 Why EDA is Important

EDA plays a critical role in data analysis because it helps:

- Reveal hidden patterns
- Detect errors or inconsistencies
- Identify relationships between variables
- Generate hypotheses
- Guide further analysis
- Improve decision-making

Without EDA, analysts risk misinterpreting data or missing important insights.

---

# 6.3 Types of EDA

EDA is commonly divided into three categories:

- Univariate Analysis
- Bivariate Analysis
- Multivariate Analysis

---

# 6.4 Univariate Analysis

Univariate analysis focuses on a single variable.

It answers questions like:

- What is the distribution of this variable?
- What are its central values?
- Are there any unusual values?

---

## Numerical Variable Example

Consider revenue data:

```python
df["Revenue"].describe()
```

Example output:

```text
count    1000
mean     2200
std       450
min       500
max       5000
```

---

## Common Visualizations

### Histogram

```python
import matplotlib.pyplot as plt

df["Revenue"].hist()
plt.show()
```

Histograms help visualize distribution.

---

## Key Insights from Univariate Analysis

- Central tendency (mean, median)
- Spread of values
- Skewness
- Presence of outliers

---

## Categorical Variable Example

```python
df["City"].value_counts()
```

Example output:

```text
Toronto    300
Oakville   250
Brampton   200
Mississauga 250
```

---

## Bar Chart

```python
df["City"].value_counts().plot(kind="bar")
plt.show()
```

---

# 6.5 Bivariate Analysis

Bivariate analysis examines relationships between two variables.

---

## Numerical vs Numerical

Example: Revenue vs Orders

```python
df.plot.scatter(x="Orders", y="Revenue")
plt.show()
```

---

## Correlation

```python
df[["Revenue", "Orders"]].corr()
```

Example output:

```text
Revenue  Orders
Revenue   1.00   0.85
Orders    0.85   1.00
```

Interpretation:

A strong positive relationship exists between orders and revenue.

---

## Categorical vs Numerical

Example: Revenue by City

```python
df.groupby("City")["Revenue"].mean()
```

---

## Bar Plot

```python
df.groupby("City")["Revenue"].mean().plot(kind="bar")
plt.show()
```

---

## Insight Example

- Toronto has the highest average revenue
- Smaller cities show lower performance

---

# 6.6 Multivariate Analysis

Multivariate analysis examines relationships among three or more variables.

---

## Example: Revenue by City and Month

```python
df.groupby(["City", "Month"])["Revenue"].mean()
```

---

## Pivot Table

```python
df.pivot_table(
    values="Revenue",
    index="City",
    columns="Month"
)
```

---

## Heatmap Visualization

```python
import seaborn as sns
import matplotlib.pyplot as plt

pivot = df.pivot_table(
    values="Revenue",
    index="City",
    columns="Month"
)

sns.heatmap(pivot)
plt.show()
```

---

## Insight Example

- Some cities perform better in specific months
- Seasonal trends are visible

---

# 6.7 Summary Statistics in EDA

Summary statistics help describe data quickly.

---

## Numeric Summary

```python
df.describe()
```

Provides:

- Mean
- Median
- Standard deviation
- Quartiles

---

## Skewness

```python
df["Revenue"].skew()
```

Interpretation:

- Positive skew: long right tail
- Negative skew: long left tail

---

## Kurtosis

```python
df["Revenue"].kurt()
```

Indicates presence of outliers.

---

# 6.8 Grouping and Aggregation

Grouping is essential for business analysis.

---

## Total Revenue by City

```python
df.groupby("City")["Revenue"].sum()
```

---

## Multiple Aggregations

```python
df.groupby("City")["Revenue"].agg(["mean", "sum", "count"])
```

---

## Example Insight

- High revenue cities may not always have high average revenue
- Some cities have high transaction counts but lower value per transaction

---

# 6.9 Detecting Patterns

EDA helps identify patterns such as:

- Seasonal trends
- Customer behavior differences
- Regional performance differences
- Product performance trends

---

## Time-Based Pattern Example

```python
df.groupby("Month")["Revenue"].sum().plot()
plt.show()
```

---

## Insight Example

- Revenue peaks during holiday months
- Lower sales in off-season months

---

# 6.10 Detecting Anomalies

Anomalies are unusual values that do not follow expected patterns.

---

## Example: High Revenue Outliers

```python
df[df["Revenue"] > df["Revenue"].mean() + 3 * df["Revenue"].std()]
```

---

## Visual Detection

```python
df.boxplot(column="Revenue")
plt.show()
```

---

## Insight Example

- One region shows unusually high sales due to bulk corporate purchases
- These should be analyzed separately

---

# 6.11 Correlation Analysis

Correlation measures the strength of relationships between variables.

---

## Correlation Matrix

```python
df.corr(numeric_only=True)
```

---

## Heatmap

```python
sns.heatmap(df.corr(numeric_only=True), annot=True)
plt.show()
```

---

## Interpretation

| Value | Meaning |
|-------|--------|
| 1.0 | Perfect positive correlation |
| 0.5 to 0.9 | Strong correlation |
| 0.1 to 0.5 | Weak correlation |
| 0 | No correlation |
| Negative | Inverse relationship |

---

# 6.12 EDA Workflow

A structured EDA process:

```text
Understand dataset structure
        ↓
Run summary statistics
        ↓
Analyze single variables (univariate)
        ↓
Analyze relationships (bivariate)
        ↓
Explore multiple variables (multivariate)
        ↓
Detect patterns and anomalies
        ↓
Generate insights
```

---

# 6.13 Real-World Example

A retail company analyzes sales data.

Steps:

1. Examine revenue distribution
2. Identify top-performing cities
3. Compare revenue by product category
4. Analyze monthly sales trends
5. Detect outliers in transaction values
6. Study relationship between orders and revenue

Findings:

- Revenue is highly concentrated in a few cities
- Holiday months significantly increase sales
- High order count strongly correlates with revenue
- A small number of transactions are extremely high-value

These insights guide business strategy.

---

# 6.14 Best Practices

- Always start with summary statistics.
- Visualize before making conclusions.
- Check both numerical and categorical variables.
- Use grouping for business insights.
- Do not ignore outliers.
- Validate findings with multiple methods.
- Keep analysis structured and repeatable.

---

# Key Takeaways

- EDA is the process of understanding data before formal analysis.
- It includes univariate, bivariate, and multivariate analysis.
- Visualization is a key component of EDA.
- Correlation helps identify relationships between variables.
- Grouping and aggregation reveal business insights.
- Anomalies and patterns must be carefully examined.
- EDA helps generate hypotheses and guide decision-making.

---

# Chapter Summary

In this chapter, you learned how to perform exploratory data analysis using statistical and visual techniques. You explored univariate, bivariate, and multivariate analysis methods, learned how to detect patterns and anomalies, and used grouping and correlation to uncover relationships in data. These skills form the foundation for deeper analytical and business insights.

In the next chapter, you will learn how to visualize data effectively to communicate insights clearly to stakeholders.