/*
    스킬을 맞은 곳은 내구도가 깎이거나 증가한다.
        type = 1일 경우 degree만큼 내구도가 깎인다.
        type = 2일 경우 degree만큼 내구도가 올라간다.
        
        
    1. skill을 돌면서 정리한다.
        1. 기존 board 배열과 동일한 크기의 배열을 만든다.
        
        ex) 입출력 예 1
        1 (0, 0) (3, 4) 4
        1 (2, 0) (2, 3) 2
        2 (1, 0) (3, 1) 2
        1 (0, 1) (3, 3) 1
 */

function solution(board, skill) {
  var answer = 0;
  let arr = Array.from(Array(board.length), () =>
    Array(board[0].length).fill(0)
  );

  skill.forEach((item) => {
    const [type, r1, c1, r2, c2, degree] = item;

    const amount = type === 1 ? -degree : degree;

    for (let i = r1; i <= r2; i++) {
      for (let j = c1; j <= c2; j++) {
        arr[i][j] += amount;
      }
    }
  });

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] + arr[i][j] > 0) answer++;
    }
  }

  return answer;
}
