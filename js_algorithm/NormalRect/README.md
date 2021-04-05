# 문제 분석
- 직각삼각형 안에 얼마나 많은 1*1짜리 정사각형이 들어가느냐 하는 문제
- 비율로 해결 가능할 듯 하다
- 가로가 8 세로가 12
- 8:12 = 2:3
- 2/3 = 2, 2/4 = 2 2/5 = 3
- 분모를 분자로 나눈 다음 올림
- 처음부터 요약하자면 긴 변이 세로가 되도록 한다.

let answer = 1;

const LONG = w > h ? w : h;
const SHORT = w > h ? h : w;

if(SHORT){
    answer = (LONG - Math.ceil(LONG / SHORT)) * SHORT;
    console.log(Math.ceil(LONG / SHORT));
}else{
    answer = 0;
}


return answer;

 - 실패 이유 => 다음과 같은 코드는 모두 동일한 길이 만큼의 블럭이 빠진다고 가정 
 - 그러나 동일한 길이 만큼 빠지지 않고 맨 앞과 맨 뒤 블럭이 한개씩 모자르게 빠질 때가 있음
 
 # 문제 재 분석
 - 최대 공약수를 n이라고 하면 결국 사라지는 블럭의 수는 
 - (w/n * h/n) 에서 빠지는 블럭의 갯수가 w/n * 1/w => n개 
 - === (빠지는 갯수) * n : 빠지는 갯수 (w/n + h/n - 1)
 - 따라서 (w/n + h/n -1) * n 을 전체 갯수에서 뺀 것이 답이다.
 
 # 최대공약수 gcd
const gcd = (min, max) => {
    return min%max===0 ? max : gcd(max, min%max);
}
- 알고리즘 이유를 다시 알아보는 것이 좋을 듯 하다.
