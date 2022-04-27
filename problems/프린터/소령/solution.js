function solution(priorities, location) {
  let answer = 0;
  
  const workStation = priorities.map((p, i) => ([p, i]));
  const _length = priorities.length;
  while (answer <= _length) {
    const pivotDoc = workStation.shift();
    
    let i;
    for (i = 0; i < workStation.length; i++) {
      if (pivotDoc[0] < workStation[i][0]) {
        workStation.push(pivotDoc);
        break;
      }
    }
    
    if (i === workStation.length) {
      answer++;
      
      if (pivotDoc[1] === location) {
        return answer;
      }
    }
  }
}