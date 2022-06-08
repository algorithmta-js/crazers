function solution(id_list, report, k) {
    let answer = [];
    const reportNumArr = []; // 신고당한 횟수 배열
    const suspensionIdArr = []; // 정지된 id 배열

    //report에서 중복 제거하기
    const removeRepeat = [...new Set(report)];
    // 신고당한 횟수 배열 만들기
    id_list.forEach((id) => {
        // id와 reportedId가 같을 때 해당 아이디 신고당한 횟수에 +1
        let reportedNum = 0;
        removeRepeat.forEach((reportElement) => {
            const [reportId, reportedId] = reportElement.split(" ");
            if (reportedId !== id) return;
            reportedNum++;
        });
        // 단일 반복문으로 만들어야 함 -> 단일 반복문 뭐로?
        // id를 돌리는 게 문제다 => report를 돌려서 저장해야한다.
        // 걍 배열을 저장하는 방식이 틀림.
        // 무작정 push가 아니라 빈배열이 아니라, index나 키로 접근해야함
        // id 업이도 돌아가는 방법을 생각해야함.
        // 단지 시간초과 때문에 이생각
        // 여기서 틀린 것을 어떻게 고치는지 메모하기
        reportNumArr.push(reportedNum);
    });
    // k번 이상일 때 정지된 ID 배열 만들기
    reportNumArr.forEach((reportNum, idx) => {
        if (reportNum >= k) suspensionIdArr.push(id_list[idx]);
    });
    // id_list를 돌면서 결과메일 받을 id 확인하기
    id_list.forEach((id) => {
        let resultMailCount = 0;
        removeRepeat.forEach((reportElement) => {
            const [reportId, reportedId] = reportElement.split(" ");
            if (reportId !== id) return;
            if (!suspensionIdArr.includes(reportedId)) return;
            resultMailCount++;
        });
        answer.push(resultMailCount);
    });

    return answer;
}
