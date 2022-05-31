function solution(tickets) {
  const airportQueue = new Array();
  const visitedTickets = new Array(tickets.length).fill(false);
  tickets = [...tickets].sort();

  function DFS(start, count) {
    airportQueue.push(start);

    if (count === tickets.length) return airportQueue;

    for (let idx = 0; idx < tickets.length; idx += 1) {
      const [nextStart, nextEnd] = tickets[idx];

      if (!visitedTickets[idx] && nextStart === start) {
        visitedTickets[idx] = true;
        DFS(nextEnd, count + 1);
      }
    }
  }
  DFS("ICN", 0);
  return airportQueue;
}
