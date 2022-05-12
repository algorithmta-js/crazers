function solution(routes) {
  routes.sort(([routeA], [routeB]) => routeA - routeB);
  let [totalCarmera, carmera] = [1, routes[0][1]];

  for (let index = 1; index < routes.length; index += 1) {
    const [start, end] = routes[index];

    if (carmera < start) {
      totalCarmera += 1;
      carmera = end;
    }
    if (carmera > end) {
      carmera = end;
    }
  }
  return totalCarmera;
}
