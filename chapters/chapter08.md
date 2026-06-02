# Chapter 8: SQL for Data Analysis

## Learning Objectives

By the end of this chapter, you will be able to:

- Understand why SQL is essential for data analysis.
- Query data from relational databases.
- Filter, sort, and aggregate data using SQL.
- Perform joins between multiple tables.
- Use grouping to generate business insights.
- Apply basic subqueries.
- Understand window functions at an introductory level.
- Translate business questions into SQL queries.

---

# 8.1 Introduction

SQL (Structured Query Language) is one of the most important tools for data analysts.

While Python is used for analysis and visualization, SQL is primarily used to retrieve and manipulate data stored in relational databases.

Most business data is stored in databases such as:

- MySQL
- PostgreSQL
- SQL Server
- Oracle
- SQLite

SQL allows analysts to directly extract the data they need without relying on pre-built reports.

---

# 8.2 Why SQL is Important

SQL is essential because:

- Most organizational data is stored in databases.
- It is fast for querying large datasets.
- It is standardized across systems.
- It allows efficient filtering and aggregation.
- It reduces dependency on engineering teams.

In many organizations, SQL is the first skill expected from a data analyst.

---

# 8.3 Basic Structure of a SQL Query

A typical SQL query looks like this:

```sql
SELECT column1, column2
FROM table_name
WHERE condition;
```

Example:

```sql
SELECT name, revenue
FROM customers
WHERE revenue > 1000;
```

---

# 8.4 SELECT Statement

The SELECT statement retrieves data from a table.

---

## Select All Columns

```sql
SELECT *
FROM customers;
```

---

## Select Specific Columns

```sql
SELECT name, city
FROM customers;
```

---

# 8.5 Filtering Data with WHERE

The WHERE clause filters records.

---

## Example

```sql
SELECT *
FROM customers
WHERE city = 'Toronto';
```

---

## Comparison Operators

| Operator | Meaning |
|----------|----------|
| = | Equal |
| != | Not equal |
| > | Greater than |
| < | Less than |
| >= | Greater or equal |
| <= | Less or equal |

---

## Example

```sql
SELECT *
FROM sales
WHERE revenue > 2000;
```

---

# 8.6 Sorting Data with ORDER BY

ORDER BY sorts results.

---

## Ascending Order

```sql
SELECT *
FROM sales
ORDER BY revenue ASC;
```

---

## Descending Order

```sql
SELECT *
FROM sales
ORDER BY revenue DESC;
```

---

## Example Insight

- Highest revenue customers appear at the top
- Useful for ranking analysis

---

# 8.7 Limiting Results

LIMIT restricts the number of rows returned.

---

## Example

```sql
SELECT *
FROM sales
ORDER BY revenue DESC
LIMIT 10;
```

This returns the top 10 highest revenue records.

---

# 8.8 Aggregate Functions

Aggregate functions perform calculations on multiple rows.

---

## Common Functions

| Function | Description |
|----------|------------|
| SUM | Total |
| AVG | Average |
| COUNT | Number of rows |
| MIN | Minimum value |
| MAX | Maximum value |

---

## Examples

### Total Revenue

```sql
SELECT SUM(revenue)
FROM sales;
```

---

### Average Revenue

```sql
SELECT AVG(revenue)
FROM sales;
```

---

### Count Records

```sql
SELECT COUNT(*)
FROM sales;
```

---

# 8.9 GROUP BY Clause

GROUP BY groups data into categories.

---

## Example

```sql
SELECT city, SUM(revenue)
FROM sales
GROUP BY city;
```

---

## Example Insight

- Each city’s total revenue is calculated
- Useful for regional analysis

---

## Multiple Aggregations

```sql
SELECT city,
       SUM(revenue),
       AVG(revenue),
       COUNT(*)
FROM sales
GROUP BY city;
```

---

# 8.10 HAVING Clause

HAVING filters grouped results.

---

## Example

```sql
SELECT city, SUM(revenue)
FROM sales
GROUP BY city
HAVING SUM(revenue) > 10000;
```

---

## Difference Between WHERE and HAVING

| Clause | Purpose |
|--------|--------|
| WHERE | Filters rows before grouping |
| HAVING | Filters after grouping |

---

# 8.11 JOIN Operations

JOINs combine data from multiple tables.

---

## Types of Joins

- INNER JOIN
- LEFT JOIN
- RIGHT JOIN
- FULL JOIN

---

# 8.12 INNER JOIN

Returns matching records from both tables.

---

## Example

```sql
SELECT customers.name, sales.revenue
FROM customers
INNER JOIN sales
ON customers.id = sales.customer_id;
```

---

## Insight

- Only customers with sales appear
- Non-matching records are excluded

---

# 8.13 LEFT JOIN

Returns all records from the left table.

---

## Example

```sql
SELECT customers.name, sales.revenue
FROM customers
LEFT JOIN sales
ON customers.id = sales.customer_id;
```

---

## Insight

- All customers are included
- Missing sales appear as NULL

---

# 8.14 RIGHT JOIN

Returns all records from the right table.

Less commonly used in practice.

---

# 8.15 Subqueries

A subquery is a query inside another query.

---

## Example

```sql
SELECT name, revenue
FROM sales
WHERE revenue > (
    SELECT AVG(revenue)
    FROM sales
);
```

---

## Insight

- Finds customers above average performance

---

# 8.16 Window Functions (Introduction)

Window functions perform calculations across related rows without collapsing results.

---

## Example: Ranking

```sql
SELECT name,
       revenue,
       RANK() OVER (ORDER BY revenue DESC) as rank
FROM sales;
```

---

## Example Insight

- Each customer is ranked by revenue
- No rows are removed

---

# 8.17 Real-World Business Queries

---

## Top Customers

```sql
SELECT name, revenue
FROM customers
ORDER BY revenue DESC
LIMIT 5;
```

---

## Revenue by City

```sql
SELECT city, SUM(revenue) as total_revenue
FROM sales
GROUP BY city;
```

---

## Monthly Sales Trend

```sql
SELECT month, SUM(revenue)
FROM sales
GROUP BY month
ORDER BY month;
```

---

## Customer Segmentation

```sql
SELECT name,
       CASE
           WHEN revenue > 5000 THEN 'High Value'
           WHEN revenue > 2000 THEN 'Medium Value'
           ELSE 'Low Value'
       END as segment
FROM customers;
```

---

# 8.18 SQL in Data Analysis Workflow

SQL is often used at the beginning of analysis:

```text
Database
   ↓
SQL Query
   ↓
Extract Dataset
   ↓
Python / Excel Analysis
   ↓
Visualization
   ↓
Reporting
```

---

# 8.19 Common SQL Mistakes

---

## Forgetting JOIN Conditions

This can cause incorrect Cartesian products.

---

## Misusing GROUP BY

All non-aggregated columns must be included.

---

## Filtering in Wrong Clause

Confusing WHERE and HAVING.

---

## Ignoring NULL Values

NULL handling is critical in analysis.

---

# 8.20 Best Practices

- Always test queries on small datasets first.
- Use aliases for readability.
- Format queries clearly.
- Avoid selecting unnecessary columns.
- Validate results with sample checks.
- Understand table relationships before joining.

---

# Key Takeaways

- SQL is essential for extracting data from databases.
- SELECT, WHERE, ORDER BY, and LIMIT form the basics.
- Aggregate functions summarize data.
- GROUP BY enables categorical analysis.
- JOINs combine multiple tables.
- Subqueries allow nested analysis.
- Window functions provide advanced analytical capabilities.
- SQL is often the first step in any data analysis workflow.

---

# Chapter Summary

In this chapter, you learned how SQL is used in data analysis to extract, filter, aggregate, and combine data from relational databases. You explored core SQL commands, joins, grouping techniques, and introductory window functions. You also learned how SQL fits into the broader data analysis workflow.

In the next chapter, you will learn fundamental statistical concepts that help you interpret data more rigorously and support analytical conclusions.