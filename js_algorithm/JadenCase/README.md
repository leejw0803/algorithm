# 문제 설명

- JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

# 문제 분석

- 모든 문자의 첫 문자가 대문자이고 그 외의 알파벳은 소문자
- 먼저 모든 문자를 소문자로 만든 다음
- 띄어쓰기 다음문자인 경우가 숫자가 아닌 경우만 체크해서 대문자로 바꿔준다.

# toUpperCase, toLowerCase

- str.toUpperCase() 와 같이 사용
- 사용 시 str이 바뀌는 것이 아니라 바뀐 값을 반환하는 형대 => 어딘가에 할당해서 사용해주어야 한다.