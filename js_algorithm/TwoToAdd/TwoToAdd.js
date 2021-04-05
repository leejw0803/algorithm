function solution(numbers) {
    const answer = [];
    
    for(let i = 0; i < numbers.length; i++){
        for (let j = i+1; j < numbers.length; j++){
            const temp = numbers[i]+numbers[j];
            answer.push(temp);
        }
    }
    
    const ans = answer.sort((a, b) => {
        if(a > b) return 1;
        else if(a === b) return 0;
        return -1;
    });
    
    const result = ans.filter((item, index) => ans.indexOf(item) === index);
    
    return result;
}