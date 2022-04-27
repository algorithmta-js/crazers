const Queue = require('./queue');

function solution(priorities, location) {
  let answer = 0;
  
  const workStationQueue = new Queue();
  priorities.map((p, i) => {
    workStationQueue.enqueue([p, i]);
    console.log(workStationQueue.peek(i))
  });
  const _length = priorities.length;

  while (answer <= _length) {
      const pivotDoc = workStationQueue.dequeue();
      
      let i;
      for (i = 0; i < workStationQueue.length; i++) {
          if (pivotDoc[0] < workStationQueue.data[i][0]) {
              workStationQueue.enqueue(pivotDoc);
              break;
          }
      }
      
      if (i === workStationQueue.length) {
          answer++;
          
          if (pivotDoc[1] === location) {
              return answer;
          }
      }
  }
}