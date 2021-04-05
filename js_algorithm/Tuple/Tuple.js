function solution(s) {
  let answer = [];

  let arr = [];
  let newStr = s.substring(1, s.length - 1);
  arr = newStr.split("");
  let total = [];

  let start = 0;
  let end = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "{") {
      start = i + 1;
    } else if (arr[i] === "}") {
      end = i - 1;
      const shortArr = [];
      for (let j = start; j <= end; j++) {
        shortArr.push(arr[j]);
      }
      total.push(shortArr.join(""));
      start = 0;
      end = 0;
    }
  }

  for (let item of total) {
    let a = item.split(",");
    a = a.map((item) => Number(item));
    answer.push(a);
  }

  answer.sort((a, b) => a.length - b.length);

  let comp = [];
  const result = [];

  while (answer.length) {
    comp = answer.shift();
    const element = comp.pop();
    for (let item of answer) {
      item.splice(item.indexOf(element), 1);
    }
    result.push(element);
  }

  return result;
}
