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
