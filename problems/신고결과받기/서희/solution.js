function solution(id_list, report, k) {
    const resultCount = new Array(id_list.length).fill(0);
    const reportCount = new Array(id_list.length).fill(0);
    
    report = [...new Set(report)]
      .map((sentence) => sentence.split(' '));
    
    report.forEach(([_, reporter])=> {
        reportCount[id_list.indexOf(reporter)] += 1;
    })
    
    report.forEach(([user,reporter])=>{
        if(reportCount[id_list.indexOf(reporter)] >= k ){
            resultCount[id_list.indexOf(user)] += 1;
        }
    })
  
    return resultCount;
}
