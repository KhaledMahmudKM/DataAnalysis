# Appendix D: Statistics Reference for Data Analysts

## D.1 Overview

Statistics provides the mathematical foundation for data analysis. It helps you summarize data, measure variability, understand relationships, and make informed decisions under uncertainty.

This appendix is a quick reference to the most important statistical concepts used in data analysis.

---

# D.2 Types of Data

## Qualitative (Categorical)

Represents labels or categories.

Examples:
- City names
- Product types
- Gender
- Departments

Types:
- Nominal (no order): City, Color
- Ordinal (ordered): Low, Medium, High

---

## Quantitative (Numerical)

Represents measurable values.

Examples:
- Revenue
- Age
- Temperature

Types:
- Discrete: Number of orders
- Continuous: Weight, height

---

# D.3 Measures of Central Tendency

## Mean

Average value.

```text
Mean = Sum of values / Number of values
```

Used when data is symmetric and has no extreme outliers.

---

## Median

Middle value when data is sorted.

Used when data contains outliers or skewness.

---

## Mode

Most frequently occurring value.

Useful for categorical data.

---

# D.4 Measures of Dispersion

## Range

```text
Range = Max - Min
```

Simple measure of spread.

---

## Variance

Measures how far values are from the mean.

```text
Variance = Σ(x - μ)² / N
```

---

## Standard Deviation

Square root of variance.

```text
SD = √Variance
```

Interpretation:
- Low SD → consistent data
- High SD → widely spread data

---

## Interquartile Range (IQR)

```text
IQR = Q3 - Q1
```

Used to detect outliers.

---

# D.5 Percentiles and Quartiles

## Percentile

Value below which a percentage of data falls.

Example:
- 90th percentile = top 10%

---

## Quartiles

- Q1 = 25th percentile
- Q2 = Median (50th percentile)
- Q3 = 75th percentile

---

# D.6 Probability Basics

## Probability Formula

```text
P(A) = Favorable outcomes / Total outcomes
```

---

## Key Rules

- 0 ≤ P(A) ≤ 1
- P(A') = 1 - P(A)

---

## Independent Events

```text
P(A and B) = P(A) × P(B)
```

---

## Dependent Events

```text
P(A and B) = P(A) × P(B|A)
```

---

# D.7 Common Probability Distributions

---

## Normal Distribution

Bell-shaped curve.

Properties:
- Mean = Median = Mode
- Symmetrical
- Defined by μ and σ

Used in:
- Heights
- Test scores
- Natural variations

---

## Binomial Distribution

Models success/failure outcomes.

```text
P(X = k) = C(n, k) p^k (1-p)^(n-k)
```

Used in:
- A/B testing
- Conversion rates

---

## Poisson Distribution

Models number of events in a fixed interval.

Used in:
- Call center arrivals
- Website traffic spikes

---

# D.8 Correlation

## Correlation Coefficient (r)

```text
-1 ≤ r ≤ +1
```

Interpretation:

| Value | Meaning |
|------|--------|
| +1 | Perfect positive relationship |
| 0 | No relationship |
| -1 | Perfect negative relationship |

---

## Important Rule

Correlation does NOT imply causation.

---

# D.9 Covariance

Measures directional relationship between two variables.

```text
Cov(X, Y) = E[(X - μx)(Y - μy)]
```

- Positive → variables move together
- Negative → inverse relationship

---

# D.10 Hypothesis Testing

## Key Concepts

### Null Hypothesis (H₀)
Assumes no effect.

### Alternative Hypothesis (H₁)
Assumes an effect exists.

---

## P-value

Probability of observing results assuming H₀ is true.

---

## Decision Rule

- p ≤ 0.05 → reject H₀
- p > 0.05 → fail to reject H₀

---

## Type I and Type II Errors

| Type | Meaning |
|------|--------|
| Type I | False positive |
| Type II | False negative |

---

# D.11 Confidence Intervals

Range of plausible values for a parameter.

```text
CI = estimate ± margin of error
```

Example:
- Mean = 100 ± 5
- True value likely between 95 and 105

---

# D.12 Sampling Concepts

## Population

Entire dataset or group.

## Sample

Subset of population.

---

## Sampling Methods

### Random Sampling
Every item has equal chance.

### Stratified Sampling
Population divided into groups.

### Systematic Sampling
Select every nth item.

---

# D.13 Central Limit Theorem (CLT)

Key concept:

> The sampling distribution of the mean approaches a normal distribution as sample size increases.

Even if data is not normal, sample means often are.

---

# D.14 Outliers

## Definition

Values significantly different from others.

---

## Detection Methods

- Z-score > 3 or < -3
- IQR method

```text
Outlier < Q1 - 1.5(IQR)
Outlier > Q3 + 1.5(IQR)
```

---

# D.15 Z-Score

Measures how many standard deviations a value is from the mean.

```text
Z = (X - μ) / σ
```

Interpretation:
- Z = 0 → average
- Z > 0 → above average
- Z < 0 → below average

---

# D.16 Descriptive vs Inferential Statistics

## Descriptive Statistics

- Summarize data
- Mean, median, SD

## Inferential Statistics

- Make predictions
- Hypothesis testing, confidence intervals

---

# D.17 Common Statistical Mistakes

- Confusing correlation with causation
- Ignoring sample bias
- Misinterpreting p-values
- Over-relying on averages
- Ignoring variability

---

# D.18 Key Formulas Summary

| Concept | Formula |
|--------|--------|
| Mean | Σx / n |
| Variance | Σ(x - μ)² / N |
| SD | √Variance |
| Probability | Favorable / Total |
| Z-score | (X - μ) / σ |
| IQR | Q3 - Q1 |
| Correlation | r = relationship strength |

---

# D.19 Key Takeaways

- Statistics is the backbone of data analysis.
- Descriptive statistics summarize data behavior.
- Inferential statistics help make decisions under uncertainty.
- Probability and distributions model real-world randomness.
- Correlation measures relationships but not causation.
- Sampling and CLT allow generalization from small data.

---

# Appendix Summary

This appendix provides a quick reference to essential statistical concepts used in data analysis. These foundations support everything from exploratory data analysis to advanced modeling and decision-making.

Mastering these concepts allows analysts to interpret data correctly and make reliable, evidence-based conclusions.