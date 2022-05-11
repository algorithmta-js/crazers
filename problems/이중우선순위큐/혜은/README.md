# 프로그래머스 이중우선순위큐

**문제 )**
이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다.

명령어 수신 탑(높이)
I 숫자: 큐에 주어진 숫자를 삽입합니다.
D 1 : 큐에서 최댓값을 삭제합니다.
D -1 : 큐에서 최솟값을 삭제합니다.
이중 우선순위 큐가 할 연산 operations가 매개변수로 주어질 때, 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 solution 함수를 구현해주세요.

**해결과정)**
operations의 각 요소를 opr라 할 때.

1. opr[0]이 I일 때, 값 삽입
2. opr[0]이 D이고
   - opr[3]이 1일 때, 최댓값 삭제.
   - opr[3]이 -1일 때, 최솟값 삭제.

먼저, 최대힙과 최소힙을 구하는 클래스 생성했다.
각 메소드를 분리해서 만들었다. (thanks to 찐)

그리고 MaxHeap과 MinHeap을 함수내에서 상수의 형태로 호출했다.

```
const maxPriorityQueue = new MaxHeap();
const minPriorityQueue = new MinHeap();
const priorityQueue = [];
```

maxPriorityQueue 통해 최댓값을 삭제할 수 있고, minPriorityQueue 통해 최솟값을 삭제할 수 있으며, priorityQueue에 큐의 값을 담도록 했다.

```
if (opr[0] === "I") {
      //I일 때 값 삽입
      opr.slice(2);
      //I와 공백 제거
      const oprNum = Number(opr);
      // 문자형을 숫자형으로 변환
      priorityQueue.push(oprNum);
      maxPriorityQueue.insert(oprNum);
      minPriorityQueue.insert(oprNum);
      // 배열에 oprNum 넣어주기
    } else if (opr[0] === "D") {
        // D일 때 값 삭제
      opr.slice(2);
      //D와 공백 제거
      if (priorityQueue && opr === "1") {
        // opr === "1"일 때 최댓값 삭제
        maxPriorityQueue.insert(priorityQueue);
        // maxPriorityQueue에 priorityQueue 넣어주기
        maxPriorityQueue.pop();
        // 최댓값 삭제
        priorityQueue.push(maxPriorityQueue);
        // priorityQueue에 maxPriorityQueue 넣어주기
      } else if (priorityQueue && opr === "-1") {
        // opr === "-1"일 때 최솟값 삭제
        minPriorityQueue.insert(priorityQueue);
        // minPriorityQueue에 priorityQueue 넣어주기
        minPriorityQueue.pop();
        // 최솟값 삭제
        priorityQueue.push(minPriorityQueue);
        // priorityQueue에 minPriorityQueue 넣어주기
      } else return; //빈 큐에 데이터를 삭제하라는 연산이 주어질 경우, 해당 연산은 무시
    }
  });
  priorityQueue.sort((a, b) => b - a); // 오름차순 정렬
  answer.push(priorityQueue[0]); // 최댓값 push
  answer.push(priorityQueue[priorityQueue.length - 1]); // 최솟값 push
```
