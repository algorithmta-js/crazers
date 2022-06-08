
# 프로그래머스 [신고결과받기](https://programmers.co.kr/learn/courses/30/lessons/92334)

## solution

```js
function solution(id_list, report, k) {
    const resultCount = new Array(id_list.length).fill(0);
    const reportCount = new Array(id_list.length).fill(0);
    
    report = [...new Set(report)].map((sentence) => sentence.split(' '));
    
    report.forEach(([_, reporter])=> {
        reportCount[id_list.indexOf(reporter)] += 1;
    })
    
    report.forEach(([user,reporter])=>{
        if(reportCount[id_list.indexOf(reporter)] >= k ){
            resultCount[id_list.indexOf(user)] += 1;
        }
    })
    return resultCount;
    
}
```

1. 결과 횟수, 신고 횟수 담을 배열 초기화
2. report의 중복제거 후 이용자 / 신고자 나눠주기 진행
3. 신고자 별 신고 당한 횟수를 반복문을 통해 저장한다.
4. k와 신고자별 신고당한 횟수를 비교하여 결과 횟수를 갱신해나간다.
5. 최종적으로 resultCount반환한후 종료.
