let number = [0, 0];

function solution(arr) {
  // 쿼드 압축 후 개수 세기
  // 쿼드 트리오ㅓㅏ 같은 방식으로 압축하고자 한다.
  // 특정 영역을 s라고 정의
  // s 내부에 있는 모든 수가 같은 값이라면 해당 수를 하나로 압축 그 수로
  // 그렇지 않다면 4개의 균일한 정사각형 영역으로 쪼갠 뒤 정사각형 영역에 대해 같은 방식의 압축
  // 매개변수로 주어지는 arr, 압축했을 때 배열에 최종적으로 남는 0의 개수와 1의 개수를 배열에 담아서 return

  // 영역을 지정하고 그 내부의 수가 모두 같은지를 확인
  // 1. 처음엔 length를 다 돌면서 첫 수를 저장, 첫 수와 모두 같은지 확인
  // 2. 다르다면 등분한다.
  // 3. 등분 후에 각각의 사각형에 대해서 반복
  // 4. 재귀로 풀 수 있으나 재귀로 가게 되면 너무 복잡해질 확률이 다분 하지만 일단 재귀로 풀어보자

  let answer = [0, 0];
  const length = arr.length;

  quadComp(arr, length, 0, 0);

  return answer;
}

function quadComp(arr, length, rowStart, colStart) {
  let quad = length;
  const first = arr[rowStart][colStart];

  if (quad === 1) {
    number[first]++;
    return;
  }

  console.log(number);
  for (let i = rowStart; i < rowStart + quad; i++) {
    for (let j = colStart; j < colStart + quad; j++) {
      if (first !== arr[i][j]) {
        quadComp(arr, quad / 2, 0, 0);
        quadComp(arr, quad / 2, quad / 2 - 1, 0);
        quadComp(arr, quad / 2, 0, quad / 2 - 1);
        quadComp(arr, quad / 2, quad / 2 - 1, quad / 2 - 1);
      }
    }
  }
}
