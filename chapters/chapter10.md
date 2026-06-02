# Chapter 10: Data Transformation and Feature Engineering

## Learning Objectives

By the end of this chapter, you will be able to:

- Understand what data transformation is and why it is needed.
- Apply scaling and normalization techniques.
- Encode categorical variables.
- Create new features from existing data.
- Work with date and time features.
- Aggregate and reshape datasets for analysis.
- Prepare features for reporting and modeling.

---

# 10.1 Introduction

Raw data is rarely in a form that is directly useful for analysis.

Even after cleaning, datasets often need to be transformed to improve usability, interpretability, and analytical value.

Data transformation involves converting data into a more suitable format for analysis.

Feature engineering is the process of creating new variables (features) from existing data to improve insights or model performance.

---

# 10.2 Why Data Transformation Matters

Data transformation is important because it:

- Improves data consistency
- Enables better comparisons
- Supports advanced analysis
- Enhances visualization clarity
- Prepares data for statistical or machine learning tasks
- Reduces bias caused by scale differences

Without transformation, analysis may be misleading or incomplete.

---

# 10.3 Types of Data Transformation

Common transformation techniques include:

- Scaling and normalization
- Encoding categorical variables
- Feature creation
- Aggregation
- Date-time transformation
- Binning

---

# 10.4 Scaling and Normalization

Different variables may have different scales.

Example:

- Revenue: 1,000 to 100,000
- Age: 18 to 65

Scaling ensures fair comparison.

---

## Min-Max Scaling

Scales values between 0 and 1.

```python
df["Revenue_Scaled"] = (
    df["Revenue"] - df["Revenue"].min()
) / (
    df["Revenue"].max() - df["Revenue"].min()
)
```

---

## Standardization (Z-score)

Centers data around mean with unit variance.

```python
df["Revenue_Z"] = (
    df["Revenue"] - df["Revenue"].mean()
) / df["Revenue"].std()
```

---

## Interpretation

- Values near 0: close to average
- Positive values: above average
- Negative values: below average

---

# 10.5 Encoding Categorical Variables

Machine analysis often requires numerical values.

---

## One-Hot Encoding

Converts categories into binary columns.

Example:

```python
pd.get_dummies(df["City"])
```

Output:

```text
Toronto  Oakville  Brampton
1        0         0
0        1         0
0        0         1
```

---

## Label Encoding

Assigns numeric values to categories.

Example:

```python
from sklearn.preprocessing import LabelEncoder

le = LabelEncoder()
df["City_Code"] = le.fit_transform(df["City"])
```

---

## When to Use

| Method | Best Use Case |
|--------|--------------|
| One-Hot Encoding | Nominal categories |
| Label Encoding | Ordered categories |

---

# 10.6 Feature Creation

Feature creation generates new insights from existing data.

---

## Example: Revenue per Order

```python
df["Revenue_Per_Order"] = df["Revenue"] / df["Orders"]
```

---

## Example: Profit Margin

```python
df["Profit_Margin"] = df["Profit"] / df["Revenue"]
```

---

## Example: Customer Value Score

```python
df["Customer_Value"] = df["Revenue"] * df["Orders"]
```

---

## Why Feature Creation Matters

- Reveals hidden patterns
- Improves analytical depth
- Enhances segmentation
- Supports better decisions

---

# 10.7 Date and Time Features

Time-based data is very common in analytics.

---

## Convert to DateTime

```python
df["Date"] = pd.to_datetime(df["Date"])
```

---

## Extract Components

### Year

```python
df["Year"] = df["Date"].dt.year
```

---

### Month

```python
df["Month"] = df["Date"].dt.month
```

---

### Day

```python
df["Day"] = df["Date"].dt.day
```

---

### Weekday

```python
df["Weekday"] = df["Date"].dt.day_name()
```

---

## Why This Matters

Time features help identify:

- Seasonal trends
- Weekly patterns
- Monthly performance cycles

---

# 10.8 Binning (Discretization)

Binning converts continuous variables into categories.

---

## Example: Age Groups

```python
bins = [0, 18, 35, 60, 100]

labels = ["Teen", "Young Adult", "Adult", "Senior"]

df["Age_Group"] = pd.cut(df["Age"], bins=bins, labels=labels)
```

---

## Example: Revenue Categories

```python
df["Revenue_Category"] = pd.cut(
    df["Revenue"],
    bins=3,
    labels=["Low", "Medium", "High"]
)
```

---

## Why Binning is Useful

- Simplifies analysis
- Helps segmentation
- Improves interpretability

---

# 10.9 Aggregation Features

Aggregation summarizes data at a higher level.

---

## Example: Total Revenue by Customer

```python
df_grouped = df.groupby("Customer")["Revenue"].sum()
```

---

## Example: Average Monthly Revenue

```python
df.groupby("Month")["Revenue"].mean()
```

---

## Example: Multi-Level Aggregation

```python
df.groupby(["City", "Month"])["Revenue"].sum()
```

---

# 10.10 Reshaping Data

Reshaping helps organize data for analysis.

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

## Melt (Wide to Long Format)

```python
pd.melt(df, id_vars=["City"], value_vars=["Revenue", "Profit"])
```

---

## Why Reshaping Matters

- Makes data easier to analyze
- Improves visualization
- Supports reporting tools

---

# 10.11 Handling Interaction Features

Interaction features combine multiple variables.

---

## Example

```python
df["Revenue_Per_Visit"] = df["Revenue"] / df["Website_Visits"]
```

---

## Example: Combined Score

```python
df["Engagement_Score"] = df["Clicks"] * df["Time_Spent"]
```

---

## Why Interaction Features Matter

They capture relationships that individual variables cannot show.

---

# 10.12 Feature Selection (Basic Concept)

Not all features are useful.

Some may:

- Add noise
- Be redundant
- Slow analysis

---

## Example

If Revenue and Profit are highly correlated, one may be redundant depending on analysis goals.

---

# 10.13 Real-World Example

A retail dataset includes:

- Customer demographics
- Sales transactions
- Dates of purchase
- City and product categories

Feature engineering steps:

1. Convert dates into month and weekday
2. Create revenue per order
3. Categorize customers by spending level
4. Encode city names
5. Aggregate revenue by customer
6. Normalize revenue values

Results:

- Better customer segmentation
- Clear seasonal trends
- Improved reporting structure

---

# 10.14 Common Mistakes

- Creating too many unnecessary features
- Ignoring feature relevance
- Misusing scaling techniques
- Applying encoding incorrectly
- Losing interpretability

---

# 10.15 Best Practices

- Create features only when they add value
- Keep transformations interpretable
- Document all feature engineering steps
- Validate transformed data
- Avoid redundancy
- Understand business context before creating features

---

# Key Takeaways

- Data transformation improves usability and analytical power.
- Scaling ensures fair comparison between variables.
- Encoding converts categories into numeric form.
- Feature engineering creates new insights from existing data.
- Date-time features are essential for time-based analysis.
- Aggregation and reshaping help structure data for analysis.
- Good feature engineering improves both analysis and decision-making.

---

# Chapter Summary

In this chapter, you learned how to transform and enhance datasets for better analysis. You explored scaling, encoding, feature creation, date-time processing, aggregation, and reshaping techniques. You also learned how to engineer meaningful features that improve analytical depth and insight generation.

In the next chapter, you will learn how data analysis is applied in business contexts through KPIs, metrics, and business performance analysis.