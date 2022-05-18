function solution(n) {
  let answer = 0;
  const queens = new Array(n).fill(0);

  const isPromising = (rowIdx, colIdx) => {
    if (
      queens
        .slice(0, rowIdx)
        .some(
          (queenCol, queenRow) =>
            queenCol === colIdx ||
            rowIdx - queenRow === Math.abs(colIdx - queenCol)
        )
    )
      return false;

    return true;
  };

  const placeQueen = (rowIdx) => {
    if (rowIdx === n) {
      answer++;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (isPromising(rowIdx, i)) {
        queens[rowIdx] = i;
        placeQueen(rowIdx + 1);
        queens[rowIdx] = 0;
      }
    }
  };

  placeQueen(0);

  return answer;
}
