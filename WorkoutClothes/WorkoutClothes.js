function solution(n, lost, reserve) {
  var answer = 0;

  const filteredReserve = reserve.filter((item) => {
    return lost.indexOf(item) === -1;
  });

  const filteredLost = lost.filter((item) => {
    return reserve.indexOf(item) === -1;
  });

  for (let i = 0; i < filteredLost.length; i++) {
    const forward = filteredReserve.indexOf(filteredLost[i] + 1);
    const backward = filteredReserve.indexOf(filteredLost[i] - 1);
    if (forward != -1) {
      filteredReserve.splice(forward, 1);
      filteredLost.splice(i, 1);
      i--;
    } else if (backward != -1) {
      filteredReserve.splice(backward, 1);
      filteredLost.splice(i, 1);
      i--;
    }
  }

  answer = n - filteredLost.length;
  return answer;
}
