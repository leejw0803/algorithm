function solution(people, limit) {
  let answer = 0;
  
  people.sort((a,b) => b-a);
  
  let left = 0;
  let right = people.length-1;
  
  while(left < right) {
      const sum = people[left] + people[right];
      
      if(sum <= limit) {
          left++;
          right--;
      }else{
          left++;
      }
      answer++;
  }
  if(left === right) answer++;

  return answer;
}