function solution(array, commands) {
  let answer = [];
  commands.forEach(([i, j, k]) => {
      const kNum = array.slice(i - 1, j)
            .sort((a, b) => a - b)[k - 1];            
      answer.push(kNum);
  })
  return answer;
}