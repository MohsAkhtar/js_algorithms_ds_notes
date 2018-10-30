function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const board = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8
  };

  const cell1Total = board[cell1[0]] + parseInt(cell1[1]);
  const cell2Total = board[cell2[0]] + parseInt(cell2[1]);

  return cell1Total % 2 === cell2Total % 2;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
console.log(chessBoardCellColor('B5', 'H3'));
console.log(chessBoardCellColor('D7', 'H3'));
console.log(chessBoardCellColor('G1', 'F3'));
