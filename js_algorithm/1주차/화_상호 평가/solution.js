/*
    만약 학생들이 자기 자신을 평가한 점수가 유일한 최고점 또는 유일한 최저점이라면 그 점수를제외하고 평균을 구한다.
    i번 학생이 받은 점수는 i열
    i번 학생이 평가한 점수는 i행
 */

function getScore(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 50) {
    return "D";
  } else {
    return "F";
  }
}

function solution(scores) {
  let answer = "";

  const scoreInfo = {};

  scores.forEach((giveScore) => {
    giveScore.forEach((receiveScore, index) => {
      scoreInfo[index] = scoreInfo[index]
        ? scoreInfo[index].concat([receiveScore])
        : [receiveScore];
    });
  });

  const scoreAvg = {};

  Object.keys(scoreInfo).forEach((key) => {
    let sum = 0;
    const max = Math.max.apply(null, scoreInfo[key]);
    const min = Math.min.apply(null, scoreInfo[key]);
    const mine = scoreInfo[key][Number(key)];
    const skipIndex =
      (max === mine || min === mine) &&
      scoreInfo[key].indexOf(mine) === scoreInfo[key].lastIndexOf(mine)
        ? Number(key)
        : -1;

    scoreInfo[key].forEach((score, index) => {
      sum += index === skipIndex ? 0 : score;
    });

    scoreAvg[key] =
      skipIndex === -1 ? sum / scores.length : sum / (scores.length - 1);
  });

  Object.values(scoreAvg).forEach((score) => {
    answer += getScore(score);
  });

  return answer;
}
