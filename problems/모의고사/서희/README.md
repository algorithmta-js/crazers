# 프로그래머스 [모의고사](https://programmers.co.kr/learn/courses/30/lessons/42840)

## solution

```js
function solution(answers) {
  const persons = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const answerCounts = new Array(3).fill(0);
  answers.forEach((answer, answerIndex) => {
    persons.forEach((person, personIndex) => {
      if (person[answerIndex % person.length] === answer)
        answerCounts[personIndex]++;
    });
  });

  return answerCounts
    .map((answer, index) => {
      if (Math.max(...answerCounts) === answer) return index + 1;
    })
    .filter((data) => data);
}
```

1. 3명의 학생 각각에 대해 찍는 방식을 이차원 배열로 초기화한다.
2. 정답 맞춘 횟수를 저장하기 위한 answerCounts을 0으로 모두 초기화한다.
3. 문제에 대한 반복 안에서 찍는 방식을 체크하여 각각의 학생이 해당 문제를 맞췄는지 검사하여 정답 횟수를
   계산한다.
4. 가장 많은 문제를 맞힌 사람을 순서대로 배열에 담고, 조건에 맞지 않는 인덱스에는 undefined가 담기므로 이를 filter로 걸러주고 결과를 반환한다.
