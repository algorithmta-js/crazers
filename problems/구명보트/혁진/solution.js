const peopleMap = new Map();

function decount(weight) {
    if (peopleMap.get(weight) === 1) {
        peopleMap.delete(weight);
    } else peopleMap.set(weight, peopleMap.get(weight) - 1);
}

function solution(people, limit) {
    let answer = 0;
    
    [...people].sort((a,b) => b - a)
          .forEach((p) => peopleMap.set(p, peopleMap.get(p) + 1 || 1));
    
    while(peopleMap.size) {
        let current = 0, people = 0;
        
        while(people < 2) {
            const weight = [...peopleMap.keys()].find((k) => (k + current) <= limit);
            if (!weight) break;
            
            
            current += weight;
            people++;
            decount(weight);
        }
        answer++;
        
    }
    
    return answer;
}