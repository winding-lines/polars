use std::io::Cursor;

use polars::prelude::*;

#[test]
fn test_basic() -> PolarsResult<()> {
    let df1 = df! {
        "a" => ["1", "2"],
        "b" => [1, 2]
    }?;
    let empty_df = df1.head(Some(0));
    let mut stacked = df1.clone();
    stacked.vstack_mut(&empty_df)?;
    stacked.vstack_mut(&df1)?;
    let mut buf = Cursor::new(Vec::new());
    DeltaWriter::new(&mut buf).finish(&mut stacked)?;
    let read_df = DeltaReader::new(buf).finish()?;
    assert!(stacked.frame_equal(&read_df));
    Ok(())
}
