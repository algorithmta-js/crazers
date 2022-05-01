function solution(priorities, location) {
    let answer = 0;
    const queue = [...priorities.entries()];
    while(queue.length) {
        const current = queue.shift();
        if (queue.some(([,priority]) => priority > current[1])) {
            queue.push(current);
            continue;
        }
        answer++;
        if (current[0] === location) return answer;
    }
    
    
    return answer;
}