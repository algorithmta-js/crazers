class Queue {
  constructor() {
    this._workStation = [];
    this._length = 0;
  }

  dequeue() {
    this._length--;
    return this._workStation.shift();
  }

  enqueue(work) {
    this._workStation.push(work);
    this._length++;
  }

  peek(i) {
    return this._workStation[i];
  }

  get length() {
    return this._length;
  }

  get isEmpty() {
    return this._length === 0;
  }

  get data() {
    return this._workStation;
  }
}

module.exports = Queue;