function solution(tickets) {
  let answer = [];
  // 객체 만들긴
  const newTickets = newObject(tickets);
  console.log(newTickets);
  // DFS를 사용해 방문 경로 찾기
  DFS(newTickets, "ICN");
  // 만약 DFS가 두개 이상이면 알파벳 순으로 정렬하기
  console.log(DFS(newObject(tickets), "ICN"));
  return answer;
}

const newObject = (tickets) => {
  // index[0]를 키 값, index[1]을 value 값으로 갖는 객체 만들기
  const newTickets = {};
  tickets.map((ticket) => {
    if (newTickets[ticket[0]])
      return (newTickets[ticket[0]] = [...newTickets[ticket[0]], ticket[1]]);
    else return (newTickets[ticket[0]] = [ticket[1]]);
  });
  return newTickets;
};

const DFS = (newTickets, startNode) => {
  const visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) {
    // 탐색해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
    if (!visited.includes(node)) {
      // 해당 노드가 탐색된 적 없다면
      visited.push(node);
      if (newTickets[node]) needVisit = [...newTickets[node], ...needVisit];
    }
  }
  return visited;
};
