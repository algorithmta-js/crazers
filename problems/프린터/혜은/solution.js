function solution(priorities, location) {
  let answer = 0;
  let printList = [];
  for (let i = 1; i < priorities.length; i++) {
    for (let j = 1; j < priorities.length; j++) {
      if (priorities[0] >= priorities[j]) {
        printList.push(priorities[0]);
      }
      priorities.push(priorities[0]);
      priorities.shift();
    }
  }

  console.log(printList);

  return answer;
}
