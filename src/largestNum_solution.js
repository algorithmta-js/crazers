function solution(numbers) {
  var answer = "";

  const permutationNumbers = getPermutations(numbers, numbers.length);
  const arr = permutationNumbers.map((pastedNum) => pastedNum.join(""));
  console.log(arr);

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
