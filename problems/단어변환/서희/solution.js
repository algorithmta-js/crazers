function solution(begin, target, words) {
  // 타켓이 없는 경우
  if (!words.includes(target)) return 0;

  const visited = new Array(words.length).fill(false);
  const wordQueue = [];
  // 초기 셋팅 노드별로 경우의 수 저장하기 위해 배열로 큐에 넣기
  wordQueue.push([begin, 0]);

  while (wordQueue.length) {
    const [current, answer] = wordQueue.shift();
    if (current === target) return answer;

    words.forEach((word, index) => {
      let dif = 0;

      // 방문한 노드는 continue;
      if (visited[index]) return;

      for (let wordIndex = 0; wordIndex < word.length; wordIndex += 1) {
        if (word[wordIndex] !== current[wordIndex]) dif += 1;
      }
      if (dif === 1) {
        wordQueue.push([word, answer + 1]);
        visited[index] = true;
      }
    });
  }
}
