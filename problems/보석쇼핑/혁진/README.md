# 프로그래머스 보석 쇼핑

> 문제는 [여기](https://programmers.co.kr/learn/courses/30/lessons/67258)서 확인하세요.

* 가장 짧은 구간을 구한다.
* 같은 이름의 보석이 여러개가 존재함.
* left부터 시작함으로 시작 진열대 번호가 작은 구간부터 구할 수 있음.

```javascript
function solution(gems) {
    var answer = [0, gems.length];
    const gemsSize = new Set(gems).size; // 중복을 제거한 젬의 개수를 구함
    let gemMap = new Map(); // left <-> right 범위 내의 보석 정보를 저장하기 위함.
    let left = 0, right = 0;
    gemMap.set(gems[left], 1); // 첫번째 보석을 담는다.
    while(left < gems.length && right < gems.length) {

        // 모든 보석의 종류가 다 담겼는가?
        if(gemsSize ===  gemMap.size) {
            // answer[1] - answer[0] -> 지금까지 기록된 최소 범위
            // right - left -> 현재 최소 범위 
            // 둘을 비교해서 더 작은 것으로 answer을 갱신
            if (answer[1]-answer[0] > right-left) answer = [left, right];

            // left를 1 증가하기 위해 맨 왼쪽에 있던 보석을 한개 뺌
            gemMap.set(gems[left], gemMap.get(gems[left]) - 1);
            if(gemMap.get(gems[left]) == 0) gemMap.delete(gems[left]);
            left++;
        } else {
            // 보석을 더 담아야한다.
            right++;
            gemMap.set(gems[right], (gemMap.get(gems[right]) || 0) + 1);
        }
    }

    // 진열대 번호는 1부터 시작하므로 각각 1씩 증가
    answer[0]++; answer[1]++;
    return answer;
}
```