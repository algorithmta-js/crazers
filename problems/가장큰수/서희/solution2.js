function quickSort(arr) {
  if (arr.length <= 1) return arr;
  //바꾼 값을 내부에 정의한 퀵소트에 매개변수로 넘긴다
  const pivot = arr[0];
  const less = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] + pivot >= pivot + arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
function solution(numbers) {
  numbers = numbers.map((number) => (number += ""));
  numbers = quickSort(numbers);
  // "00000" 예외처리
  return numbers[0] === "0" ? "0" : numbers.join("");
}
