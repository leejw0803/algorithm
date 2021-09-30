/*
    직업군 언어 점수를 정리한 문자열 배열 table,
    개발자가 사용하는 언어를 담은 문자열 배열 languages,
    언어 선호도를 담은 정수 배열 preference,
    
    개발자가 사용하는 언어의 언어 선호도 * 직업군 언어 점수의 총합이 가장 높은 직업군을 return 
    
    1. table 배열 정리
    2. language 별 선호도 정리
    3. 해당 정리된 배열들을 바탕으로 직업군 별 점수 산정
    4. 직업군 별 점수 소팅
 */

function solution(table, languages, preference) {
  var answer = "";

  const tableInfo = {};
  const tableInfoDetail = {};

  table.forEach((row) => {
    const rowArr = row.split(" ");
    tableInfo[rowArr[0]] = rowArr.slice(1, 6);
  });

  const preferInfo = {};

  languages.forEach((language, index) => {
    preferInfo[language] = preference[index];
  });

  const pointInfo = {};

  Object.keys(tableInfo).forEach((job) => {
    Object.keys(preferInfo).forEach((language) => {
      const langIdx = tableInfo[job].indexOf(language);
      const pointByJob = langIdx === -1 ? 0 : 5 - langIdx;
      const pointByPrefer = preferInfo[language];
      const point = pointByJob * pointByPrefer;
      pointInfo[job] = pointInfo[job] ? pointInfo[job] + point : point;
    });
  });

  const pointInfoArr = [];

  Object.keys(pointInfo).forEach((job) => {
    pointInfoArr.push([job, pointInfo[job]]);
  });

  pointInfoArr.sort((point1, point2) => {
    if (point2[1] === point1[1]) {
      if (point1[0] < point2[0]) return -1;
      if (point1[0] > point2[0]) return 1;
      if (point1[0] === point2[0]) return 0;
    }
    return point2[1] - point1[1];
  });

  answer = pointInfoArr[0][0];

  return answer;
}
