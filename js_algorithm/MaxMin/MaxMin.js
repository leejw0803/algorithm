function solution(s) {
  var answer = "";
  const charArr = s.split(" ");

  const max = getMax(charArr);
  const min = getMin(charArr);

  const ans = [];
  ans.push(min);
  ans.push(max);
  answer = ans.join(" ");
  return answer;

  console.log(answer);
}

function getMax(arr) {
  let max = Number(arr[0]);

  for (let item of arr) {
    const nItem = Number(item);
    if (nItem > max) {
      max = nItem;
    }
  }
  return max;
}

function getMin(arr) {
  let min = Number(arr[0]);

  for (let item of arr) {
    const nItem = Number(item);
    if (nItem < min) {
      min = nItem;
    }
  }
  return min;
}
