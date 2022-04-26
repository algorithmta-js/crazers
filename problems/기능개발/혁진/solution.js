function solution(progresses, speeds) {
    var answer = [];
    
    const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
    let ahead = days[0];
    
    for (let top = 0, index = 0; top !== progresses.length;) {
        if (days[top] <= ahead) {
            top++;
            answer[index] = answer[index] + 1 || 1;
        } else {
            ahead = days[top];
            index++;
        }
    }

    return answer;
}