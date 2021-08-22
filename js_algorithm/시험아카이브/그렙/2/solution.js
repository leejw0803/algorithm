/*
    성적은 좋은 순서대로 남는다.
    가장 좋은 성적이 여러개면 가장 먼저 수강한 것이 남는다.
    표에서 위에 나온것 : 배열에서 앞에 있는 것이 먼저 수강한 것이다.
    정리된 성적표를 구해서 return 하라

    1. 공백으로 분리해서 {과목번호, 과목성적, 들은순서(인덱스)}를 넣는다.
    
    / 1번 방법 /
    2. 성적표를 돌면서 들은과목 배열에 추가한다.
    3. 만약 이번 과목이 들은 과목에 있다면, 성적을 비교한다.
    4. 성적이 같다면 순서를 비교한다.
    5. 남아야되는 과목이 원래 있던 과목이라면 지금 과목은 건너뛰고 다음과목부터 차례대로 넣는다.
    6. 남아야되는 과목이 지금 과목이라면 원래 있던 과목을 배열에서 제거하고 지금 과목을 넣는다.
    
    / 2번 방법 /
    2. 과목번호가 겹치는 애들만 정리한다.
    3. 
    
    
 */

function compareGrades(grade1, grade2) {
  const points = [
    "A+",
    "A0",
    "A-",
    "B+",
    "B0",
    "B-",
    "C+",
    "C0",
    "C-",
    "D+",
    "D0",
    "D-",
    "F",
  ];

  const point1 = points.length - points.indexOf(grade1.point);
  const point2 = points.length - points.indexOf(grade2.point);

  if (point1 > point2) {
    return true;
  } else if (point1 < point2) {
    return false;
  }

  if (grade1.order > grade2.order) {
    return false;
  }

  return true;
}

function solution(grades) {
  var answer = [];

  const points = [
    "A+",
    "A0",
    "A-",
    "B+",
    "B0",
    "B-",
    "C+",
    "C0",
    "C-",
    "D+",
    "D0",
    "D-",
    "F",
  ];

  const detailGrades = grades.map((grade, index) => {
    const [code, point] = grade.split(" ");
    return {
      code: code,
      point: point,
      order: index,
    };
  });

  const codes = [];
  const results = [];

  detailGrades.forEach((grade, index) => {
    const codeIndex = codes.indexOf(grade.code);
    if (codeIndex !== -1) {
      if (!compareGrades(results[codeIndex], grade)) {
        codes.push(grade.code);
        results.push(detailGrades[grade.order]);
        codes.splice(codeIndex, 1);
        results.splice(codeIndex, 1);
      }
    } else {
      codes.push(grade.code);
      results.push(detailGrades[grade.order]);
    }
  });

  results.sort((a, b) => {
    const point1 = points.length - points.indexOf(a.point);
    const point2 = points.length - points.indexOf(b.point);

    return point2 - point1;
  });

  answer = results.map((result) => result.code + " " + result.point);

  return answer;
}
