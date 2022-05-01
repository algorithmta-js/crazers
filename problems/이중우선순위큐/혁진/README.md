# 프로그래머스 이중우선순위큐

> 문제는 [여기](https://programmers.co.kr/learn/courses/30/lessons/42628?language=javascript)서 확인하세요.

좀 무식하게 구현했음...
더 잘 구현할 수 있을 것 같은데 ~ 머리가 안 굴러가네요.

## Solution

* 최대값과 최소값을 동시에 관리해야함.
* MaxHeap과 MinHeap 두가지를 관리함.
* 두 힙에서 삭제가 일어날 때 이를 동기화하기 위해 삭제된 요소를 관리하는 배열을 만듬.

```javascript
function solution(operations) {
    const maxH = new Heap(), minH = new Heap();
    const deletedMin = [], deletedMax = [];
    
    const isEmpty = (type) => {
        if (type === 'MAX') {
            return maxH.size() - deletedMin.length === 0
        } else {
            return minH.size() - deletedMax.length === 0;
        }
    }
    
    operations.forEach((operation) => {
        const [op, operand] = operation.split(' ');
        switch (op) {
            case 'I':
                maxH.insert(+operand);
                minH.insert(-1 * +operand);
                break;
            case 'D':
                if (operand > 0 && !isEmpty('MAX')) {
                    deletedMax.push(maxH.pop());
                } else if (operand < 0 && !isEmpty('MIN')){
                    deletedMin.push(minH.pop() * -1);
                }
                break;
        }
        
        while(true) {
            const isMinTopDeleted = 
                  deletedMax.findIndex((_) => _ === minH.peek() * - 1);
            const isMaxTopDeleted = 
                  deletedMin.findIndex((_) => _ * - 1 === maxH.peek());
            
            if (isMinTopDeleted < 0 && isMaxTopDeleted < 0) break;
            
            if (isMinTopDeleted >= 0) {
                minH.pop();
                deletedMax.splice(isMinTopDeleted, 1);
            }
            if (isMaxTopDeleted >= 0) {
                maxH.pop();
                deletedMin.splice(isMaxTopDeleted, 1);
            }
        }
        
    });
    
    return [isEmpty('MAX') ? 0 : maxH.peek(), isEmpty('MIN') ? 0 : minH.peek() * - 1];
}
```


#### size, length 부분을 좀 수정한 heap 코드를 사용함.

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
    let pos = this.size();
    while(pos >= 1) {
      const parent = this.getParent(pos);
      const parentIdx = Math.floor(pos / 2);
      if (!parent) return;

      if (parent < this.list[pos]) {
        this.swap(parentIdx, pos);
        pos = parentIdx;
      }
      else return;
    }
  }

  bubbleDown() {
    let pos = 1;
    while(pos <= this.size()) {
      const leftIdx = this.getLeftChildIdx(pos), rightIdx = this.getRightChildIdx(pos);

      let maxIndex = pos;
      if (leftIdx <= this.size() && this.list[leftIdx] > this.list[maxIndex]) maxIndex = leftIdx;
      if (rightIdx <= this.size() && this.list[rightIdx] > this.list[maxIndex]) maxIndex = rightIdx;

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
    if (this.size() === 0) return 0;
    if (this.size() === 1) return this.list.pop();

    const answer = this.list[1];
    
    this.list[1] = this.list.pop();
    this.bubbleDown();
    
    return answer;
  }

  size() {
    return this.list.length - 1;
  }

  empty() {
    return this.size() === 0;
  }
    
  peek() {
      return this.list[1];
  }
}

```