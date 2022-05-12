# 프로그래머스 체육복

> 문제는 [여기](https://programmers.co.kr/learn/courses/30/lessons/42862)서 확인하세요.

문제를 잘 읽어야함.
`여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.`

lost와 reserve 에 둘다 해당하는 사람은 남한테 빌려줄게 아니라 본인부터 입어야함.

이 전처리를 하지 않으면 예외 케이스에서 걸림.

## Solution

* lost 배열에서 reserve에도 속해있는 요소는 삭제하고 reserve에서도 지움.
* 그럼 실제로 잃어버린 사람과 실제로 여벌이 있는 사람만 남음.
* 방향 배열 [-1, 0, 1] 을 만들어 왼쪽부터 빌려줄 수 있다면 빌려주며 해결.
* 여벌체육복을 1벌만 가질 수 있기에 Set을 통해 쉽게 구현했다.

```javascript
function solution(n, lost, reserve) {
    let target = [-1, 0 , 1];
    let answer = 0;
    let rSet = new Set(reserve);
    const realLost = lost.filter((l) => {
        if (rSet.has(l)) {
            rSet.delete(l);
            return false;
        }
        
        return true;
    })
    
    realLost.sort((a, b) => a - b);
    realLost.forEach((l) => {
        let flag = false;
        target.forEach((t) => {
            if (!flag && rSet.has(l + t)) {
                rSet.delete(l + t);
                answer++;
                flag = true;
            }
        })
    })
    
    return n - realLost.length + answer;
}
```