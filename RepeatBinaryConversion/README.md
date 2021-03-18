# 문제 설명

- 0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.

# 문제 분석

- x의 모든 0을 제거
- x의 길이를 c라고 하면
- x를 c를 2진법으로 표현한 문자열로 바꾼다.
- ex) 0111010 -> 1111 / c=4 -> 100
- 그래서 1이 될 때까지 계속해서 s에 이진변환을 가했을 때, 변환 횟수와 제거된 0
  > 1. s에서 0을 제거합니다.
  >    s.split(''); for 문돌면서 0제거 후 join -> removeZero 반환 값은 제거된 0의 갯수와 문자열
  > 2. s의 길이를 2진수로 표현 = s.length / dec.toString(2);
  > 3. 두개를 반복하면 될듯

# join() 에 대해서

- arr.join('') 와 같이 내부에 ''를 넣어줘야 붙여서 반환한다.

# split() 에 대해서

- str.split('') 로 진행하면 arr에 들어간 요소들은 전부 문자열이다 -> 즉 비교시에 1이 아닌 '1'로 비교해야 한다.