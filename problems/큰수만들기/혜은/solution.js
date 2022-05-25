class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }
  push(item) {
    this.arr[this.index++] = item;
  }
  pop() {
    if (this.index <= 0) return null;
    else {
      const result = this.arr[--this.index];
      return result;
    }
  }
}

function solution(number, k) {
  let answer = "";
  let stack = "";
  let n = number;

  while (n !== 0) {
    stack += n[0];
    n.substring(1);

    for (let i = 0; i < number.length - k; ) {
      if (stack[i] >= n[0]) {
        stack.push(n[0]);
        n = n.slice(1);
        i++;
      } else {
        stack.pop();
        stack.push(n[0]);
      }
    }
  }

  return answer;
}
