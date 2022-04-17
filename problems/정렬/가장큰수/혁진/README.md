# 프로그래머스 가장 큰 수

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