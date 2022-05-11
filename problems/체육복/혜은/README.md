# 프로그래머스 체육복

**문제 )**
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당해 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

**해결과정)**

```
function solution(n, lost, reserve) {
  let answer = 0;
  // 학생들의 체육복 개수 배열
  let hasClothesArr = [];

  // 모두에게 체육복 한 벌씩 주기
  for (let student = 0; student < n; student++) hasClothesArr.push(1);
  // 여벌 체육복이 있는 학생들
  reserve.map((r) => (hasClothesArr[r - 1] += 1));
  // 체육복 도둑맞은 학생들
  lost.map((l) => (hasClothesArr[l - 1] -= 1));

  // 체육복 빌려주는 함수
  function lendingCloth(lendStudent, borrowStudent) {
    hasClothesArr[borrowStudent] += 1;
    hasClothesArr[lendStudent] -= 1;
  }

  hasClothesArr.map((hasCloth, idx) => {
    if (hasCloth === 2) { // 옷이 두 개인 학생들에 한해 검사
      if (hasClothesArr[idx - 1] === 0) {
        // 바로 뒷 번호의 학생의 옷이 없을 때
        lendingCloth(idx, idx - 1);
      } else if (hasClothesArr[idx + 1] === 0) {
        // 바로 앞 번호의 학생의 옷이 없을 때
        lendingCloth(idx, idx + 1);
      } else return;
    } else return;
  });
  // 끝내 체육복 하나도 없는 학생 명수
  let noClothStudentNum = hasClothesArr.filter((cloth) => 0 === cloth).length;
  answer = hasClothesArr.length - noClothStudentNum;

  return answer;
}

```

근데 이걸 그리디를 어떻게 적용한다는 걸까요
그리고 모든 테스트 케이스를 통과하지 못하는 이유는?
if (hasClothesArr[idx + 1] && hasClothesArr[idx + 1] === 0) 이렇게
hasClothesArr[idx + 1]가 존재할 때만 이렇게 해주면 왜 안되나?
