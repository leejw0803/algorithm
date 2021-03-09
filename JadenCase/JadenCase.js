function solution(s) {
  var answer = "";

  let newStr = s.toLowerCase();
  let arr = newStr.split("");
  let resultArr = [];

  resultArr.push(convert(arr[0]));
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === " ") {
      resultArr.push(convert(arr[i + 1]));
    } else {
      resultArr.push(arr[i + 1]);
    }
  }
  answer = resultArr.join("");
  return answer;
}

function convert(char) {
  let result = char;
  if (!Number(char)) {
    result = char.toUpperCase();
  }
  return result;
}
