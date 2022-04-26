function solution(priorities, location) {
  let answer = 0;

  // let printList = [];
  // for (let i = 1; i < priorities.length; i++) {
  //   for (let j = 1; j < priorities.length; j++) {
  //     if (priorities[0] >= priorities[j]) {
  //       printList.push(priorities[0]);
  //     } else {
  //       priorities.push(priorities[0]);
  //     }
  //     priorities.shift();
  //   }
  // }

  let findNum = priorities[location]; // 구조분해 할당으로 찾고싶은 수 변수에 담기

  const sortedPriorities = priorities.sort((a, b) => b - a); // 정렬
  console.log(sortedPriorities);
  console.log(sortedPriorities.indexOf(findNum) + 1);

  return answer;
}
