function getDistance(current, target) {
    const _ = Math.abs(target - current);
    const vertical = Math.floor(_ / 3);
    const horizontal = _ % 3;
    
    return vertical + horizontal;
}

function solution(numbers, hand) {
    hand = hand === 'left' ? 'L' : 'R';
    let answer = '';
    let pos = [10, 12];
    const onlyL = [1, 4, 7];
    const onlyR = [3, 6, 9];
    
    const moveHand = (handType, value) => {
        if (handType === 'L') pos[0] = value;
        else pos[1] = value;
        
        answer += handType;
    }
    
    numbers.forEach((_) => {
        const number = _ === 0 ? 11: _;
        const [left, right] = pos;
        
        if (onlyL.includes(number)) moveHand('L', number);
        
        else if (onlyR.includes(number)) moveHand('R', number);
        
        else {
            const l = getDistance(left, number);
            const r = getDistance(right, number);   
            
            if (l === r) moveHand(hand, number);
            else if (l < r) moveHand('L', number);
            else moveHand('R', number);
        }
    });
    
    return answer;
}