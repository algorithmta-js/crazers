//문제의 수 모름, 정답 모름.. 얘가 맞는지 아닌지 확인하려면 문제 수만큼 각 수포자의 정답을 한번씩 돌아봐야..겠지..?
//1번 수포자는 1,2,3,4,5 순서
//2번 수포자는 2,1 2,3 2,4 2,5 순서
//3번 수포자는 3 2번, 1 2번, 2 2번, 4 2번, 5 2번 순서
//수포자들 정답이 나름 규칙을 가지고 있다면.. 규칙에 맞게 반복해서 정답과 비교해보면 되지 않을까?

function solution(answers) { //받아오라 문제 정답!
    let answer = []; //뱉어내라 누가 젤 많이 맞췄냐!
    
    let score = [ 0, 0, 0] //각 수포자의 점수를 가지고 있을 배열
    let supo1 = [1,2,3,4,5] //수포자 1번 정답 규칙 아래는 수포자2, 수포자3꺼
    let supo2 = [2,1,2,3,2,4,2,5]
    let supo3 = [3,3,1,1,2,2,4,4,5,5]
    
    
    //문제의 수만큼 즉, 정답 배열의 길이만큼 이거를 반복해라잉?
    for (var i = 0; i < answers.length; i++){
        if (supo1[i] === answers[i]) score[0]++
        if (supo2[i] === answers[i]) score[1]++
        if (supo3[i] === answers[i]) score[2]++
        // 여기까지 했는데 오류가 남.. 왜지? 왤까?
        // 문제 길이가 수포자들이 가지고 있는 정답규칙 배열 길이보다 길면 채점을 못해줬음..
        // 위에와 같은 상황일 때 다시 인덱스를 반복시켜주셈!!
        if (i > supo1.length-1) {
            if(supo1[i%supo1.length] === answers[i]) score[0]++
        }
        if (i > supo2.length-1) {
            if(supo2[i%supo2.length] === answers[i]) score[1]++
        }
        if (i > supo3.length-1) {
            if(supo3[i%supo3.length] === answers[i]) score[2]++
        }
    }
    
    let max_score = Math.max(...score) //전개연산자를 넣어라.. 이유가 뭘까..?
    // 특정 값이 있는 모든 위치(index)찾는 반복문!
    let fromIndex = score.indexOf(max_score);  //가장 높은 점수를 가진 첫번째 인덱스
    while(fromIndex != -1) { 
        answer.push(fromIndex+1);
        fromIndex = score.indexOf(max_score, fromIndex+1); //가장 높은 점수를 가진 값을 찾는데, 앞에서 나온 인덱스보다 뒤에서 찾아!
        // 이제 더 이상 가장 높은 점수를 가진 인덱스가 없어! 그럼 -1을 우엑!하고 반복문 마무리.
    }
    
    return answer;
}