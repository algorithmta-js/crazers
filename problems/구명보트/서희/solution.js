function solution(people,limit){
    let [ answer, currentWeight, start, end ] = [0, 0, 0, people.length - 1 ];
    people.sort((a,b)=> b-a);
    
    while(start < end){
        if(currentWeight + people[start] <= limit ){
            currentWeight += people[start];
            start+=1;
        }
  
        if(currentWeight + people[end] <= limit){
            currentWeight += people[end];
            end -= 1;
        } else {
            currentWeight = 0;
            answer +=1
        }
  
    }
    answer += currentWeight != 0 ? 1 : 0;
    return start === end ? answer + 1 : answer ;
}
