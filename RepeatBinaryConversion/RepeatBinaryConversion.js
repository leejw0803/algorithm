function solution(s) {
  var answer = [];
  let cnt = 0;
  let zeroCnt = 0;
  let str = s;
  while (true) {
    const [zero, newStr] = removeZero(str);
    const length = newStr.length;
    const next = length.toString(2);
    cnt++;
    zeroCnt += zero;
    if (next === "1") break;
    str = next;
  }

  answer = [cnt, zeroCnt];

  return answer;
}

function removeZero(s) {
  const charArr = s.split("");
  const filteredArr = charArr.filter((item) => item === "1");
  const resultStr = filteredArr.join("");
  const zeroCnt = charArr.length - filteredArr.length;

  return [zeroCnt, resultStr];
}
