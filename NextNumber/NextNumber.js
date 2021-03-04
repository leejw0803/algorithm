function solution(n) {
  let answer = 0;

  let number = n;

  const cnt = getOneCount(number);

  while (true) {
    number++;
    const compare = getOneCount(number);
    if (compare === cnt) {
      answer = number;
      break;
    }
  }

  return answer;
}

/* 1 갯수 구하기 */
function getOneCount(num) {
  const bin = num.toString(2);
  let cnt = 0;

  const binArr = bin.split("");

  for (let item of binArr) {
    if (item === "1") cnt++;
  }

  return cnt;
}
