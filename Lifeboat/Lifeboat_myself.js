function solution(people, limit) {
  let answer = 0;

  let arr = [];
  
  while(people.length){
      const person = people.shift();
      arr = people.filter(item => {
          return limit-person >= item;
      });
      if(arr.length){
          arr.sort((a,b) => a-b);
          const pair = arr.pop();
          people.splice(people.indexOf(pair), 1);
      }
      answer++;
  }
  
  return answer;
}