function solution(gems) {
    var answer = [0, gems.length];
    const gemsSize = new Set(gems).size
    let gemMap = new Map();
    let left = 0, right = 0;
    gemMap.set(gems[left], 1);
    while(left < gems.length && right < gems.length) {
        if(gemsSize ===  gemMap.size) {
            if (answer[1]-answer[0] > right-left) answer = [left, right];
            gemMap.set(gems[left], gemMap.get(gems[left]) - 1);
            if(gemMap.get(gems[left]) == 0) gemMap.delete(gems[left]);
            left++;
        } else {
            right++;
            gemMap.set(gems[right], (gemMap.get(gems[right]) || 0) + 1);
        }
    }
    answer[0]++; answer[1]++;
    return answer;
}