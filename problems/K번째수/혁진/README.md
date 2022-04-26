# 프로그래머스 K번째 수 

commands배열에서 매 요소는 각각 ijk 3개의 command가 주어진다.
각 command에 대한 array 배열의 i~j 부분배열 중 K번째수를 배열로 반환하는 문제.


## Solution

```javascript
function solution(array, commands) {
  let answer = [];
  commands.forEach(([i, j, k]) => {
      const kNum = array.slice(i - 1, j)
                        .sort((a, b) => a - b)[k - 1];            
      answer.push(kNum);
  })
  return answer;
}
```

부분 배열을 오름차순으로 정렬하여 k번째수를 answer 배열에 추가한 뒤 반환한다.

> 추가 4.20 

## Solution - 2

소령이 리뷰 보고 문제 설명 추가하려다가 forEach문으로 새로운 배열 만드는 것 = map 함수랑 같다라고 생각해서
map으로 변경해봤음.

```javascript
function solution(array, commands) {
    return commands.map(([i, j, k]) => (
        array.slice(i - 1, j)
             .sort((a, b) => a - b)[k - 1]
    ))
}
```