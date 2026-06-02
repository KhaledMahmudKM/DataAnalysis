# Chapter 2: Data Types and Data Sources

## Learning Objectives

By the end of this chapter, you will be able to:

- Understand the different types of data.
- Distinguish between structured, semi-structured, and unstructured data.
- Recognize common data formats used in analytics.
- Identify various sources of data.
- Understand the advantages and limitations of different data sources.
- Select appropriate data sources for analytical projects.

---

# 2.1 Introduction

Data analysis begins with data.

Before data can be cleaned, analyzed, visualized, or reported, analysts must understand the nature of the data they are working with and where that data originates.

Different data types require different storage methods, processing techniques, and analytical approaches.

For example:

- Sales transactions are typically stored in relational databases.
- Website logs are often stored as text files.
- Customer feedback may exist as emails or survey responses.
- Product images are stored as image files.

Understanding data types and sources is a fundamental skill for every analyst.

---

# 2.2 What Is Data?

Data consists of facts, observations, measurements, or records that describe events, objects, or activities.

Examples include:

| Example | Data |
|----------|----------|
| Customer | Name, Age, Address |
| Product | Product ID, Price |
| Sales | Quantity Sold, Revenue |
| Website | Number of Visitors |
| Employee | Salary, Department |

By itself, data may have little meaning. Analysis transforms data into useful information.

---

# 2.3 Categories of Data

Data can be classified in several ways.

One common classification is:

1. Qualitative Data
2. Quantitative Data

---

## Qualitative Data

Qualitative data describes characteristics or categories.

Examples:

- Customer gender
- Product category
- Country
- Department name
- Vehicle type

Qualitative data often answers questions such as:

- What type?
- Which category?
- Which group?

Example:

| Employee | Department |
|-----------|-----------|
| Alice | Finance |
| Bob | IT |
| Carol | Marketing |

The department values represent categories rather than numerical measurements.

---

## Quantitative Data

Quantitative data represents measurable values.

Examples:

- Sales amount
- Salary
- Temperature
- Age
- Number of customers

Quantitative data can be analyzed mathematically.

Example:

| Product | Revenue |
|----------|----------|
| Product A | 5000 |
| Product B | 7500 |
| Product C | 4200 |

---

# 2.4 Discrete and Continuous Data

Quantitative data is often divided into two categories.

---

## Discrete Data

Discrete data consists of countable values.

Examples:

- Number of customers
- Number of products sold
- Number of support tickets
- Number of website visits

Example:

| Day | Orders |
|------|------|
| Monday | 32 |
| Tuesday | 45 |
| Wednesday | 28 |

Orders can only be counted as whole numbers.

---

## Continuous Data

Continuous data can take any value within a range.

Examples:

- Height
- Weight
- Temperature
- Revenue
- Time

Example:

| Customer | Purchase Amount |
|-----------|-----------|
| Customer A | 152.75 |
| Customer B | 89.50 |
| Customer C | 224.99 |

Values may contain decimals.

---

# 2.5 Structured, Semi-Structured, and Unstructured Data

One of the most important classifications for analysts is based on data organization.

---

## Structured Data

Structured data follows a predefined format.

It is usually stored in rows and columns.

Example:

| CustomerID | Name | City | Revenue |
|------------|------------|------------|------------|
| 101 | Alice | Toronto | 1500 |
| 102 | Bob | Oakville | 1200 |

Characteristics:

- Easy to query
- Easy to filter
- Easy to aggregate
- Commonly stored in databases

Examples:

- SQL databases
- Spreadsheets
- Data warehouse tables

---

## Semi-Structured Data

Semi-structured data contains some organizational structure but does not follow a strict table format.

Common formats:

- JSON
- XML
- YAML

Example JSON:

```json
{
  "customer_id": 101,
  "name": "Alice",
  "city": "Toronto"
}
```

Characteristics:

- Flexible structure
- Easier to exchange between applications
- Common in APIs

---

## Unstructured Data

Unstructured data has no predefined format.

Examples:

- Emails
- Documents
- Images
- Videos
- Audio recordings
- Social media posts

Characteristics:

- Difficult to analyze directly
- Often requires specialized tools
- Represents a large percentage of organizational data

Example:

```text
Customer feedback:

"The delivery was fast, but the packaging was damaged."
```

This text contains useful information but requires additional processing before analysis.

---

# 2.6 Common Data Formats

Analysts frequently encounter several file formats.

---

## CSV (Comma-Separated Values)

CSV is one of the most common formats.

Example:

```csv
CustomerID,Name,Revenue
101,Alice,1500
102,Bob,1200
103,Carol,2100
```

Advantages:

- Simple
- Portable
- Supported by almost every tool

Disadvantages:

- No data types
- No relationships
- No formatting

---

## Excel Files

Excel remains widely used in business environments.

Common extensions:

```text
.xlsx
.xls
```

Advantages:

- User friendly
- Supports formulas
- Supports charts

Disadvantages:

- Difficult to manage very large datasets
- Version control challenges

---

## JSON

JavaScript Object Notation (JSON) is commonly used by web applications and APIs.

Example:

```json
{
  "name": "Alice",
  "city": "Toronto"
}
```

Advantages:

- Human readable
- Flexible
- Popular for APIs

---

## XML

XML was widely used before JSON became dominant.

Example:

```xml
<Customer>
    <Name>Alice</Name>
    <City>Toronto</City>
</Customer>
```

Advantages:

- Structured
- Extensible

Disadvantages:

- More verbose than JSON

---

## Database Tables

Many organizations store data in relational databases.

Example table:

| CustomerID | Name | Revenue |
|------------|------------|------------|
| 101 | Alice | 1500 |
| 102 | Bob | 1200 |

Advantages:

- Efficient storage
- Powerful querying
- Data integrity controls

---

# 2.7 Internal Data Sources

Internal sources originate from within an organization.

Examples include:

- Sales systems
- Accounting systems
- Customer databases
- HR systems
- Inventory systems
- CRM platforms

---

## Transactional Systems

Transactional systems record business operations.

Examples:

- Orders
- Payments
- Refunds
- Inventory updates

These systems are often the primary source of business analytics.

---

## Enterprise Applications

Examples:

- ERP systems
- CRM systems
- Helpdesk systems

Common data includes:

- Customers
- Products
- Sales
- Support cases

---

## Operational Databases

Operational databases support day-to-day business activities.

Examples:

- Customer records
- Inventory records
- Employee information

Analysts often retrieve data from these systems using SQL.

---

# 2.8 External Data Sources

External data originates outside the organization.

Examples include:

- Government datasets
- Industry reports
- Public APIs
- Financial data providers
- Social media platforms

---

## Government Open Data

Many governments provide public datasets.

Examples:

- Population statistics
- Economic indicators
- Transportation data
- Weather data

These datasets are valuable for market analysis and research.

---

## Public APIs

Many services provide APIs that allow data retrieval.

Examples:

- Weather services
- Financial markets
- Geographic data
- Social media platforms

Analysts can automate data collection from APIs.

---

## Third-Party Data Providers

Organizations often purchase data from specialized providers.

Examples:

- Market research companies
- Financial information providers
- Demographic data providers

---

# 2.9 Primary and Secondary Data

Another useful classification is based on how data is obtained.

---

## Primary Data

Primary data is collected directly by the organization.

Examples:

- Surveys
- Interviews
- Experiments
- Customer feedback forms

Advantages:

- Tailored to business needs
- Greater control over quality

Disadvantages:

- Expensive
- Time consuming

---

## Secondary Data

Secondary data is collected by another organization.

Examples:

- Government statistics
- Research reports
- Industry studies

Advantages:

- Less expensive
- Faster acquisition

Disadvantages:

- Limited control over quality
- May not perfectly match requirements

---

# 2.10 Data Quality Considerations

Not all data is equally useful.

Analysts must evaluate data quality before beginning analysis.

Important dimensions include:

---

## Accuracy

Does the data correctly represent reality?

Example:

Incorrect customer ages reduce accuracy.

---

## Completeness

Are important values missing?

Example:

Customer records missing postal codes.

---

## Consistency

Is the same information represented consistently?

Example:

```text
Canada
CAN
CA
```

These may refer to the same country.

---

## Timeliness

Is the data current?

Example:

Using sales data from two years ago may not reflect current trends.

---

## Validity

Does the data conform to expected rules?

Example:

A customer age of -5 would be invalid.

---

# 2.11 Real-World Example

A company wants to analyze customer purchasing behavior.

The analyst gathers data from:

| Source | Type |
|----------|----------|
| Sales Database | Structured |
| Customer Survey | Structured |
| Website Logs | Semi-Structured |
| Product Reviews | Unstructured |
| Government Demographics | External Structured |

The analyst combines these sources to answer questions such as:

- Which customers generate the most revenue?
- Which products receive the best reviews?
- Which regions show growth opportunities?
- Which customer segments should be targeted?

This demonstrates how multiple data types and sources are often combined in a single analysis project.

---

# Key Takeaways

- Data may be qualitative or quantitative.
- Quantitative data may be discrete or continuous.
- Data can be structured, semi-structured, or unstructured.
- Common formats include CSV, Excel, JSON, XML, and database tables.
- Data may originate from internal or external sources.
- Data may be primary or secondary.
- Data quality significantly impacts analysis results.
- Understanding data characteristics is essential before beginning analysis.

---

# Chapter Summary

In this chapter, you learned about the various types of data and the sources from which analysts obtain information. You explored structured, semi-structured, and unstructured data, examined common data formats, and reviewed both internal and external data sources. You also learned how data quality affects analytical outcomes.

In the next chapter, you will begin working with one of the most important tools in modern analytics: Python.
