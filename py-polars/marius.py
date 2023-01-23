import polars


df = polars.scan_parquet("gs://lov2023test/open-targets/22.11/diseases/*.parquet")
df.head()