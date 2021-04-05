function solution(dirs) {
  var answer = 0;

  const infos = [];
  let end = [0, 0];
  let start = [0, 0];

  for (let item of dirs) {
    let info = start;
    switch (item) {
      case "U":
        if (end[1] < 5) end[1]++;
        break;
      case "L":
        if (end[0] > -5) end[0]--;
        break;
      case "R":
        if (end[0] < 5) end[0]++;
        break;
      case "D":
        if (end[1] > -5) end[1]--;
        break;
    }
    info = info.concat(end.slice(0));

    infos.push(info);
    start = end.slice(0);
  }

  const answerList = removeDuplicate(infos);

  return answerList.length;
}

function equal(arr1, arr2) {
  return (
    (arr1[0] === arr2[0] &&
      arr1[1] === arr2[1] &&
      arr1[2] === arr2[2] &&
      arr1[3] === arr2[3]) ||
    (arr1[0] === arr2[2] &&
      arr1[1] === arr2[3] &&
      arr1[2] === arr2[0] &&
      arr1[3] === arr2[1])
  );
}

function removeDuplicate(arr) {
  let isDupli = false;
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const compare = arr[i];
    if (compare[0] === compare[2] && compare[1] === compare[3]) {
      isDupli = true;
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (equal(arr[j], compare)) {
        isDupli = true;
        break;
      }
    }
    if (!isDupli) result.push(compare);
    isDupli = false;
  }

  return result;
}
