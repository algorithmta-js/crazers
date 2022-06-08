function solution(id_list, report, k) {
    let answer = [];
    const reportNumArr = []; // 신고당한 횟수 배열
    const suspensionIdArr = []; // 정지된 id 배열

    //report에서 중복 제거하기
    const removeRepeat = [...new Set(report)];
    // 신고당한 횟수 배열 만들기
    id_list.map((id) => {
        // id와 reportedId가 같을 때 해당 아이디 신고당한 횟수에 +1
        let reportedNum = 0;
        removeRepeat.forEach((reportElement) => {
            const [reportId, reportedId] = reportElement.split(" ");
            if (reportedId !== id) return;
            reportedNum++;
        });
        reportNumArr.push(reportedNum);
    });
    // k번 이상일 때 정지된 ID 배열 만들기
    reportNumArr.forEach((reportNum, idx) => {
        if (reportNum >= k) suspensionIdArr.push(id_list[idx]);
    });

    // id_list를 돌면서 결과메일 받을 id 확인하기
    id_list.map((id) => {
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
