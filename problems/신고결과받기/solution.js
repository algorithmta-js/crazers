function solution(id_list, report, k) {
    let answer = [];
    const suspensionIdArr = []; //정지된 id 배열
    //report에서 중복 제거하기
    const removeRepeat = [...new Set(report)];
    // 신고당한 횟수 배열 만들기
    const reportNumArr = new Array(id_list.length).fill(0);
    removeRepeat.forEach((reportElement) => {
        //report 공백 앞 문자열이 id_list에서 몇 번째 index에 있는지 확인하여, reportNum의 해당 index에 1을 더해준다.
        const [reportId, reportedId] = reportElement.split(" ");
        reportNumArr[id_list.indexOf(reportedId)]++;
    });
    // k번 이상일 때 정지된 ID 배열 만들기
    reportNumArr.forEach((reportNum, idx) => {
        if (reportNum >= k) suspensionIdArr.push(id_list[idx]);
    });
    // id_list를 돌면서 결과메일 받을 id 확인하기
    const receiveResultMailArr = new Array(id_list.length).fill(0);
    removeRepeat.forEach((reportElement) => {
        //먼저 3.의 배열 안에 report 뒤 id가 있을 때 report 앞 id가 id_list의 몇 번째 index에 있는지 확인하고, receiveResultMailArr의 해당 index에 1을 더해준다.
        const [reportId, reportedId] = reportElement.split(" ");
        if (!suspensionIdArr.includes(reportedId)) return;
        receiveResultMailArr[id_list.indexOf(reportId)]++;
    });
    // answer에 receiveResultMailArr 대입
    answer = receiveResultMailArr;
    return answer;
}
