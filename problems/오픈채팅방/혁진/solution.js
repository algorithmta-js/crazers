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