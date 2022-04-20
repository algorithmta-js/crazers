# 프로그래머스 [가장큰수](https://programmers.co.kr/learn/courses/30/lessons/42746)

## Solution1

```javascript
function solution(numbers) {
  numbers = numbers
    .map((number) => (number += ""))
    .sort((a, b) => b + a - (a + b));
  return numbers[0] === "0" ? "0" : numbers.join("");
}
```

1. numbers의 원소들을 문자로 변경한다.
2. 가장 큰 수로 만드는 정렬을 위해 `sort`메서드를 사용한다.
3. 정렬된 numbers에 대해 `000...`예외처리를 해준 뒤, 배열을 공백없이 합쳐 결과를 반환한다.

## Solution2

```javascript
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  //바꾼 값을 내부에 정의한 퀵소트에 매개변수로 넘긴다
  const pivot = arr[0];
  const less = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] + pivot >= pivot + arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
function solution(numbers) {
  numbers = numbers.map((number) => (number += ""));
  numbers = quickSort(numbers);
  // "00000" 예외처리
  return numbers[0] === "0" ? "0" : numbers.join("");
}
```

1. solution1과 같다.
2. 자체적으로 구현한 `quickSort`함수를 통해 배열을 정렬 (-3단계까지)
3. solution1과 같다.
