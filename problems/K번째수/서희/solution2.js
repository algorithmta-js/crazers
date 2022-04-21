function quickSort(arr) {
  if (arr.length <= 1) return arr;
  //바꾼 값을 내부에 정의한 퀵소트에 매개변수로 넘긴다
  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
function solution(array, commands) {
  const answer = [];

  for (const command of commands) {
    const commandArray = quickSort(array.slice(command[0] - 1, command[1]));
    answer.push(commandArray[command[2] - 1]);
  }

  return answer;
}
