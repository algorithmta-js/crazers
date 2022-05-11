function solution(n, lost, reserve) {
  let answer = 0;
  let hasClothArr = [];

  // 모두에게 체육복 한 벌씩 주기
  for (let student = 0; student < n; student++) hasClothArr.push(1);
  // 여벌 체육복이 있는 학생들
  reserve.map((r) => (hasClothArr[r - 1] = hasClothArr[r - 1] + 1));
  // 체육복 도둑맞은 학생들
  lost.map((l) => (hasClothArr[l - 1] = hasClothArr[l - 1] - 1));

  // 체육복 빌려주기

  console.log(hasClothArr);

  return answer;
}
