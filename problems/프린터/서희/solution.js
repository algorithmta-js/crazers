function solution(priorities, location) {
  // 현재 위치와 프린터 완료후 위치 배열 생성
  const currentLocation = new Array(priorities.length).fill(false);
  const successLocation = new Array();
  // location만 true로 설정해서 구분
  currentLocation[location] = true;
  // 중요도 배열에 원소가 없을때까지
  while (priorities.length != 0) {
    // 최대 중요도 값으로 조건문
    const max = Math.max(...priorities);
    // 2의 작업 수행
    if (priorities[0] < max) {
      priorities.push(priorities[0]);
      currentLocation.push(currentLocation[0]);
      currentLocation.shift();
    } else {
      // 3의 작업 수행
      successLocation.push(currentLocation.shift());
    }
    priorities.shift();
  }
  // 인덱스 + 1로 순서 최종 반환
  return successLocation.indexOf(true) + 1;
}
