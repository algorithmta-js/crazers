# 프로그래머스 디스크 컨트롤러

> 문제는 [여기](https://programmers.co.kr/learn/courses/30/lessons/42627?language=javascript)서 확인하세요.

운영체제를 배운 사람은 알겠지만 평균대기시간이 가장 짧은 알고리즘은 SJF이다.
`SJF = Shortest Job First`. 짧은 작업시간을 갖는 작업에게 높은 우선순위를 준다는 것.

그럼 문제를 해결할 때 다음의 사항을 고려하면된다.
1. 현재 시간 currentTime에 요청된 작업이 있다면 우선순위 큐에 푸시한다.
2. 우선순위 큐는 작업시간이 짧은 것이 높은 우선순위를 갖는다.
3. 현재 처리중인 작업이 없다면 큐에서 pop하여 작업을 할당한다.

## Solution

* `processing` 이라는 변수에 현재 처리중인 작업을 할당했다.
  * 이의 구조는 `startTime`, `requestTime`, `cost` 로 구성되어있다.
* heap에 push할 때 -1을 곱하는 이유는 maxHeap을 minHeap으로 바꾸기 귀찮아서이다.
* `처리중인 작업의 시작시간 + 소요시간 === 현재 시간` 이라면 작업이 끝났음을 의미한다.

```javascript
function createProcessingJob(job, startTime) {
    const [requestTime, cost] = job;
    return {
        startTime,
        requestTime,
        cost: cost * -1,
    }
}

function solution(jobs) {
    const heap = new Heap();
    jobs.sort((a,b) => a[0] - b[0]);
    
    let processing = null;
    let answer = 0, count = 0;
    
    for (let i = 0, time = 0; count !== jobs.length; time++) {
        while(i < jobs.length) {
            const [requestTime, cost] = jobs[i];
            if (requestTime > time) break;
            
            heap.insert([requestTime, cost * - 1]);
            i++;
        }
        
        if (processing && processing.startTime + processing.cost === time) {
            answer += time - processing.requestTime;
            count++;
            processing = null;
        }
        
        if (!processing && !heap.empty()) {
            processing = createProcessingJob(heap.myPop(), time);
        }
    }
    
    return Math.floor(answer / jobs.length);
}
```


#### 힙은 다음과 같은 코드 사용함.
```javascript
class Heap {
  constructor() {
    this.list = [null];
  }

  swap(a,b){
    [this.list[a], this.list[b]] = [this.list[b], this.list[a]];
  }

  getParent(current) {
    return this.list[Math.floor(current / 2)];
  }

  getLeftChildIdx(current) {
    return current * 2;
  }

  getRightChildIdx(current) {
    return current * 2 + 1;
  }

  bubbleUp() {
    let pos = this.size() - 1;
    while(pos >= 1) {
      const parent = this.getParent(pos);
      const parentIdx = Math.floor(pos / 2);
      if (!parent) return;

      if (parent[1] < this.list[pos][1]) {
        this.swap(parentIdx, pos);
        pos = parentIdx;
      }
      else return;
    }
  }

  bubbleDown() {
    let pos = 1;
    while(pos < this.size()) {
      const leftIdx = this.getLeftChildIdx(pos), rightIdx = this.getRightChildIdx(pos);

      let maxIndex = pos;
      if (leftIdx < this.size() && this.list[leftIdx][1] > this.list[maxIndex][1]) maxIndex = leftIdx;
      if (rightIdx < this.size() && this.list[rightIdx][1] > this.list[maxIndex][1]) maxIndex = rightIdx;

      if (maxIndex !== pos) {
        this.swap(maxIndex, pos);
        pos = maxIndex;
      } else return;
    }
  }

  insert(element) {
    this.list.push(element);
    this.bubbleUp();
  }

  myPop() {
    if (this.size() === 2) return this.list.pop();

    const answer = this.list[1];
    
    this.list[1] = this.list.pop();
    this.bubbleDown();
    
    return answer;
  }

  size() {
    return this.list.length;
  }

  empty() {
    return this.size() === 1;
  }
    
  peek() {
      return this.list[1];
  }
}
```