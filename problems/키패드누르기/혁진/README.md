# 프로그래머스 키패드 누르기

> 문제는 [여기](https://programmers.co.kr/learn/courses/30/lessons/67256)서 확인하세요.

*->10, 0->11, #->12 로 치환해서 구현했음.
키패드와 키패드의 거리는 `getDistance` 함수를 작성해서 구함.

예를들어 3에서 8까지의 거리는 수직으로 두번 수평으로 한번 이동해야하므로 총 3이다.

이는 두 숫자의 차를 3으로 나눈 몫과 나머지의 합으로 나타낼 수 있다.
키패드는 3칸씩 4줄로 이루어져있기 때문에 수직에 위치한 숫자들은 값이 3씩 차이나기 떄문이다.

## Solution

* 현재 왼손과 오른손의 위치를 기억한다.
* 다음 이동할 숫자로 이동할 최적의 손가락을 getDistance 함수로 찾는다.

```javascript
function getDistance(current, target) {
    const _ = Math.abs(target - current);
    const vertical = Math.floor(_ / 3);
    const horizontal = _ % 3;
    
    return vertical + horizontal;
}

function solution(numbers, hand) {
    hand = hand === 'left' ? 'L' : 'R';
    let answer = '';
    let pos = [10, 12];
    const onlyL = [1, 4, 7];
    const onlyR = [3, 6, 9];
    
    const moveHand = (handType, value) => {
        if (handType === 'L') pos[0] = value;
        else pos[1] = value;
        
        answer += handType;
    }
    
    numbers.forEach((_) => {
        const number = _ === 0 ? 11: _;
        const [left, right] = pos;
        
        if (onlyL.includes(number)) moveHand('L', number);
        
        else if (onlyR.includes(number)) moveHand('R', number);
        
        else {
            const l = getDistance(left, number);
            const r = getDistance(right, number);   
            
            if (l === r) moveHand(hand, number);
            else if (l < r) moveHand('L', number);
            else moveHand('R', number);
        }
    });
    
    return answer;
}
```