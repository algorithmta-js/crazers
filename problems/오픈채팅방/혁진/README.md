# 프로그래머스 오픈채팅방

> 문제는 [여기](https://programmers.co.kr/learn/courses/30/lessons/42888)서 확인하세요.

채팅방 입퇴장 내역을 닉네임과 함께 텍스트로 출력하는 문제

## Solution

* userId를 key로 갖는 Map 생성
* Enter, Change, Leave에 따라 처리
* id에 따라 log 함수로 입퇴장 내역 출력

```javascript
function solution(record) {
    const userMap = new Map();
    const answer = [];
    const log = (type, id) => {
        if (type === 'Enter') return () => `${userMap.get(id)}님이 들어왔습니다.`;
        return () => `${userMap.get(id)}님이 나갔습니다.`;
    }

    record.forEach((info) => {
        const [type, id, nickname] = info.split(" ");
        switch (type) {
            case 'Enter':
                userMap.set(id, nickname);
                answer.push(log(type, id));
                break;
            case 'Change':
                if (userMap.has(id)) userMap.set(id, nickname);
                break;
            case 'Leave':
                answer.push(log(type, id));
                break;
            default:
                break;
        }
    });
    
    return answer.map((str) => str());
}
```