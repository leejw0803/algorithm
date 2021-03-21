const validChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function solution(str1, str2) {
  var answer = 0;

  const obj1 = parser(str1);
  const obj2 = parser(str2);

  let intersection = 0;
  let union = 0;

  for (let key1 of Object.keys(obj1)) {
    for (let key2 of Object.keys(obj2)) {
      if (key1 === key2) {
        intersection += obj1[key1] > obj2[key2] ? obj2[key2] : obj1[key1];
      }
    }
  }

  for (let key1 of Object.keys(obj1)) {
    union += obj1[key1];
  }

  for (let key2 of Object.keys(obj2)) {
    if (Object.keys(obj1).indexOf(key2) != -1) {
      union -= obj1[key2];
      union += obj1[key2] < obj2[key2] ? obj2[key2] : obj1[key2];
    } else {
      union += obj2[key2];
    }
  }

  if (union === 0) return 65536;
  answer = Math.floor((intersection / union) * 65536);
  return answer;
}

function parser(str) {
  const arr = str.toUpperCase().split("");

  let strArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    strArr.push([arr[i], arr[i + 1]].join(""));
  }

  strArr = strArr.filter(
    (item) =>
      validChar.indexOf(item.charAt(0)) != -1 &&
      validChar.indexOf(item.charAt(1)) != -1
  );

  return strArr.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;

    return acc;
  }, {});
}
