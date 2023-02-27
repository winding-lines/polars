window.SIDEBAR_ITEMS = {"constant":["IDX_DTYPE","NULL","NULL_DTYPE"],"enum":["AggExpr","AnyValue","ArrowDataType","ArrowTimeUnit","AsofStrategy","CategoricalOrdering","ClosedWindow","CsvEncoding","DataType","Excluded","Expr","FillNullStrategy","FunctionExpr","GroupByMethod","GroupsIndicator","GroupsProxy","InterpolationMethod","IpcCompression","JoinType","JsonFormat","LiteralValue","LogicalPlan","NullValues","Operator","ParallelStrategy","ParquetCompression","PolarsError","QuantileInterpolOptions","RankMethod","RevMapping","RevMappingBuilder","SearchSortedSide","StartBy","TakeIdx","TakeRandBranch2","TakeRandBranch3","TimeUnit","UniqueKeepStrategy"],"fn":["all","all_exprs","any_exprs","apply_binary","apply_multiple","arange","arg_sort_by","arg_where","as_struct","avg","binary_expr","cast","coalesce","col","collect_all","cols","concat","concat_lst","concat_str","count","cov","cumfold_exprs","cumreduce_exprs","date_range_vec","datetime","datetime_to_timestamp_ms","datetime_to_timestamp_ns","datetime_to_timestamp_us","diag_concat_lf","dtype_col","dtype_cols","duration","first","floor_div_series","fmt_groupby_column","fold_exprs","format_str","groupby_values","groupby_windows","in_nanoseconds_window","indexes_to_usizes","interpolate","is_first","is_not_null","is_null","last","lit","map_binary","map_list_multiple","map_multiple","max","max_exprs","mean","median","merge_dtypes","min","min_exprs","not","pearson_corr","quantile","range","reduce_exprs","repeat","resolve_homedir","search_sorted","spearman_rank_corr","sum","sum_exprs","ternary_expr","unix_time","when"],"macro":["df"],"mod":["aggregations","arrow_ndjson","binary","cat","chunkedarray","cloud","datatypes","default_arrays","expr","full","json","nan_propagating_aggregate","predicates","read_impl","series","slice","string","utf8","utils","zip"],"struct":["AggregationContext","AnonymousScanOptions","Arc","ArrowField","ArrowSchema","AsOfOptions","BatchedParquetReader","BinaryChunkedBuilder","BinaryTakeRandom","BinaryTakeRandomSingleChunk","BinaryType","BoolTakeRandom","BoolTakeRandomSingleChunk","BooleanChunkedBuilder","BooleanType","Bounds","BoundsIter","BrotliLevel","CatIter","CategoricalChunked","CategoricalChunkedBuilder","CategoricalNameSpace","CategoricalType","ChunkedArray","CsvReader","CsvWriter","DataFrame","DateType","DatetimeArgs","DatetimeType","DecimalType","Duration","DurationArgs","DurationType","DynamicGroupOptions","Field","Float32Type","Float64Type","GroupBy","GroupsIdx","GroupsProxyIter","GroupsProxyParIter","GzipLevel","Int128Type","Int16Type","Int32Type","Int64Type","Int8Type","IpcReader","IpcStreamReader","IpcStreamWriter","IpcStreamWriterOption","IpcWriter","IpcWriterOption","IpcWriterOptions","JoinBuilder","JoinOptions","JsonLineReader","JsonReader","JsonWriter","LazyCsvReader","LazyFrame","LazyGroupBy","LazyJsonLineReader","ListBinaryChunkedBuilder","ListBooleanChunkedBuilder","ListNameSpace","ListPrimitiveChunkedBuilder","ListTakeRandom","ListTakeRandomSingleChunk","ListType","ListUtf8ChunkedBuilder","Logical","MeltArgs","NoNull","Null","NumTakeRandomChunked","NumTakeRandomCont","NumTakeRandomSingleChunk","ObjectTakeRandom","ObjectTakeRandomSingleChunk","ObjectType","OptState","OwnedObject","ParquetReader","ParquetWriteOptions","ParquetWriter","PhysicalIoHelper","PrimitiveChunkedBuilder","RankOptions","RollingGroupOptions","RollingOptions","RollingOptionsFixedWindow","RollingOptionsImpl","ScanArgsAnonymous","ScanArgsIpc","ScanArgsParquet","Schema","Series","SlicedGroups","SortOptions","SpecialEq","StrHashLocal","StrpTimeOptions","StructArray","StructChunked","TakeRandomBitmap","TimeType","UInt16Type","UInt32Type","UInt64Type","UInt8Type","Utf8ChunkedBuilder","Utf8TakeRandom","Utf8TakeRandomSingleChunk","Utf8Type","When","WhenThen","WhenThenThen","Window","ZstdLevel"],"trait":["AnonymousScan","ArgAgg","ArrowGetItem","AsBinary","AsList","AsUtf8","BinaryNameSpaceImpl","BinaryUdfOutputField","ChunkAgg","ChunkAggSeries","ChunkAnyValue","ChunkApply","ChunkApplyKernel","ChunkBytes","ChunkCast","ChunkCompare","ChunkCumAgg","ChunkExpandAtIndex","ChunkExplode","ChunkFillNullValue","ChunkFilter","ChunkFull","ChunkFullNull","ChunkPeaks","ChunkQuantile","ChunkReverse","ChunkRollApply","ChunkSet","ChunkShift","ChunkShiftFill","ChunkSort","ChunkTake","ChunkTakeEvery","ChunkUnique","ChunkVar","ChunkZip","ChunkedBuilder","ChunkedSet","DataFrameJoinOps","DataFrameOps","DateMethods","DatetimeMethods","DurationMethods","ExprEvalExtension","FromData","FromDataBinary","FromDataUtf8","FunctionOutputField","FxHash","GetAnyValue","IndexOfSchema","IndexToUsize","InitHashMaps","IntoGroupsProxy","IntoLazy","IntoListNameSpace","IntoSeries","IntoTakeRandom","IntoVec","IsFirst","IsFloat","IsIn","IsLast","LazyFileListReader","LhsNumOps","ListBuilderTrait","ListFromIter","ListNameSpaceExtension","ListNameSpaceImpl","Literal","LogicalType","MutableBitmapExtension","NamedFrom","NamedFromOwned","NewChunkedArray","NumOpsDispatch","NumOpsDispatchChecked","NumericNative","PartitionedAggregation","PhysicalExpr","PolarsArray","PolarsDataType","PolarsFloatType","PolarsIntegerType","PolarsIterator","PolarsNumericType","PolarsObject","PolarsRound","PolarsSingleType","PolarsTemporalGroupby","PolarsTruncate","PolarsUpsample","QuantileAggSeries","Range","RenameAliasFn","RepeatBy","RollingAgg","RollingSeries","SerReader","SerWriter","SeriesBinaryUdf","SeriesMethods","SeriesOpsTime","SeriesSealed","SeriesTrait","SeriesUdf","SlicedArray","StrConcat","TakeIterator","TakeIteratorNulls","TakeRandom","TakeRandomUtf8","TemporalMethods","TimeMethods","ToDummies","UdfSchema","Utf8Methods","Utf8NameSpaceImpl","ValueSize","VarAggSeries","VecHash"],"type":["AllowedOptimizations","ArrayRef","ArrowResult","BinaryChunked","BooleanChunked","BorrowIdxItem","CloudOptions","DateChunked","DatetimeChunked","DecimalChunked","Dummy","DurationChunked","FillNullLimit","Float32Chunked","Float64Chunked","GetOutput","GlobIterator","GroupsSlice","IdxArr","IdxCa","IdxItem","IdxSize","IdxType","Int128Chunked","Int16Chunked","Int32Chunked","Int64Chunked","Int8Chunked","LargeBinaryArray","LargeListArray","LargeStringArray","ListChunked","ObjectChunked","PlHashMap","PlHashSet","PlIdHashMap","PlIndexMap","PlIndexSet","PolarsResult","SchemaRef","TimeChunked","TimeZone","UInt16Chunked","UInt32Chunked","UInt64Chunked","UInt8Chunked","Utf8Chunked"]};