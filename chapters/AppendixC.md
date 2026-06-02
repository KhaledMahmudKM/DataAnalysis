# Appendix C: SQL Cheat Sheet

## C.1 Overview

SQL (Structured Query Language) is used to query, manipulate, and analyze data stored in relational databases.

This cheat sheet covers the most commonly used SQL commands for data analysis.

---

# C.2 Basic Query Structure

```sql
SELECT column1, column2
FROM table_name
WHERE condition
GROUP BY column
HAVING condition
ORDER BY column
LIMIT n;
```

---

# C.3 SELECT Statement

## Select all columns

```sql
SELECT *
FROM customers;
```

---

## Select specific columns

```sql
SELECT name, city
FROM customers;
```

---

# C.4 Filtering Data (WHERE)

## Basic condition

```sql
SELECT *
FROM sales
WHERE revenue > 1000;
```

---

## Multiple conditions (AND)

```sql
SELECT *
FROM sales
WHERE revenue > 1000 AND city = 'Toronto';
```

---

## OR condition

```sql
SELECT *
FROM sales
WHERE city = 'Toronto' OR city = 'Vancouver';
```

---

## IN operator

```sql
SELECT *
FROM sales
WHERE city IN ('Toronto', 'Vancouver', 'Calgary');
```

---

## BETWEEN operator

```sql
SELECT *
FROM sales
WHERE revenue BETWEEN 1000 AND 5000;
```

---

## LIKE operator (pattern matching)

```sql
SELECT *
FROM customers
WHERE name LIKE 'A%';
```

---

# C.5 Sorting Data (ORDER BY)

## Ascending order

```sql
SELECT *
FROM sales
ORDER BY revenue ASC;
```

---

## Descending order

```sql
SELECT *
FROM sales
ORDER BY revenue DESC;
```

---

# C.6 Limiting Results

```sql
SELECT *
FROM sales
LIMIT 10;
```

---

## Top N highest values

```sql
SELECT *
FROM sales
ORDER BY revenue DESC
LIMIT 5;
```

---

# C.7 Aggregate Functions

| Function | Description |
|----------|------------|
| COUNT() | Number of rows |
| SUM() | Total |
| AVG() | Average |
| MIN() | Minimum |
| MAX() | Maximum |

---

## Examples

```sql
SELECT COUNT(*) FROM sales;
SELECT SUM(revenue) FROM sales;
SELECT AVG(revenue) FROM sales;
```

---

# C.8 GROUP BY

## Group by single column

```sql
SELECT city, SUM(revenue)
FROM sales
GROUP BY city;
```

---

## Multiple aggregates

```sql
SELECT city,
       SUM(revenue),
       AVG(revenue),
       COUNT(*)
FROM sales
GROUP BY city;
```

---

## Group by multiple columns

```sql
SELECT city, product, SUM(revenue)
FROM sales
GROUP BY city, product;
```

---

# C.9 HAVING Clause

Used to filter grouped results.

```sql
SELECT city, SUM(revenue)
FROM sales
GROUP BY city
HAVING SUM(revenue) > 10000;
```

---

# C.10 JOINs

## INNER JOIN

```sql
SELECT customers.name, sales.revenue
FROM customers
INNER JOIN sales
ON customers.id = sales.customer_id;
```

---

## LEFT JOIN

```sql
SELECT customers.name, sales.revenue
FROM customers
LEFT JOIN sales
ON customers.id = sales.customer_id;
```

---

## RIGHT JOIN

```sql
SELECT customers.name, sales.revenue
FROM customers
RIGHT JOIN sales
ON customers.id = sales.customer_id;
```

---

## FULL OUTER JOIN

```sql
SELECT customers.name, sales.revenue
FROM customers
FULL OUTER JOIN sales
ON customers.id = sales.customer_id;
```

---

# C.11 Subqueries

## Basic subquery

```sql
SELECT name, revenue
FROM sales
WHERE revenue > (
    SELECT AVG(revenue)
    FROM sales
);
```

---

## IN subquery

```sql
SELECT name
FROM customers
WHERE id IN (
    SELECT customer_id
    FROM sales
);
```

---

# C.12 CASE Statement

Used for conditional logic.

```sql
SELECT name,
       revenue,
       CASE
           WHEN revenue > 5000 THEN 'High'
           WHEN revenue > 2000 THEN 'Medium'
           ELSE 'Low'
       END AS revenue_category
FROM sales;
```

---

# C.13 Window Functions (Basic)

## Ranking

```sql
SELECT name,
       revenue,
       RANK() OVER (ORDER BY revenue DESC) AS rank
FROM sales;
```

---

## Row numbering

```sql
SELECT name,
       revenue,
       ROW_NUMBER() OVER (ORDER BY revenue DESC) AS row_num
FROM sales;
```

---

## Running total

```sql
SELECT name,
       revenue,
       SUM(revenue) OVER (ORDER BY id) AS running_total
FROM sales;
```

---

# C.14 Date Functions (Common Examples)

## Extract year

```sql
SELECT YEAR(date_column)
FROM sales;
```

---

## Extract month

```sql
SELECT MONTH(date_column)
FROM sales;
```

---

## Filter by date range

```sql
SELECT *
FROM sales
WHERE date_column BETWEEN '2025-01-01' AND '2025-12-31';
```

---

# C.15 Data Modification (Basic Awareness)

## Insert

```sql
INSERT INTO customers (name, city)
VALUES ('Alice', 'Toronto');
```

---

## Update

```sql
UPDATE customers
SET city = 'Vancouver'
WHERE name = 'Alice';
```

---

## Delete

```sql
DELETE FROM customers
WHERE id = 10;
```

---

# C.16 NULL Handling

## Check NULL values

```sql
SELECT *
FROM sales
WHERE revenue IS NULL;
```

---

## Replace NULL

```sql
SELECT COALESCE(revenue, 0)
FROM sales;
```

---

# C.17 Common Analytical Patterns

## Top N customers

```sql
SELECT name, revenue
FROM sales
ORDER BY revenue DESC
LIMIT 10;
```

---

## Revenue by category

```sql
SELECT category, SUM(revenue)
FROM sales
GROUP BY category;
```

---

## Monthly trend

```sql
SELECT MONTH(date), SUM(revenue)
FROM sales
GROUP BY MONTH(date)
ORDER BY MONTH(date);
```

---

# C.18 Performance Tips

- Use indexes on frequently filtered columns
- Avoid SELECT *
- Filter data early using WHERE
- Use JOINs carefully on indexed keys
- Aggregate before joining when possible

---

# C.19 Common Mistakes

- Forgetting GROUP BY columns
- Mixing WHERE and HAVING incorrectly
- Incorrect JOIN conditions
- Ignoring NULL values
- Overusing subqueries instead of joins

---

# C.20 Key Takeaways

- SQL is essential for data extraction and analysis.
- SELECT, WHERE, ORDER BY, and GROUP BY form the foundation.
- JOINs combine data from multiple tables.
- Subqueries and CASE statements enable advanced logic.
- Window functions support advanced analytics.
- Proper SQL design improves performance and clarity.

---

# Appendix Summary

This cheat sheet provides a quick reference for essential SQL operations used in data analysis. It is intended for fast lookup during real-world querying and analytical tasks.

Mastering these SQL patterns is fundamental for working effectively with relational databases in any data analyst role.