// 프렌즈대학교 컴퓨터공학과 조교인 제이지
// 학생들의 인적사항을 정리하는 업무를 담당
// 학부 시절 프로그래밍 경험을 되살려 모든 인적사항을 데이터베이스에 넣기로 함
// 후보기에 대한 고민

// 유일성: 모든 튜플에 대해 유일하게 식별되어야 한다
// 최소성: 유일성을 가진 키를 구성하는 속성 중 하나라도 제외하는 경우 유일성이 깨지는 것을 의미

// 릴레이션을 나타내는 문자열 배열 relation이 매개변수로 주어질 때, 이 릴레이션에서 후보 키의 갯수를 리턴

// relation은 2차원 문자열 배열
// relation의 컬럼의 길이는 1이상 8 이하
// 컬럼은 릴레이션의 속성을 나타냄
// row는 1이상 20 이하 튜플을 나타냄
// 모든 문자열의 길이는 1이상 8이하 -> 알파벳 소문자와 숫자로만 이루어져 있다.
// 모든 튜플을 유일하게 식별 가능하다. -> 중복 튜플이 없다.

// 1. 속성 별로 정리했을 때, 중복이 없는 경우 단일로 후보키가 가능하다.
// 2. 중복이 없는 경우 조합해서는 후보키가 불가능하다.
// 3. 중복이 있는 경우 2개 이상의 조합으로 후보키가 가능하다.
// 4. 만약 2개로 후보키가 가능하다면 그 후보키에 새로운 속성이 들어가도 이는 최소성을 만족시키지 못한다.
// 5. 2개로 후보키가 가능한 경우 마찬가지로 다른 조합으로는 후보키가 불가능하다.

// 여러가지 방법이 있을 수 있을 것 같다.
// 1. 모든 조합의 경우를 정리한다.
// 2. 조합별로 중복이 있는 지를 확인한다.
// 3. 중복이 있는 모든 조합을 제거한다.
// 4. 최소성을 만족시키지 못하는 조합을 제거한다.

// 1. 1개짜리로 가능한 모든 후보키를 구한다.
// 2. 해당 후보키를 제거하고 2개짜리로 가능한 모든 후보키를 구한다.
// 3.

const final = [];

function solution(relation) {
  var answer = 0;

  // console.log(relation);

  const attrs = [];

  for (let col = 0; col < relation[0].length; col++) {
    const r = [];
    for (let row = 0; row < relation.length; row++) {
      r.push(relation[row][col]);
    }
    attrs.push(r);
  }

  // console.log(attrs);

  for (let i = 0; i < attrs.length; i++) {
    const compare = attrs[i].filter(
      (attr, index) => attrs[i].indexOf(attr) === index
    );
    if (attrs[i].length === compare.length) {
      answer++;
      attrs.splice(i, 1);
    }
  }

  // console.log(attrs);

  const combineAttrs = [];
  for (let i = 2; i <= attrs.length; i++) {
    // i개씩 뽑아서 정리한 속성을 combineAttrs에 넣는다.
    combination(attrs, [], attrs.length, i, 0);
    // console.log(final);
  }
  const strs = [];
  final.forEach((comb) => {
    const str = [];
    for (let i = 0; i < comb[0].length; i++) {
      const r = [];
      for (let j = 0; j < comb.length; j++) {
        r.push(comb[j][i]);
      }
      str.push(r.join("_"));
    }
    strs.push(str);
  });

  // console.log(strs);

  for (let i = 0; i < strs.length; i++) {
    const compare = strs[i].filter(
      (str, index) => strs[i].indexOf(str) === index
    );
    console.log(compare);
    console.log(strs[i]);
    if (strs[i].length === compare.length) {
      answer++;
    }
  }

  return answer;
}

function combination(source, target, n, r, count) {
  if (r === 0) final.push(target);
  else if (n === 0 || n < r) return;
  else {
    target.push(source[count]);
    combination(source, Object.assign([], target), n - 1, r - 1, count + 1);
    target.pop();
    combination(source, Object.assign([], target), n - 1, r, count + 1);
  }
}
