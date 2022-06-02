function solution(tickets) {
  let airportQueue = new Array();

  function DFS(start, currentQueue, currentTickets) {
    if (currentTickets.length === 0 && airportQueue.length === 0) {
      airportQueue = [...currentQueue, start];
      return true;
    }

    for (let idx = 0; idx < currentTickets.length; idx += 1) {
      const [nextStart, nextEnd] = currentTickets[idx];

      if (nextStart === start) {
        const copyCurrent = [...currentQueue, nextStart];
        const copyTickets = [...currentTickets];
        copyTickets.splice(idx, 1);
        DFS(nextEnd, copyCurrent, copyTickets);
      }
    }
  }

  DFS("ICN", [], [...tickets].sort());
  return airportQueue;
}
