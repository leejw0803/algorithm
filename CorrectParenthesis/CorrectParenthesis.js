function solution(s) {
  var answer = true;

  const arr = s.split("");
  const stack = [];

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    arr[i] === ")" && stack[stack.length - 1] === "("
      ? stack.pop()
      : stack.push(arr[i]);
  }

  answer = stack.length ? false : true;

  return answer;
}
