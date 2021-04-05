function solution(number, k) {
  let answer = '';
  const result = [];

  for(let i = 0; i < number.length; i++){
    const cur = number[i];
    
    while(k > 0 && result[result.length-1] < cur){
      result.pop();
      k--;    
    }
    result.push(cur);
  }
  
  result.splice(result.length-k, k);
  answer = result.join('');

  return answer;
}