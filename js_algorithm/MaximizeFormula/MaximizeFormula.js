function solution(expression) {
  var answer = 0;

  const prlist = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["-", "*", "+"],
    ["-", "+", "*"],
  ];

  // 문자열 파싱
  const arr = expression.split("");
  const resultArr = [];
  const operand = [];
  let num = [];
  const numbers = [];

  for (let item of arr) {
    if (item === "-" || item === "*" || item === "+") {
      numbers.push(Number(num.join("")));
      num = [];
      operand.push(item);
    } else {
      num.push(item);
    }
  }
  numbers.push(Number(num.join("")));

  for (let pr of prlist) {
    const nums = numbers.slice(0);
    const ops = operand.slice(0);

    for (let oper of pr) {
      for (let i = 0; i < ops.length; i++) {
        if (ops[i] === oper) {
          const calcRes = calc(nums[i], nums[i + 1], ops[i]);
          nums.splice(i, 2, calcRes);
          ops.splice(i, 1);
          i--;
        }
      }
    }
    console.log(nums[0]);
    resultArr.push(Math.abs(nums[0]));
  }

  answer = Math.max.apply(null, resultArr);
  return answer;
}

function calc(a, b, oper) {
  let result = 0;
  switch (oper) {
    case "-":
      result = a - b;
      break;
    case "+":
      result = a + b;
      break;
    case "*":
      result = a * b;
      break;
  }
  return result;
}
