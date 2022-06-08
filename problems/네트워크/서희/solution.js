function solution(n, computers) {
  const visited = new Array(n).fill(false);
  let answer = 0;
  function dfs(index) {
    visited[index] = true;
    for (let j = 0; j < n; j += 1) {
      if (computers[index][j] && !visited[j]) dfs(j);
    }
  }
  computers.forEach((_, index) => {
    if (!visited[index]) {
      dfs(index);
      answer += 1;
    }
  });
  return answer;
}
