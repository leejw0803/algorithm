let boom = [];

function solution(m, n, board) {
  var answer = 0;

  board = board.map((item) => {
    return item.split("");
  });

  while (true) {
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        check(i, j, board);
      }
    }

    boom.forEach((item) => {
      board[item[0]].splice(item[1], 1, "x");
    });

    boom = [];

    for (let col = 0; col < n; col++) {
      for (let row = 0; row < m; row++) {
        if (board[row][col] === "x") {
          down(row, col, board);
        }
      }
    }

    if (!possable(board)) break;
  }

  for (let row of board) {
    for (let item of row) {
      if (item === "x") answer++;
    }
  }

  return answer;
}

function possable(board) {
  let isPossable = false;

  for (let i = 0; i < board.length - 1; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      if (
        board[i][j] === board[i + 1][j + 1] &&
        board[i][j] === board[i + 1][j] &&
        board[i][j] === board[i][j + 1] &&
        board[i][j] != "x"
      ) {
        isPossable = true;
      }
    }
  }
  return isPossable;
}

function check(i, j, board) {
  if (i < board.length - 1 && j < board[i].length - 1) {
    if (
      board[i][j] === board[i + 1][j + 1] &&
      board[i][j] === board[i + 1][j] &&
      board[i][j] === board[i][j + 1] &&
      board[i][j] != "x"
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
  return;
}

function down(row, col, board) {
  let col2row = [];
  for (let i = 0; i < board.length; i++) {
    col2row.push(board[i][col]);
  }

  col2row.splice(row, 1);
  col2row.unshift("x");

  col2row.forEach((item, idx) => {
    board[idx][col] = item;
  });

  col2row = [];
}
