# 프로그래머스 [카펫](https://programmers.co.kr/learn/courses/30/lessons/42842)

## solution

```js
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
```

- getCarpets

1. 가능한 rows를 총 격자의 수의 약수들로 초기화한다. 이때, 카펫의 가로 길이가 세로 길이보다 길다고 했으므로 반복문을 감소하는 방향으로 진행해야한다.
2. 중간 지점을 체크하여 일차원 배열을 이차원 배열로 담아주고,약수들이 홀수개이면 중간지점의 약수를 모두 인자로 갖는 배열을 추가로 넣어주어야 한다.

- solution

1. getCarperts을 통해 얻어진 이차원 배열에 대한 반복을 진행한다.
2. row, col을 계산하여 brown의 수를 비교하여 정답을 반환한다.
