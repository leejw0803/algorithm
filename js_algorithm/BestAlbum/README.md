# 문제 분석
    
- 스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범
- 속한 노래가 많이 재생된 장르를 먼저 수록
- 장르 내에서 많이 재생된 노래를 먼저 수록
- 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록
- 장르 배열 genres, 재생 횟수 배열 plays,
- 노래의 고유번호를 순서대로 return
- genres[i]는 i번호인 노래의 장르, plays[i]는 i번호인 노래의 재생횟수, 장르에 속한 곡이 하나라면 하나의 곡만 선택
    
     1. 장르 별로 묶어서 총 재생횟수를 측정
     2. 높은 장르의 순으로 정렬
     3. 장르 내에서 재생횟수 순으로 정렬
     4. 만약 재생횟수가 같다면 i가 낮은 노래가 앞으로 오게
     
     
# 객체 안에 객체 값을 동적할당 하기

- <code>acc[cur][i] = blahblah;</code> <- 이런식으로 접근하면 됩니다.

# 객체 -> 배열

- 객체 내부의 값들을 정렬하기 위해서 객체를 배열로 변환하려면
- <code>const arr = Object.entries(obj);</code>
- 로 변환한다.

# 배열의 정렬

- 배열을 정렬하기 위해서는 <code>arr.sort()</code>함수를 사용하면 된다.
- 기본적으로는 작은 값이 앞으로 오도록 정렬된다.
- <code>arr.sort(function(a,b){ return a-b; })</code> 와 같은 방식으로 sorting함수를 지정해 줄 수 있다.


