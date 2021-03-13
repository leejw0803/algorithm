function solution(n, words) {
  var answer = [];

  let person = 0;
  let turn = 0;

  let startErrorIndex = -1;
  let duplicateErrorIndex = -1;
  let duplicateErrorIndexArr = [];
  let errIndex = -1;

  for (let i = 1; i < words.length; i++) {
    if (words[i].charAt(0) != words[i - 1].charAt(words[i - 1].length - 1)) {
      startErrorIndex = i;
      break;
    }
  }

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i] === words[j]) {
        duplicateErrorIndexArr.push(j);
        break;
      }
    }
  }
  duplicateErrorIndexArr.sort((a, b) => a - b);
  duplicateErrorIndex = duplicateErrorIndexArr.length
    ? duplicateErrorIndexArr[0]
    : -1;

  if (duplicateErrorIndex != -1 && startErrorIndex != -1) {
    errIndex =
      duplicateErrorIndex > startErrorIndex
        ? startErrorIndex
        : duplicateErrorIndex;
  } else if (duplicateErrorIndex === -1 && startErrorIndex != -1) {
    errIndex = startErrorIndex;
  } else if (duplicateErrorIndex != -1 && startErrorIndex === -1) {
    errIndex = duplicateErrorIndex;
  } else {
    errIndex = -1;
  }

  if (errIndex != -1) {
    person = (errIndex % n) + 1;
    turn = Math.floor(errIndex / n) + 1;
  } else {
    person = 0;
    turn = 0;
  }

  answer = [person, turn];

  return answer;
}
