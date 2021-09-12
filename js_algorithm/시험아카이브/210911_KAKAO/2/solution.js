/*
    1. n을 k진수로 변경한다.
    2. k진수로 바뀐 값을 문자열로 변경한 후 0을 기준으로 나눠 배열로 치환한다. => split => strArr
    3. 빈문자열은 제거한다. => 제거할 필요 없음
    4. 문자열들을 다시 수로 치환한다. => numArr
    5. 숫자 배열을 돌면서 해당 수가 소수인지를 확인한다.
 */

function isPrime(num) {
  // 1보다 작은 수는 소수가 아니다!
  if (num <= 1) {
    return false;
  }

  // 2로 나누어지는 수는 소수가 아니다!
  if (num % 2 === 0) {
    return num === 2 ? true : false;
  }

  // 제곱근에 의미가 있는 건 제곱근이 3일 때부터
  // 왜냐면 2로 나누어 떨어지는 건 전부 제거 했기 때문
  if (num === 3 || num === 5 || num === 7) {
    return true;
  }

  // a x b의 값에서 둘 다 최댓값을 가지려면 제곱근이어야한다.
  // 따라서 한쪽부터 시작해서 반대쪽까지 전부 갈 필요 없이
  // a=3일 때부터 검사해서 중간 값까지만 가면 나머지는 저절로 확인하는 꼴이 되어버린다.
  // 따라서 3부터 제곱근까지만 검사하면 소수인지 아닌지 알 수있음
  // 추가적으로 2는 위에서 걸렀기 때문에 2씩 증가시켜서 확인 가능함
  const sqrt = parseInt(Math.sqrt(num));

  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  // 모두 통과했으면 소수이다.
  return true;
}

function solution(n, k) {
  var answer = -1;

  const strArr = parseInt(n, 10).toString(k).split("0");

  const numArr = strArr.map((str) => (str === "" ? 1 : Number(str)));

  let count = 0;

  numArr.forEach((num) => {
    count = isPrime(num) ? count + 1 : count;
  });

  answer = count;
  return answer;
}
