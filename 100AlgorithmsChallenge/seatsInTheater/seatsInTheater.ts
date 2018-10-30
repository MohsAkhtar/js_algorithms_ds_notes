function seatsInTheater(
  nCols: number,
  nRows: number,
  col: number,
  row: number
): number {
  const colsBehind = nCols - col + 1;
  const rowsBehind = nRows - row;

  return colsBehind * rowsBehind;
}

console.log(seatsInTheater(16, 11, 5, 3));
