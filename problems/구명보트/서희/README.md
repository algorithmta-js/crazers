# 프로그래머스 [구명보트](https://programmers.co.kr/learn/courses/30/lessons/42885)

## solution

```js
function solution(people,limit){
    let [ answer, currentWeight, start, end ] = [0, 0, 0, people.length - 1 ];
    people.sort((a,b)=> b-a);
    
    while(start < end){
        if(currentWeight + people[start] <= limit ){
            currentWeight += people[start];
            start+=1;
        }
        
        if(currentWeight + people[end] <= limit){
            currentWeight += people[end];
            end -= 1;
        } else {
            currentWeight = 0;
            answer +=1
        }  
    }
    answer += currentWeight != 0 ? 1 : 0
    return start === end ? answer + 1 : answer ;
}
```

1. 구조 분해 할당을 통해 결과, 현재 보트의 무게, 시작과 끝을 가리키는 포인터 변수를 초기화 한다.
2. 내림차순으로 people을 정렬한다.
3. 투포인터가 만나기전까지 반복문을 수행한다.
   1. 현재 보트 무게 + 시작 포인터 사람 무게가 제한보다 작거나 같으면 보트에 태우고, 시작 포인터와 현재 보트 무게 증가 시킨다.
   2. 현재 보트 무게 + 끝 포인터 사람 무게가 제한보다 작거나 같으면 보트에 태우고, 끝 포인터는 내리고, 현재 보트 무게를 증가시킨다.
   3. 2가 아니라면 현재 보트 무게 0으로 초기화 및 결과 +1로 보트 수를 갱신한다.
4. 현재 보트 무게가 0이 아니라면 사람이 타고 있으므로 결과 +1 를 진행한다.
5. 시작과 끝 포인터가 동일지점이라면 answer+1 한 값을, 그게 아니라면 answer값을 반환하고 종료한다.
