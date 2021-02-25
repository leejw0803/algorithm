function solution(info, query) {
  // 4가지 항목을 반드시 선택
  // cpp, java, python / backend, frontend / junior, senior / chicken, pizza /
  // 지원자들의 지원 조건을 선택하면 해당 조건에 맞는 지원자가 몇 명인지 쉽게 알 수 있는 도구를 만들고 있다.
  // 조건을 만족하는 사람 중 코딩 테스트 점수를 x점 이상 받은 사람은 모두 몇 명인가

  // 4가지 정보와 코딩테스트 점수를 하나의 문자열로 구성한 값의 배열인 info
  // 궁금해 하는 문의조건이 담긴 문자열 배열 query

  let answer = [];
  const infoObj = {};
  const queryObj = {};
  for (let item of info) {
    let x = item.split(" ");
    const number = x.pop();
    infoObj[x.join("")] = number;
  }
  for (let item of query) {
    let x = item.split(" ");
    x = x.filter((item) => item !== "and");
    const number = x.pop();
    queryObj[x.join("")] = number;
  }

  console.log(infoObj);
  console.log(queryObj);

  //     for(let k = 0; k < queryArr.length; k++){
  //         let count = 0;
  //         for(let j = 0; j < infoArr.length; j++){
  //             let isRight = true;
  //             if(Number(queryArr[k][4]) > Number(infoArr[j][4])) {
  //                 isRight = false;
  //             }else{
  //                 for(let i = 0; i < 4; i++){
  //                     if ((queryArr[k][i] !== infoArr[j][i]) && queryArr[k][i] !== '-')  {
  //                         isRight = false;
  //                         break;
  //                     }
  //                 }
  //             }
  //             if(isRight) count++
  //         }
  //         answer.push(count);
  //     }

  //     for(let i = 0; i < queryArr.length; i++){
  //         for(let j = 0; j < 4; j++){
  //             if(queryArr[i][j] === '-')
  //             if(queryArr[i][j] === infoArr)
  //         }

  //     }
  return answer;
}
