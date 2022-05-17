// 가능한 카펫 경우의 수 가져오기
function getCarpets(size) {
  const rows = [];
  for (let divisor = size; divisor > 0; divisor -= 1) {
    if (size % divisor === 0) rows.push(divisor);
  }

  const carpets = [];
  const mid = Math.floor(rows.length / 2);
  for (let index = 0; index < mid; index++) {
    carpets.push([rows[index], rows[rows.length - 1 - index]]);
  }
  if (rows.length % 2 === 1) carpets.push([rows[mid], rows[mid]]);

  return carpets;
}
function solution(brown, yellow) {
  for (const [row, col] of getCarpets(brown + yellow)) {
    if (row * 2 + col * 2 - 4 === brown) return [row, col];
  }
}
