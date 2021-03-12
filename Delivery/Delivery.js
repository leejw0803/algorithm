// N개의 마을로 이루어진 나라가 있다.
// 마을에는 1부터 n까지의 번호가 각각 하나씩 부여되어 있음
// 양방향으로 통행할 수 있는 도로로 연결
// 마을간 이동 시 도로를 지나야 함
// 도로를 지날 때 걸리는 시간은 도로별로 다르다.
// 1번 마을에 있는 음식점에서 각 마을로 음식 배달을 하려고 함
// N개의 마을 중 K시간 이하로 배달이 가능한 마을에서만 주문을 받음
// 몇 개의 마을로 배달이 가능한 지

// 두 마을을 연결하는 도로는 여러 개가 있을 수 있다.
// 한 도로의 정보가 여러 번 중복해서 주어지지는 않는다.

// 임의의 두 마을 간에는 항상 이동 가능한 경로가 존재하낟.
// 1번 마을에 있는 음식점이 K이하의 시간에 배달이 가능한 마을의 갯수를 return

// 중요한 건 1-N 이 K 안으로 이동이 가능한가
// 1. 1부터 출발한다는 게 중요하다.
// 2. 1부터 n까지 가는 경로는 무조건 존재한다.
// 3. 1부터 n까지 가는 경로들 중에 최단 거리들만 사용 가능.

// 처음부터 순회하면서 체크한다.
// 1. 1로 시작하는 것들을 가져온다.
// 3. 121 132 232-> 1232 -> 133
// 4. 1로 시작하지 않는 것들은 1로 시작하는 것으로 바꾼다.
//     121 : 2로 시작하는 것을 찾아서 232
//         두 번째 것은 냅둔다. 첫 번째 것은 1로 바꾼다, 세 번째 것은 앞 뒤를 모두 더한다 -> 133

//     133, 132 : 3으로 시작하는 것을 찾아서 343 352 353
//         두 번째 것은 냅둔다. 첫 번째 것은 1로 바꾼다. 세 번째 것은 앞 뒤를 모두 더한다 -> 145

// 첫번째 두번째 세번째 요소 순으로 중요도를 둬서 오름차순으로 정렬

// 첫번째가 1 두번째 요소가 같은 것들 중 세번째 요소가 가장 작은 것만 남김
// 첫번째 요소가 2인 것에 대해서 위와 같은 전략을 적용 12x : 232 => 132+x

// 첫번째가 1 두번째 요소가 같은 것들 중 세번째 요소가 가장 작은 것만 남김
// 첫번째 요소가 3인 것에 대해서 적용
// ...
// 첫번째 요소가 N인 것에 대해서 적용

function solution(N, road, K) {
  var answer = 0;

  let n = 2;

  road.forEach((item) => {
    if (item[0] > item[1]) {
      const temp = item[0];
      item[0] = item[1];
      item[1] = temp;
    }
  });

  while (n <= N) {
    road.sort((a, b) => {
      if (a[0] === b[0]) {
        if (a[1] === b[1]) {
          return a[2] - b[2];
        }
        return a[1] - b[1];
      }
      return a[0] - b[0];
    });
    let oneStartRoad = road.filter((item) => item[0] === 1);
    let rest = road.filter((item) => item[0] != 1);

    let index = -1;
    for (let i = 0; i < oneStartRoad.length; i++) {
      if (oneStartRoad[i][1] === n) {
        index = i;
        break;
      }
    }
    if (index != -1) {
      rest.forEach((item) => {
        if (item[0] === n) {
          item[0] = 1;
          item[2] = item[2] + oneStartRoad[index][2];
        }
      });
    }

    n++;
  }

  for (let i = 0; i <= road.length - 2; i++) {
    if (road[i][1] === road[i + 1][1]) {
      road.splice(i + 1, 1);
      i--;
    }
  }

  road.forEach((item) => {
    if (item[2] <= K) answer++;
  });
  answer++;

  return answer;
}
