function solution(citations) {
    const sortedCitations = citations.sort((a, b) => b - a);
    const length = citations.length;
    
    const findClosestLastIndex = (target) => {
        for (let [idx, val] of sortedCitations.entries()) {
            if (sortedCitations[idx + 1] !== val) {
                if (val === target) return idx;
                if (val < target) return idx - 1;        
            }
        }
        return -1;
    }
    
    for (let i = sortedCitations[0]; i>= 0; i--) {
        const currentIndex = findClosestLastIndex(i);
        if (currentIndex + 1 >= i || (currentIndex < 0 && i <= length)) return i;
    }
    
}