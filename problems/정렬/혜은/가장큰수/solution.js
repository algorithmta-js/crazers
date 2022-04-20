function solution(numbers) {
  let answer = "";

  if (numbersCheck(numbers)) {
    const permutationNumbers = getPermutations(numbers, numbers.length); // 순열로 배열 요소의 순서 섞기
    const pastedNumArr = permutationNumbers.map((num) => num.join("")); // 배열 요소 이어붙이기
    const sortedArr = quickSort(pastedNumArr); // 퀵소트로 배열의 요소 정렬하기
    const largestNum = sortedArr[sortedArr.length - 1]; // 가장 큰 수
    answer = largestNum.toString(); // 문자열로 바꾸어 값 넣기
  }
  return answer;
}

function getPermutations(arr, selectNum) {
  const results = [];

  if (selectNum === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    // 해당하는 fixed를 제외한 나머지 배열
    const permutations = getPermutations(rest, selectNum - 1);
    // 나머지에 대해 순열 구하기
    const attached = permutations.map((el) => [fixed, ...el]);
    // 돌아온 순열에 떼놓은(fixed) 값 붙이기
    results.push(...attached);
    // 배열 spread syntax로 모두 다 push
  });
  return results;
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = getPivot(arr);
  const less = [];
  const greater = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  const sortedLessArr = quickSort(less);
  const sortedGreaterArr = quickSort(greater);

  return [...sortedLessArr, pivot, ...sortedGreaterArr];
}

function numbersCheck(arr) {
  // 제한사항
  if (arr.length >= 1 && arr.length <= 100000) {
    for (el of arr) {
      if (el >= 0 && el <= 1000) return true;
      else return false;
    }
  }
}

function getPivot(arr) {
  if (arr.length >= 3) {
    const randomArray = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      randomArray.push(arr[randomIndex]);
      randomArray.sort(); // 크기순 정렬
    }
    return randomArray[1];
  } else {
    return arr[0];
  }
}
