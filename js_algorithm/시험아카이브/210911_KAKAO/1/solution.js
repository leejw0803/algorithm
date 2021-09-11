/*
    각 유저는 한 번에 한 명의 유저를 신고
    여러번 신고되지만 동일 유저는 1회로 처리
    k번 이상 신고된 유저는 즉각 정지
    유저를 신고한 모든 유저에게 정지 사실을 메일로 발송
    게시판 이용이 정지된 유저도 불량 이용자를 신고할 수 있음
    
    id_list 이용자의 ID가 담긴 문자열 배열
    report 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열
    k 정지 기준
    
    answer 각 유저별로 처리결과메일을 받은 횟수
    
    1. report를 for문으로 돌면서 처리한다. 
        1. 이용자의 이름을 key로 하고 신고한 사람을 객체에 담는다. => reportInfo
        2. 신고당한 id를 key로 하고 신고당한 횟수를 기록한다. => reportCount
    2. reportCount에서 k이상 신고당한 사람을 배열 추린다. => faultyUsers
    3. reportInfo를 돌면서 각 이용자가 신고한 유저 중 faultyUsers가 몇 명이나 있는지 체크한다. 
        => faultyUsersCount
    4. id_list를 돌면서 순서에 맞게 faultyUserCount를 찍어낸다.
 */
function solution(id_list, report, k) {
  var answer = [];

  const reportInfo = {};
  const reportCount = {};

  report.forEach((item, index) => {
    const [goodUser, faultyUser] = item.split(" ");
    reportInfo[goodUser] = reportInfo[goodUser]
      ? reportInfo[goodUser].concat([faultyUser])
      : [faultyUser];
  });

  const newReportInfo = {};

  Object.keys(reportInfo).forEach((item) => {
    const set = new Set(reportInfo[item]);
    const newReport = [...set];
    newReportInfo[item] = newReport;
  });

  Object.keys(reportInfo).forEach((item) => {
    newReportInfo[item].forEach((target) => {
      reportCount[target] = reportCount[target] ? reportCount[target] + 1 : 1;
    });
  });

  const faultyUsers = [];

  Object.keys(reportCount).forEach((item) => {
    if (reportCount[item] >= k) faultyUsers.push(item);
  });

  const faultyUsersCount = {};
  id_list.forEach((item) => {
    if (newReportInfo[item]) {
      newReportInfo[item].forEach((target) => {
        if (faultyUsersCount[item]) {
          faultyUsersCount[item] = faultyUsers.includes(target)
            ? faultyUsersCount[item] + 1
            : faultyUsersCount[item];
        } else {
          faultyUsersCount[item] = faultyUsers.includes(target) ? 1 : 0;
        }
      });
    } else {
      faultyUsersCount[item] = 0;
    }
  });

  answer = Object.values(faultyUsersCount);

  return answer;
}
