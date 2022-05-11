function solution(n, lost, reserve) {
  let answer = 0;
  let hasClothesArr = [];

  for (let student = 0; student < n; student++) hasClothesArr.push(1);
  reserve.map((r) => (hasClothesArr[r - 1] += 1));
  lost.map((l) => (hasClothesArr[l - 1] -= 1));

  hasClothesArr.map((hasCloth, idx) => {
    if (hasCloth === 2) {
      if (hasClothesArr[idx + 1] && hasClothesArr[idx + 1] === 0) {
        hasClothesArr[idx + 1] += 1;
        hasClothesArr[idx] -= 1;
      } else if (hasClothesArr[idx - 1] === 0) {
        hasClothesArr[idx - 1] += 1;
        hasClothesArr[idx] -= 1;
      } else return;
    } else return;
  });

  let noClothStudentNum = hasClothesArr.filter((cloth) => 0 === cloth).length;
  answer = hasClothesArr.length - noClothStudentNum;

  return answer;
}
