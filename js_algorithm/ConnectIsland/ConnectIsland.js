// n개의 섬 사이에 다리를 건설하는 비용이 주어짐
// 모든 섬이 서로 통행 가능하도록 하는 최소 비용을 리턴

// 다리를 여러번 건너더라도 도달할 수만 있으면 통행 가능하다고 봄

// 섬의 개수는 1과 100 사이
// costs [다리, 다리, 비용]

// 같은 연결은 두 번 주어지지 않음
// 순서가 바뀌어도 같은 연결로 본다
// 모든 섬 사이 다리 건설 비용이 주어지지 않는다 -> 두 섬 사이의 건설이 불가능으로 봄
// 연결할 수 없는 섬은 없다.

// 1. 모든 섬이 통행가능하도록 하는 것이 관건 => 다른 말로 하면 모든 섬이 이어져 있다. 갈 수 있다.
// 2. 연결이 이루어지기만 하면 된다. 하나도 빠지지 않고 이어져 있기만 하면 됨.
// 3. 다리는 cost가 가장 작은 게 연결되면 된다.

// 위의 정보들을 토대로 해결책을 강구해보자
// 일단 주어진 배열을 가공한다.
// 일단 가격 순으로 오름차순 정렬 -> 싼 것부터 채워짐
// 0-1 1 0-2 2 1-2 5 1-3 1 2-3 8
// 0-1 1, 1-3 1, 0-2 2, 1-2 5, 2-3 8

// 가격이 싼 순으로 정렬후에 가장 싼 놈 a을 채택
// a의 출발지와 도착지를 배열 arr에 담는다.
// a의 출발지나 도착지부터 시작하는 놈들을 뽑음
// 그 중에서 a을 제외하고 가장 싼 녀석을 찾음
// 이걸 반복

// arr에 n개가 담기면 끝

function solution(n, costs) {
  var answer = 0;

  // console.log(costs);
  let arr = [];
  while (true) {
    costs.sort((a, b) => a[2] - b[2]);
    console.log(costs);

    const a = costs[0];
    arr.push(a[0]);
    arr.push(a[1]);
    answer += a[2];
    console.log(answer);
    arr = arr.filter((item, index) => arr.indexOf(item) === index);
    if (arr.length === n) break;
    console.log(arr);

    costs = costs.filter((item) => {
      return (
        (arr.indexOf(item[0]) != -1 || arr.indexOf(item[1]) != -1) && item != a
      );
    });
    // console.log(costs);
  }

  // console.log(arr);
  return answer;
}
