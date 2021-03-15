// 점심시간에 도둑이 들어 체육복을 도난당했다
// 여벌이 있는 학생이 체육복을 빌려줌
// 번호는 체격순 바로 앞이나 바로 뒤에 학생에게만 체육복을 빌려 줄 수 있다.
// 전체 학생 수 n, 체육복을 도난당한 학생들의 번호 lost, 여벌의 체육복을 가져온 학생들 reserve
// 체육수업을 들을 수 있는 학생의 최댓값

// 1. 일단 체육복을 못 빌려준다면 n-lost.length 만큼 수업 가능
// 2. 거기서 lost를 순회하면서 lost 바로 앞 뒤 번호가 reserve에 있는 지 확인
// 3. 있다면 앞에서부터 제거

// 시발 여벌 체육복을 가져온 색기가 도난 당할 수 있었군...

function solution(n, lost, reserve) {
  var answer = 0;

  const filteredReserve = reserve.filter((item) => {
    return lost.indexOf(item) === -1;
  });

  console.log(filteredReserve);

  for (let i = 0; i < lost.length; i++) {
    const forward = filteredReserve.indexOf(lost[i] + 1);
    const backward = filteredReserve.indexOf(lost[i] - 1);
    if (forward != -1) {
      filteredReserve.splice(forward, 1);
      lost.splice(i, 1);
      i--;
    } else if (backward != -1) {
      filteredReserve.splice(backward, 1);
      lost.splice(i, 1);
      i--;
    }
  }

  answer = n - lost.length;
  return answer;
}
