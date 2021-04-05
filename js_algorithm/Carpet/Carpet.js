function solution(brown, yellow) {
  let answer = [];
  const plus = (brown + 4) / 2;
  const multiply = brown + yellow;
  
  for(let i = 1; i < plus; i++){
      const j = plus - i;
      if(i > j) break;
      const temp = [];
      temp.push(j);
      temp.push(i);
      answer.push(temp);
  }

  answer = answer.filter(item => item[0]*item[1] === brown + yellow);
  answer = answer.pop();
  
  return answer;
}