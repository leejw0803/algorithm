function solution(number, k) {
  let answer = '';
  const result = [];
  
  let numOfPick = num.length - k;
  
  while(num.length){
    let max = num[0];
    let maxIdx = 0;
    for(let i=0; i<num.length-numOfPick+1; i++){
      if(num[i] === 9) {
        max = num[i];
        maxIdx = i;
        break;
      }else if(num[i] > max){
        max = num[i];
        maxIdx = i;
      } 
    }
    result.push(max);
    num = num.slice(maxIdx+1, num.length);
    numOfPick--;    
  }
  answer = result.join('');

  return answer;  
}