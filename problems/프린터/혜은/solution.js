function solution(priorities, location) {
  let answer = 0;
  let findNum = priorities[location]; // 구조분해 할당으로 찾고싶은 수 변수에 담기

  const sortedPriorities = priorities.sort((a, b) => b - a); // 정렬
  console.log(sortedPriorities);
  console.log(sortedPriorities.indexOf(findNum) + 1);

  return answer;
}
