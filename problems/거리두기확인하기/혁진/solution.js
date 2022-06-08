const dir = [[1, 0], [-1 , 0], [0, -1], [0, 1]];
const N = 5;

function solution(places) {
    const answer = [];
    const isSafe = (start, map) => {
        const visited = Array.from(Array(5), () => Array(2).fill(false))
        let q = [];
        q.push({
            xy: start,
            count: 0,
        });
        visited[start[0]][start[1]] = true;

        while(q.length) {
            const { xy: [x, y], count } = q.shift();
            
            if (count === 3) continue;
            if (map[x][y] === 'P' && count && count < 3) return false;
            
            
            for (let i = 0; i < 4 ; i++) {
                const [dx, dy] = [x + dir[i][0], y + dir[i][1]];
                
                if (dx >= N || dy >= N) continue;
                if (dx < 0 || dy < 0) continue;
                if (map[dx][dy] === 'X') continue;
                if (visited[dx][dy]) continue;
                
                q.push({
                    xy: [dx, dy],
                    count: count + 1,
                });
            }   
        }
        
        return true;
    }
    
    places.forEach((place) => {
        for (let i = 0; i < place.length; i++) {
            for (let j = 0; j < place[i].length; j++) {
                if (place[i][j] === 'P') {
                    const result = isSafe([i, j], place);
                    if (!result) {
                        answer.push(0);
                        return;
                    }
                }
            }
        }
        
        answer.push(1);
    });
    
    return answer;
    
}