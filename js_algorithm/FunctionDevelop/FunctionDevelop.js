function solution(progresses, speeds) {
  var answer = [];

  const days = progresses.map((item, index) => {
    return Math.ceil((100 - item) / speeds[index]);
  });

  let compare = days[0];
  let cnt = 0;

  days.forEach((item, index) => {
    if (item > compare) {
      answer.push(cnt);
      compare = item;
      cnt = 0;
    }
    cnt++;
    if (index === days.length - 1) {
      answer.push(cnt);
    }
  });

  return answer;
}
