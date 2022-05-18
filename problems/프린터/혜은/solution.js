function solution(priorities, location) {
  let answer = 0;
  let sortedPrintList = [];
  const printRequestOrder = 0;

  // 정렬을 ???? 어떻게????
  // 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
  // 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
  // 3. 그렇지 않으면 J를 인쇄합니다.
  const queueSort = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      for (let j = 1; j < i; j++) {
        if (arr[0][0] >= arr[j][0]) {
          sortedPrintList.push(arr[0]);
        } else {
          arr.push(arr[0]);
        }
        arr.shift();
      }
    }
  };
  // sortedPrintList의 요소 중 두번째 인덱스에 location이 있는 요소의 위치 찾기
  const isRequestDocument = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][1] !== location) return;
      printRequestOrder = arr.indexOf(arr[i][1]) + 1;
    }
  };

  // 1. [중요도, 인덱스 넘버]의 요소로 이뤄진 새 배열 생성
  const printList = [...priorities.entries()];
  // 2.중요도를 기준으로 정렬
  queueSort(printList);
  // 3. 내가 요청한 location의 위치 찾기
  isRequestDocument(sortedPrintList);
  answer = printRequestOrder;
  return answer;
}
