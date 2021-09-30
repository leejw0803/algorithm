/*
    복서 선수들의 몸무게 weights,
    복서 선수들의 전적을 나타네는 head2head,
    
    정렬하시오
    1. 전체 승률이 높은 복서의 번호가 앞쪽으로 간다. -> 전적이 없으면 0%
    2. 승률이 동일한 복서의 번호들 중에서 자신보다 몸무게가 무거운 복서를 이긴 횟수가 많은 복서의 번호가 앞으로 간다.
    3. 무거운 복서를 이긴 횟수까지 동일한 복서의 번호들 중에서 자기 몸무게가 무거운 복서의 번호가 앞으로 간다.
    4. 자기 몸무게까지 동일한 복서의 번호들 중에서 작은 번호가 앞쪽으로 간다.
    
    
    1. [복서 번호, 전체 승률, 무거운 복서를 이긴 횟수, 자신의 몸무게]의 배열로 정리
    2. 정렬함수를 짜서 sort하면 됨
    
 */

function solution(weights, head2head) {
  var answer = [];

  const recordInfo = [];

  head2head.forEach((record, myIndex) => {
    const recordArr = record.split("");

    let winningCountWithHeavy = 0;
    let winningCount = 0;
    let gameCount = 0;
    recordArr.forEach((result, idx) => {
      if (result !== "N") {
        gameCount++;
        if (result === "W") {
          winningCount++;
          if (weights[idx] > weights[myIndex]) {
            winningCountWithHeavy++;
          }
        }
      }
    });

    const winningRate = winningCount / gameCount ? winningCount / gameCount : 0;

    recordInfo.push([
      myIndex + 1,
      winningRate,
      winningCountWithHeavy,
      weights[myIndex],
    ]);
  });

  recordInfo.sort((record1, record2) => {
    if (record2[1] === record1[1]) {
      if (record2[2] === record1[2]) {
        if (record2[3] === record1[3]) {
          return record1[0] - record2[0];
        }
        return record2[3] - record1[3];
      }
      return record2[2] - record1[2];
    }
    return record2[1] - record1[1];
  });

  recordInfo.forEach((record) => {
    answer.push(record[0]);
  });

  return answer;
}
