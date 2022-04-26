function getTargetNum(arr, command) {
  const [startIdx, endIdx, targetIdx] = command;
  const slicedArray = arr.slice(startIdx - 1, endIdx);
  
  slicedArray.sort((a, b) => a - b);
  
  return slicedArray[targetIdx - 1];
}

function solution(array, commands) {
  const answer = [];
  
  commands.map(command => {
      const result = getTargetNum(array, command);
      answer.push(result);
  })
  
  return answer;
}