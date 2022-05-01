function createProcessingJob(job, startTime) {
    const [requestTime, cost] = job;
    return {
        startTime,
        requestTime,
        cost: cost * -1,
    }
}

function solution(jobs) {
    const heap = new Heap();
    jobs.sort((a,b) => a[0] - b[0]);
    
    let processing = null;
    let answer = 0, count = 0;
    
    for (let i = 0, time = 0; count !== jobs.length; time++) {
        while(i < jobs.length) {
            const [requestTime, cost] = jobs[i];
            if (requestTime > time) break;
            
            heap.insert([requestTime, cost * - 1]);
            i++;
        }
        
        if (processing && processing.startTime + processing.cost === time) {
            answer += time - processing.requestTime;
            count++;
            processing = null;
        }
        
        if (!processing && !heap.empty()) {
            processing = createProcessingJob(heap.myPop(), time);
        }
    }
    
    return Math.floor(answer / jobs.length);
} 