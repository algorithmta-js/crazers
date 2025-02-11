class MaxHeap {
  // 최대힙
  constructor() {
    this.list = [null];
  }

  swap(a, b) {
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
    while (pos >= 1) {
      const parent = this.getParent(pos);
      const parentIdx = Math.floor(pos / 2);
      if (!parent) return;

      if (parent < this.list[pos]) {
        this.swap(parentIdx, pos);
        pos = parentIdx;
      } else return;
    }
  }

  bubbleDown() {
    let pos = 1;
    while (pos < this.size()) {
      const leftIdx = this.getLeftChildIdx(pos),
        rightIdx = this.getRightChildIdx(pos);

      let maxIndex = pos;
      if (leftIdx < this.size() && this.list[leftIdx] > this.list[maxIndex])
        maxIndex = leftIdx;
      if (rightIdx < this.size() && this.list[rightIdx] > this.list[maxIndex])
        maxIndex = rightIdx;

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

  pop() {
    if (this.size() === 2) return this.list.pop();

    const answer = this.list[1];

    this.list[1] = this.list.pop();
    this.bubbleDown();

    return answer; // 최댓값
  }

  size() {
    return this.list.length;
  }

  empty() {
    return this.size() === 1;
  }
}

class MinHeap {
  // 최소힙
  constructor() {
    this.list = [null];
  }

  swap(a, b) {
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
    let pos = this.size() - 1; // 새로 추가한 값의 index
    while (pos >= 1) {
      const parent = this.getParent(pos);
      const parentIdx = Math.floor(pos / 2);
      if (!parent) return;

      if (parent > this.list[pos]) {
        this.swap(parentIdx, pos);
        pos = parentIdx;
      } else return;
    }
  }

  bubbleDown() {
    let pos = 1;
    while (pos < this.size()) {
      const leftIdx = this.getLeftChildIdx(pos),
        rightIdx = this.getRightChildIdx(pos);

      let maxIndex = pos;
      if (leftIdx < this.size() && this.list[leftIdx] < this.list[maxIndex])
        maxIndex = leftIdx;
      if (rightIdx < this.size() && this.list[rightIdx] < this.list[maxIndex])
        maxIndex = rightIdx;

      if (maxIndex !== pos) {
        this.swap(maxIndex, pos);
        pos = maxIndex;
      } else return;
    }
  }

  insert(element) {
    this.list.push(element);
    this.bubbleUp;
  }

  pop() {
    if (this.size() === 2) return this.list.pop();

    const answer = this.list[1];

    this.list[1] = this.list.pop();
    this.bubbleDown();

    return answer; // 최솟값
  }

  size() {
    return this.list.length;
  }

  empty() {
    return this.size() === 1;
  }
}

function solution(operations) {
  var answer = [];
  // maxHeap 사용하기
  const maxPriorityQueue = new MaxHeap();
  const minPriorityQueue = new MinHeap();
  const priorityQueue = [];

  operations.forEach((opr) => {
    // 공백 기준으로 문자와 숫자 분리
    const [op, operand] = opr.split(" ");
    if (op === "I") {
      //값 삽입
      priorityQueue.push(operand);
      maxPriorityQueue.insert(operand);
      minPriorityQueue.insert(operand);
    } else if (op === "D") {
      if (priorityQueue && operand === "1") {
        // 최댓값 삭제
        maxPriorityQueue.insert(priorityQueue);
        maxPriorityQueue.pop();
        priorityQueue.push(maxPriorityQueue);
      } else if (priorityQueue && operand === "-1") {
        // 최솟값 삭제
        minPriorityQueue.insert(priorityQueue);
        minPriorityQueue.pop();
        priorityQueue.push(minPriorityQueue);
      } else return;
    }
  });
  priorityQueue.sort((a, b) => b - a);
  answer.push(priorityQueue[0]); // 최댓값 push
  answer.push(priorityQueue[priorityQueue.length - 1]); // 최솟값 push

  return answer;
}
