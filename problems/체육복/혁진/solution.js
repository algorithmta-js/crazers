function solution(n, lost, reserve) {
    let target = [-1, 0 , 1];
    let answer = 0;
    let rSet = new Set(reserve);
    const realLost = lost.filter((l) => {
        if (rSet.has(l)) {
            rSet.delete(l);
            return false;
        }

        return true;
    })

    realLost.sort((a, b) => a - b);
    realLost.forEach((l) => {
        let flag = false;
        target.forEach((t) => {
            if (!flag && rSet.has(l + t)) {
                rSet.delete(l + t);
                answer++;
                flag = true;
            }
        })
    })

    return n - realLost.length + answer;
}