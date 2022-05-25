# 프로그래머스 N-Queen

> 문제는 [여기](https://programmers.co.kr/learn/courses/30/lessons/12952?language=javascript)서 확인하세요.

백트래킹의 대표적인 문제이다.
기본적으로 같은 row 혹은 같은 column에는 퀸을 배치할 수 없다.
그렇기 때문에 row 혹은 column 둘 중 하나를 기준으로 잡고 탐색을 진행하면 수월하다.

필자는 row를 고정시켜놓고 column을 변경시키면서 탐색했다.

## Solution
* N-Queen 문제에서 유망하지 않은 노드의 경우는 두가지이다.
  * 이전 row에서 같은 column에 이미 퀸을 배치했음. -> `isPromising` 첫번쨰 조건
  * 대각선 위치에 퀸이 배치되어 있음. -> `isPromising` 두번째 조건.
* 유망하다고 판단된 노드에만 퀸을 배치하고 다음 row로 넘어간다.

> 대각선에 있는 노드는 (0,1), (1,2), (2,3) 처럼 구성되어 있다. 
> 대각선에 있는 두 노드 (a,b) (c,d) 에 대해서 abs(c-a) === abs(d-b) 가 성립한다.
> 이를 통해 isPromising의 두번째 조건을 작성할 수 있다.
  

```javascript
function solution(n) {
    var answer = 0;
    const queens = new Array(n).fill(0);
    
    const isPromising = (rowIdx, colIdx) => {
        if (queens.slice(0, rowIdx).some((queenCol, queenRow) => 
            queenCol === colIdx || 
            rowIdx - queenRow === Math.abs(colIdx - queenCol)))
                return false;
        
        return true;
    }
    
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
    }
    
    placeQueen(0);
    
    return answer;
}
```