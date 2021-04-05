function solution(orders, course) {
  let answer = [];
  
  for(let j = 0; j < course.length; j++){
      let result= [];
      for(let i = 0; i < orders.length; i++){
          const temp = orders[i].split("");
          temp.sort();
          result = result.concat(combination(temp, course[j]));
      }
      result = result.map(item =>item.join(''));
      
      result = result.reduce((acc, cur, i) =>{
          acc[cur] ? acc[cur]++ : acc[cur] = 1;
          return acc;
      }, {});
      
      const keys = Object.keys(result);
      const values = Object.values(result);
      const max = Math.max.apply(null, values);
      result = keys.filter(item => result[item] >= 2 && result[item] === max);
      
      answer = answer.concat(result);
  }
  
  answer.sort();
 
  return answer;
}

function combination(arr, select){
  let result = [];
  if(select === 1) return arr.map(value => [value]);
  
  arr.forEach((value, idx, arr) => {
      const fix = value;
      const rest = arr.slice(idx+1);
      const comArr = combination(rest, select-1);
      const combine = comArr.map(value => [fix, ...value]);
      result.push(...combine);
  });
  
  return result;
}