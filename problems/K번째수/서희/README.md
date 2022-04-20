# 프로그래머스 [K번째 수](https://programmers.co.kr/learn/courses/30/lessons/42748)![](https://images.velog.io/images/seohee0112/post/1ce0c3c3-4879-455b-a337-38fa110124ff/image.png)

## Solution1

```javascript
function solution(array, commands) {
  let answer = [];
  for (const command of commands) {
    let commandArray = array.slice(command[0] - 1, command[1]);
    commandArray.sort((a, b) => a - b);
    answer.push(commandArray[command[2] - 1]);
  }
  return answer;
}
```

1. 주어진 배열에 대해 각 명령들을 실행하고자 `for ... of` 반복문을 수행한다.
2. 명령대로 배열을 자르기 위해 `slice`메서드를 사용하고, `index`기준으로 배열을 자른다.
3. 오름차순으로 정렬하기 위해 `sort`메서드를 사용한다.
4. 정렬된 배열을 대상으로 최종값을 결과 배열에 넣어주고, 최종적으로 결과 배열을 반환한다.

## Solution2

```javascript
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  //바꾼 값을 내부에 정의한 퀵소트에 매개변수로 넘긴다
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
function solution(array, commands) {
  const answer = [];
  for (const command of commands) {
    const commandArray = quickSort(array.slice(command[0] - 1, command[1]));
    answer.push(commandArray[command[2] - 1]);
  }
  return answer;
}
```

1. solution1과 같다.
2. 자체적으로 구현한 `quickSort`함수를 통해 배열을 정렬 (-3단계까지)
3. solution1과 같다.
