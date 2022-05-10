# 프로그래머스 구명보트

> 문제는 [여기](https://programmers.co.kr/learn/courses/30/lessons/42885)서 확인하세요.

핵심은 최대 두명만 탈 수 있다는 것과 무조건 다 태워야한다는 것.

일반적으로 생각해봤을 때 가장 효율적으로 옮길 수 있는 방법은 무게에 맞게 꽉꽉 채워서 타는 것이다.
가장 적은 보트를 사용하기 위해 무게가 큰 순서대로 정렬한다.

몸무게가 같은 사람이 있을 수도 있으니 몸무게를 key로 갖고 해당 몸무게인 사람의 수를 value로갖는 Map을 구성했다.


## Solution

* 가장 효율적인 두명을 태울 수 있도록 무거운 사람부터 선형탐색하면서 태운다.
* 그리고 태운 사람을 Map에서 value 감소 혹은 key 제거한다.

```javascript
const peopleMap = new Map();

function decount(weight) {
    if (peopleMap.get(weight) === 1) {
        peopleMap.delete(weight);
    } else peopleMap.set(weight, peopleMap.get(weight) - 1);
}

function solution(people, limit) {
    let answer = 0;
    
    [...people].sort((a,b) => b - a)
          .forEach((p) => peopleMap.set(p, peopleMap.get(p) + 1 || 1));
    
    while(peopleMap.size) {
        let current = 0, people = 0;

        while(people < 2) {
            const weight = [...peopleMap.keys()].find((k) => (k + current) <= limit);
            if (!weight) break;
            
            
            current += weight;
            people++;
            decount(weight);
        }
        answer++;
        
    }
    
    return answer;
}
```