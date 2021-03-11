function solution(s) {
  var answer = 0;

  const arr = s.split("");
  const stack = [];
  const leng = arr.length - 1;
  let index = 0;

  stack.push(arr[index]);
  index++;
  while (true) {
    if (stack[stack.length - 1] === arr[index]) stack.pop();
    else stack.push(arr[index]);

    if (index >= leng) {
      answer = stack.length === 0 ? 1 : 0;
      break;
    }
    index++;
  }
  /* 1, 2차 풀이
    const acc = arr.reduce((acc, cur, index) =>{
        acc[cur] = acc[cur] ? [...acc[cur], index] : [index];
        
        return acc;
    },{});
    
    console.log(acc);
    
    
    while(true){
        if(arr[index] === arr[index+1]) {
            arr.splice(index, 2);
            index = index - 2;
        }
        if(!arr.length){
            answer = 1;
            break;
        }
        if(index === arr.length-2){
            answer = 0;
            break;
        }
        index++;
    }
    */
  return answer;
}
