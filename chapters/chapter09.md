# Chapter 9: Statistics for Data Analysts

## Learning Objectives

By the end of this chapter, you will be able to:

- Understand the role of statistics in data analysis.
- Distinguish between descriptive and inferential statistics.
- Compute and interpret key summary measures.
- Understand probability basics and distributions.
- Apply sampling concepts.
- Interpret correlation and its limitations.
- Understand hypothesis testing at a conceptual level.

---

# 9.1 Introduction

Statistics is the foundation of data analysis.

While data analysis focuses on exploring and understanding data, statistics provides the mathematical framework to describe, summarize, and make inferences from data.

Without statistics, it is difficult to determine whether observed patterns are meaningful or just random variation.

---

# 9.2 Why Statistics Matters in Data Analysis

Statistics helps analysts:

- Summarize large datasets efficiently
- Identify patterns and trends
- Measure variability in data
- Make predictions and inferences
- Evaluate uncertainty
- Support decision-making with evidence

In practice, statistics transforms raw data into meaningful insights.

---

# 9.3 Types of Statistics

Statistics is generally divided into two categories:

- Descriptive Statistics
- Inferential Statistics

---

# 9.4 Descriptive Statistics

Descriptive statistics summarize and describe data.

They do not make predictions beyond the dataset.

---

## Measures of Central Tendency

These describe the center of a dataset.

---

### Mean

The average value.

Example:

```text
Revenue = [100, 200, 300]
Mean = (100 + 200 + 300) / 3 = 200
```

In Python:

```python
df["Revenue"].mean()
```

---

### Median

The middle value when data is sorted.

Useful when data contains outliers.

---

### Mode

The most frequently occurring value.

---

## Measures of Spread

These describe how data varies.

---

### Range

Difference between maximum and minimum values.

---

### Variance

Measures how far values are spread from the mean.

In Python:

```python
df["Revenue"].var()
```

---

### Standard Deviation

Square root of variance.

Represents average distance from the mean.

```python
df["Revenue"].std()
```

---

## Interpretation Example

- Low standard deviation: data is consistent
- High standard deviation: data is widely spread

---

# 9.5 Percentiles and Quartiles

Percentiles divide data into 100 equal parts.

Quartiles divide data into four parts.

---

## Quartiles

- Q1: 25th percentile
- Q2: Median (50th percentile)
- Q3: 75th percentile

In Python:

```python
df["Revenue"].quantile(0.25)
df["Revenue"].quantile(0.5)
df["Revenue"].quantile(0.75)
```

---

## Interquartile Range (IQR)

```text
IQR = Q3 - Q1
```

Used to detect outliers.

---

# 9.6 Probability Basics

Probability measures the likelihood of an event.

---

## Basic Formula

```text
Probability = Favorable Outcomes / Total Outcomes
```

Example:

Probability of rolling a 6 on a die:

```text
1 / 6
```

---

## Key Concepts

- 0 means impossible
- 1 means certain
- Values between 0 and 1 indicate likelihood

---

# 9.7 Common Distributions

---

## Normal Distribution

Also called the bell curve.

Characteristics:

- Symmetrical
- Mean = Median = Mode
- Most values cluster around center

Example: heights, test scores

---

## Skewed Distribution

### Right Skewed

Most values are low, with few high outliers.

Example: income distribution

### Left Skewed

Most values are high, with few low values.

---

## Uniform Distribution

All values have equal probability.

---

# 9.8 Sampling

Sampling is selecting a subset of data from a larger population.

---

## Why Sampling is Used

- Full datasets may be too large
- Faster computation
- Cost efficiency
- Easier analysis

---

## Types of Sampling

### Random Sampling

Every data point has equal chance of selection.

```python
df.sample(n=100)
```

---

### Stratified Sampling

Data is divided into groups and sampled from each group.

---

### Systematic Sampling

Select every nth record.

---

## Sample vs Population

| Term | Meaning |
|------|--------|
| Population | Entire dataset |
| Sample | Subset of data |

---

# 9.9 Correlation

Correlation measures the relationship between two variables.

---

## Correlation Coefficient

Ranges from -1 to +1.

---

## Interpretation

| Value | Meaning |
|------|--------|
| +1 | Perfect positive relationship |
| 0 | No relationship |
| -1 | Perfect negative relationship |

---

## Example

```python
df[["Revenue", "Orders"]].corr()
```

---

## Important Note

Correlation does not imply causation.

Example:

- Ice cream sales and drowning incidents may be correlated
- This does not mean one causes the other

---

# 9.10 Hypothesis Testing (Conceptual Overview)

Hypothesis testing helps determine whether an assumption about data is statistically valid.

---

## Key Terms

### Null Hypothesis (H₀)

Assumes no effect or no difference.

### Alternative Hypothesis (H₁)

Assumes there is an effect or difference.

---

## Example

H₀: Sales before and after marketing campaign are the same  
H₁: Sales increased after campaign

---

## P-value

Measures the probability of observing results assuming H₀ is true.

---

## Interpretation

- Small p-value (typically < 0.05): reject H₀
- Large p-value: fail to reject H₀

---

# 9.11 Confidence Intervals

A confidence interval provides a range of plausible values for a parameter.

---

## Example

```text
Mean revenue = 2000 ± 100
```

This means:

- True mean likely lies between 1900 and 2100

---

# 9.12 Real-World Example

A company wants to analyze customer spending.

Steps:

- Calculate mean spending per customer
- Measure variability using standard deviation
- Identify distribution shape
- Segment customers using percentiles
- Test whether new campaign improved spending

Insights:

- Most customers spend between 100 and 500
- A small group of high-value customers drives revenue
- Marketing campaign shows statistically significant improvement

---

# 9.13 Statistics in Data Analysis Workflow

```text
Data Collection
      ↓
Data Cleaning
      ↓
Exploratory Analysis
      ↓
Statistical Analysis
      ↓
Insight Generation
      ↓
Decision Making
```

---

# 9.14 Common Mistakes in Statistics

- Confusing correlation with causation
- Ignoring outliers
- Misinterpreting averages
- Using small samples to generalize
- Overlooking variability

---

# 9.15 Best Practices

- Always visualize data alongside statistics
- Use multiple measures (mean, median, std)
- Check distribution before analysis
- Be cautious with small datasets
- Interpret results in context

---

# Key Takeaways

- Statistics provides tools to summarize and interpret data.
- Descriptive statistics describe datasets using mean, median, and variability.
- Probability helps quantify uncertainty.
- Sampling allows analysis of large datasets efficiently.
- Correlation measures relationships but not causation.
- Hypothesis testing supports data-driven decisions.
- Understanding distributions is essential for interpretation.

---

# Chapter Summary

In this chapter, you learned the fundamental statistical concepts used in data analysis. You explored descriptive and inferential statistics, probability, sampling methods, correlation, and hypothesis testing. These concepts help you interpret data more rigorously and support evidence-based decision-making.

In the next chapter, you will learn how data analysts apply these concepts to real business problems using KPIs and business analysis techniques.