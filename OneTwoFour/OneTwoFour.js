function solution(n) {
    let answer = "";
    
    let i = 3;
    
    const numbers = [];
    
    while(n > 0){
        const compare = n%i;
        const standard = i/3;
        if(compare > standard && compare <= 2*standard){
            numbers.unshift("2");
        }else if(compare > 0 && compare <= standard){
            numbers.unshift("1");
        }else{
            numbers.unshift("4");
        }
        n = n - i;
        i = i * 3;
    }
    
    for(const item of numbers){
        answer = answer.concat(item);
    }
    
    return answer;
}