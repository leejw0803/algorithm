# 위장

## reduce를 사용해서 Object 형태로 받아오는 방법
### Object형태로 나오는 갯수를 세서 키(종류):값(갯수) 형태로 받아온다

let newObj = arr.reduce(acc, cur) => {
	acc[cur] = acc[cur] ? (acc[cur]+1) : 1;
}, {});

## Object의 다양한 함수
### Object.keys(target), Object.values(target), Object.entries(target) 

위와 같은 형식으로 키, 값, 혹은 키:값 형태의 배열로 받아와서 순회가 가능하다.

## combination 알고리즘 
### 참고링크 : https://kjwsx23.tistory.com/366

추가적인 이해가 필요합니다.


