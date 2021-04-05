function solution(n) {
  var answer = 0;
  let k = 1;

  while (sum(k) < n) {
    if ((n - sum(k)) % k === 0) {
      answer++;
    }

    k++;
  }

  return answer;
}

function sum(k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += i;
  }

  return sum;
}
