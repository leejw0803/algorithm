function solution(numbers) {
  let answer = 0;
  
  const numArr = numbers.split('');
  let perArr = [];
  
  for(let i = 1; i <= numArr.length; i++){
      perArr = perArr.concat(permutation(numArr, i));
  }
  
  const preprocess = perArr.map(item => {
      while(item[0] === '0') item.shift();
      return Number(item.join(""));
  });
  
  const numberList = preprocess.filter((item, index) => preprocess.indexOf(item) === index);

  for(let item of numberList){
      if(isPrime(item)) answer++;
  }
  
  return answer;
}

function isPrime(number){
  let result = true;
  
  for(let i = 2; i < number; i++){
      if(number % i === 0) {
          result = false;
          break;
      }
  }
  
  if(number === 0 || number === 1) result = false;
  
  return result;
}

function permutation(arr, select){
  const result = [];
  if(select === 1) return arr.map(value => [value]);
  
  arr.forEach((value, idx, arr) => {
      const fix = value;
      const rest = arr.filter((_, index) => index !== idx);
      const permutationArr = permutation(rest, select-1);
      const combine = permutationArr.map(value => [fix, ...value]);
      result.push(...combine);
  });
  
  return result;
}
