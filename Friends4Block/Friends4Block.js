// 프렌즈 4블록

// 신규 게임개발업무
// 2 2 형태로 4개가 붙어있을 경우 사라지면서 점수를 얻는 게임
// 같은 블록은 여러 22에 포함 가능하며 한번에 지워짐

// 입력으로 첫 배치가 주어졌을 때 지워지는 블록은 모두 몇 개인지 판단하는 프로그램

// 1. 2 2 가 있는지를 확인
// 2. 그 2 2 에 붙어있는 2 2가 있는지 연달아 확인
// 3. 없을 때까지 확인한 뒤에 인덱스를 전부 저장
// 4. 해당 인덱스 전부 제거
// 5. 더 이상 2 2가 없을 때까지 1-4를 반복

const boom = [];

function solution(m, n, board) {
  var answer = 0;

  board = board.map((item) => {
    return item.split("");
  });

  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      check(i, j, board);
    }
  }
  console.log(board);
  boom.forEach((item) => {
    board[item[0]].splice(item[1], 1, "O");
  });

  console.log(board);

  fo;

  console.log(board);
  return answer;
}

function check(i, j, board) {
  if (
    board[i][j] === board[i + 1][j + 1] &&
    board[i][j] === board[i + 1][j] &&
    board[i][j] === board[i][j + 1]
  ) {
    boom.push([i, j]);
    boom.push([i + 1, j]);
    boom.push([i, j + 1]);
    boom.push([i + 1, j + 1]);
    check(i + 1, j + 1, board);
    check(i + 1, j, board);
    check(i, j + 1, board);
  } else {
    return;
  }
}
