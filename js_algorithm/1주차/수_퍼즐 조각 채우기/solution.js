/*
    딱 맞도록 채워 넣어야 한다.
    game_board의 0이나오는 패턴이 table의 1이 나오는 패턴과 같아야지만 채울 수 있다.
    단, 회전해서 같은 것도 같은 것으로 체크
    0을 만났을 때, 오른쪽이나 아래가 0이면 같은 뭉치, 이건 BFS
 */

function getPuzzle(row, col, plate, find) {
  const result = [[row, col]];
  const path = [[row, col]];
  let board = plate;
  board[row][col] = -1;

  while (result.length > 0) {
    const [curRow, curCol] = result.shift();

    if (board[curRow + 1] !== undefined && board[curRow + 1][curCol] === find) {
      board[curRow + 1][curCol] = -1;
      result.push([curRow + 1, curCol]);
      path.push([curRow + 1, curCol]);
    }

    if (
      board[curRow][curCol + 1] !== undefined &&
      board[curRow][curCol + 1] === find
    ) {
      board[curRow][curCol + 1] = -1;
      result.push([curRow, curCol + 1]);
      path.push([curRow, curCol + 1]);
    }

    if (board[curRow - 1] !== undefined && board[curRow - 1][curCol] === find) {
      board[curRow - 1][curCol] = -1;
      result.push([curRow - 1, curCol]);
      path.push([curRow - 1, curCol]);
    }

    if (
      board[curRow][curCol - 1] !== undefined &&
      board[curRow][curCol - 1] === find
    ) {
      board[curRow][curCol - 1] = -1;
      result.push([curRow, curCol - 1]);
      path.push([curRow, curCol - 1]);
    }
  }

  path.sort((a, b) => {
    return a[0] - b[0];
  });

  const minRow = path[0][0];
  const maxRow = path[path.length - 1][0];

  path.sort((a, b) => {
    return a[1] - b[1];
  });

  const minCol = path[0][1];
  const maxCol = path[path.length - 1][1];

  const newPath = path.map((item) => [item[0] - minRow, item[1] - minCol]);

  newPath.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  // console.log(path)

  path.forEach;

  return newPath;
}

function compare(boardPaths, path2, visitArr) {
  let count = 0;
  let visited = false;

  for (let order = 0; order < boardPaths.length; order++) {
    const path1 = boardPaths[order];

    // console.log("path1", path1)
    // console.log("원래 path2", path2)
    if (path1.length !== path2.length) {
      continue;
    }

    if (path1.length <= 2) {
      count = visitArr[order] ? 0 : path1.length;
      visitArr[order] = 1;
      break;
    }

    for (let i = 0; i < 4; i++) {
      let isRotate = false;
      const size = path1.length > 3 ? 3 : 2;

      for (let i = 0; i < path1.length; i++) {
        if (path1[i][0] !== path2[i][0] || path1[i][1] !== path2[i][1]) {
          isRotate = true;
          break;
        }
      }

      if (isRotate) {
        for (let i = 0; i < path2.length; i++) {
          let [row, col] = path2[i];

          const newRow = col;
          const newCol = size - row - 1;

          path2[i][0] = newRow;
          path2[i][1] = newCol;
        }

        path2.sort((a, b) => {
          if (a[0] === b[0]) {
            return a[1] - b[1];
          }
          return a[0] - b[0];
        });
      } else {
        count = visitArr[order] ? 0 : path1.length;
        visitArr[order] = 1;
        visited = true;
        break;
      }
    }
    if (visited) break;
  }

  // console.log(visitArr)
  console.log(count);
  // console.log("===============================")

  return count;
}

function solution(game_board, table) {
  let answer = 0;

  const boardPaths = [];
  const tablePaths = [];
  const ROW = game_board.length;
  const COL = game_board[0].length;

  for (let row = 0; row < ROW; row++) {
    for (let col = 0; col < COL; col++) {
      if (game_board[row][col] === 0) {
        boardPaths.push(getPuzzle(row, col, game_board, 0));
      }
      if (table[row][col] === 1) {
        tablePaths.push(getPuzzle(row, col, table, 1));
      }
    }
  }

  console.log(boardPaths);
  console.log(tablePaths);

  let visitArr = new Array(boardPaths.length);
  visitArr.fill(0);

  tablePaths.forEach((path) => {
    // console.log(compare(boardPaths, path));
    answer += compare(boardPaths, path, visitArr);
  });

  return answer;
}
