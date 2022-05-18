# 프로그래머스 카펫

**문제 )**
Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

**해결과정)**

```
function solution(brown, yellow) {
  let answer = [];
  // 너비는 brown + yellow이다
  const carpetWidth = brown + yellow;
  // 약수 구하기
  const divisors = [];
  for (let i = 3; i < carpetWidth; i++) {
    if (carpetWidth % i === 0) {
      divisors.push(i);
    }
  }
  // 약수들 중 가로*2 -2(세로의 최소 길이) 보다 작거나 같을 때만 약수로 사용가능
  const possibleDivisors = divisors.filter(
    (divisor) => divisor <= brown / 2 - 1
  );
  // 가능한 약수배열 중 곱해서 carpetWidth가 나오는 약수들 구하기
  for (let i = possibleDivisors.length; i >= 0; i--) {
    if (possibleDivisors.includes(carpetWidth / possibleDivisors[i])) {
      answer.push(possibleDivisors[i]);
      if (possibleDivisors[i] === carpetWidth / possibleDivisors[i]) {
        answer.push(possibleDivisors[i]);
      }
    }
  }

  return answer;
}

```
