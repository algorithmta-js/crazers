function solution(array, commands) {
  let answer = [];
  for (const command of commands) {
    let commandArray = array.slice(command[0] - 1, command[1]);
    commandArray.sort((a, b) => a - b);
    answer.push(commandArray[command[2] - 1]);
  }
  return answer;
}
