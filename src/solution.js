// 정렬 > K번째 수
function solution(array, commands) {
  var answer = [];

  if (arrCheck(array) && comCheck(commands)) {
    let commandsIndex = 0;
    while (commandsIndex < commands.length) {
      for (i of commands) {
        const newArr = array.slice(i[0], i[1]);
        mergeSort(newArr);
        answer.push(newArr[i[2]]);
        console.log(mergeSort(newArr));
        commandsIndex++;
      }
    }

    return answer;
  }
}

// 배열을 반으로 나누어, 왼쪽과 오른쪽 배열을 나누는 함수
function mergeSort(array) {
  // ending condition: length === 1 인 배열이 들어올 때, 정렬이 끝난 것.
  if (array.length < 2) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

// 정렬된 왼쪽과 오른쪽 배열을 받아, 각 원소의 크기를 비교해 하나로 합치는 함수
function merge(left, right) {
  const resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resultArray.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// array 조건 충족 함수
function arrCheck(array) {
  if (array.length >= 1 && array.length <= 100) {
    for (el of array) {
      if (el >= 1 && el <= 100) return true;
    }
  }
}

// commands 조건 충족 함수
function comCheck(commands) {
  if (commands.length >= 1 && commands.length <= 50) {
    for (el of commands) {
      if (el.length === 3) return true;
    }
  }
}
