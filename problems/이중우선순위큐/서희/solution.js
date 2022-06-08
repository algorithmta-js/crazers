function solution(operations) {
  const answerQueue = [];

  operations.forEach((operation) => {
    const [command, data] = operation.split(" ");

    if (command === "I") {
      answerQueue.push(+data);
    } else if (data === "1") {
      const max = Math.max(...answerQueue);
      answerQueue.splice(answerQueue.indexOf(max), 1);
    } else if (data === "-1") {
      const min = Math.min(...answerQueue);
      answerQueue.splice(answerQueue.indexOf(min), 1);
    }
  });
  return answerQueue.length
    ? [Math.max(...answerQueue), Math.min(...answerQueue)]
    : [0, 0];
}
