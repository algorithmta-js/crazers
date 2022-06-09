function solution(id_list, report, k) {
    let answer = [];
    const reportNumArr = []; // 신고당한 횟수 배열
    const suspensionIdArr = []; // 정지된 id 배열

    //report에서 중복 제거하기
    const removeOverlapReport = [...new Set(report)];

    // 신고당한 횟수 배열
    const reportedCountMap = new Map();
    id_list.forEach((id) => {
        reportedCountMap.set(
            id,
            removeOverlapReport.filter((el) => {
                const [reportId, reportedId] = el.split(" ");
                return id === reportedId;
            }).length
        );
    });
    // k번 이상일 때 정지된 ID 배열 만들기
    const idSuspension = [...reportedCountMap.keys()].find((key) => {
        reportedCountMap.get(key) >= k;
    });
    console.log(idSuspension);
    // k번 이상일 때 정지된 ID 배열 만들기
    reportNumArr.forEach((reportNum, idx) => {
        if (reportNum >= k) suspensionIdArr.push(id_list[idx]);
    });
    // k번 이상일 때 정지된 ID 배열 만들기
    // id_list를 돌면서 결과메일 받을 id 확인하기
    id_list.forEach((id) => {
        let resultMailCount = 0;
        removeOverlapReport.forEach((reportElement) => {
            const [reportId, reportedId] = reportElement.split(" ");
            if (reportId !== id) return;
            if (!suspensionIdArr.includes(reportedId)) return;
            resultMailCount++;
        });
        answer.push(resultMailCount);
    });

    return answer;
}
