# 프로그래머스 [여행경로](https://programmers.co.kr/learn/courses/30/lessons/43164)

## solution

```js
function solution(tickets) {
  const airportQueue = new Array();
  const visitedTickets = new Array(tickets.length).fill(false);
  tickets = [...tickets].sort();

  function DFS(start, count) {
    airportQueue.push(start);

    if (count === tickets.length) return true;

    for (let idx = 0; idx < tickets.length; idx += 1) {
      const [nextStart, nextEnd] = tickets[idx];

      if (!visitedTickets[idx] && nextStart === start) {
        visitedTickets[idx] = true;
        DFS(nextEnd, count + 1);
      }
    }
  }
  DFS("ICN", 0);
  return airportQueue;
}
```

- solution

1. airportQueue에 이동경로를 담아주고, visitedTickets으로 사용 티켓을 체크
2. DFS ( ICN, 0 )으로 시작
   1. 출발점과 티켓카운트를 재귀로 받도록 설정
   2. 시작점을 이동경로에 담아주기
   3. 만약 티켓을 다 사용하면 DFS 종료후 이동경로 반환해서 종료
   4. 그게 아니라면, 티켓 탐색 시작
      - 사용한 티켓이 아니고, 시작 지점이 같은경우 해당 티켓을 사용하고, 재귀로 DFS 호출
