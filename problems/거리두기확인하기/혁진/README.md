# 프로그래머스 거리두기 확인하기

> 문제는 [여기](https://programmers.co.kr/learn/courses/30/lessons/81302)서 확인하세요.

맨해튼 거리는 그냥 상하좌우로 몇번에 거쳐 이동해야 갈 수 있는가를 의미한다.
현재 움직인 횟수를 기억하며 BFS를 통해 거리두기를 위반한 사람을 찾는다.

## Solution

* 맨해튼 거리 2 이하로 앉지 말라 -> 2번 안에 만나면 거리두기 위반.
* 큐에 현재 좌표와 count가 담긴 객체를 넣어 푸시할 때마다 count + 1
* BFS 순회 중 카운트가 3보다 작을 때 사람을 만날 경우 거리두기 위반.
* 이를 사람이 앉은 모든 노드에 대해 수행하면 됨.

```javascript
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
```