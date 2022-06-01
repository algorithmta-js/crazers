function solution(answers) { 
    let answer = []; 
    
    let score = [ 0, 0, 0] 
    let supo1 = [1,2,3,4,5] 
    let supo2 = [2,1,2,3,2,4,2,5]
    let supo3 = [3,3,1,1,2,2,4,4,5,5]
    
  
    for (var i = 0; i < answers.length; i++){
        if (supo1[i] === answers[i]) score[0]++
        if (supo2[i] === answers[i]) score[1]++
        if (supo3[i] === answers[i]) score[2]++

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
    
    let max_score = Math.max(...score) 
    let fromIndex = score.indexOf(max_score); 
    while(fromIndex != -1) { 
        answer.push(fromIndex+1);
        fromIndex = score.indexOf(max_score, fromIndex+1); 
    }
    
    return answer;
}