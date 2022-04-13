const clg = console.log;

function solution(numbers, target) {
    let answer = 0;
    
    const LEN = numbers.length;
    const ARR = new Array(LEN).fill(0);
    
    const isValid = (ops) => {
        let sum = 0;
        ops.forEach((op, index) => {
            sum += numbers[index] * op;
        })

        return sum === target;
    }   
    
    const parseArr = (ops) => ops.map((op) => op === 1 ? 1 : -1);

    const dfs = (currentIndex, currentArr) => {
        if (currentIndex === LEN) {
            if (isValid(parseArr(currentArr))) answer++;
            return;
        }
        
        currentArr[currentIndex]++;
        dfs(currentIndex + 1, currentArr);
        
        currentArr[currentIndex]++;
        dfs(currentIndex + 1, currentArr);
        
        currentArr[currentIndex] = 0;
    }
    
    dfs(0, ARR);
    
    return answer;
}