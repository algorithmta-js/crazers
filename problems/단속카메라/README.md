# 프로그래머스 [디스크컨트롤러](https://programmers.co.kr/learn/courses/30/lessons/42884)

## solution

```js
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
```

1. routes를 차량의 진입 지점에 대해 오름차순으로 정렬한다.

2. 필요한 카메라의 개수를 1로 초기화하고, 현재 카메라의 위치를 routes의 첫번째 요소의 진출지점으로 초기화한다.

3. 인덱스를 1부터 routes의 끝까지 1씩 증가시키면서 반복문을 수행한다.

   1. 차량 진입 지점, 진출 지점을 해당 index의 routes에서 가져온다.

   2. 현재 카메라가 진입 지점보다 뒤에 있으면,
      필요한 카메라가 하나 증가해야 하고, 현재 카메라의 위치를 진출 지점으로 다시 세팅한다.

   3. 현재 카메라가 진출 지점보다 앞에 있으면,
      필요한 카메라는 증가하지 않아도 되고, 현재 카메라의 위치를 진출 지점으로만 다시 세팅한다.

   4. 그 외의 경우에는 현재 카메라의 위치 안에 속한 범위이다.

4. 반복문을 끝내고 필요한 카메라의 개수를 반환한다.
