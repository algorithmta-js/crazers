# 프로그래머스 [단어변환](https://programmers.co.kr/learn/courses/30/lessons/43163)

## solution

```js
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
```

- solution

1. words 안에 없기 때문에 변환할 수 없을 경우 처음에 0을 반환

2. wordQueue[[현재 노드, 현재 변환 횟수]...]로 담아주어서 경로 변경시에도 이전의 answer값을 사용할 수 있도록 지정
3. 방문하지 않은 노드와 현재 노드의 단어 차이를 계산하여 1이면 이를 wordQueue에 넣어주고, 방문으로 표시
4. wordQueue의 맨 앞 배열요소를 차례대로 shift하면서 해당 노드가 target이 될 때까지 반복문을 실행
