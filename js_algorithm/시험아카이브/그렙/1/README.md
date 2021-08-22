# 문제 설명

배달 앱을 이용하려면 유저는 로그인 → 장바구니에 음식 담기 → 주문 과 같은 순서를 거칩니다. 이때 서버는 다음과 같은 일을 합니다.

1. 로그인: "LOGIN 아이디 비밀번호"
   - 이미 로그인했다면 거부
   - 아이디와 비밀번호가 유효하면 로그인을 허용
   - 아이디와 비밀번호가 유효하지 않으면(아이디가 없거나 비밀번호가 다른 경우) 로그인을 거부
2. 장바구니에 음식 담기: "ADD 음식아이디"
   - 로그인한 유저라면 허용
   - 로그인하지 않았으면 거부
3. 주문하기: "ORDER"
   - 장바구니에 담은 음식이 있으면 허용하고 주문 후에는 장바구니를 비움
   - 장바구니에 담은 음식이 없으면 거부
     서버에 저장된 유저 정보 infos와 한 사람의 행동을 담은 배열 actions가 매개변수로 주어질 때, 각 행동이 허용되었으면 true, 거부되었으면 false를 담아 return 하도록 solution 함수를 완성해주세요.

## 제한 사항

- infos의 길이는 1 이상 10 이하입니다.
- infos의 원소는 "아이디 비밀번호" 형태입니다.
- infos에 같은 아이디가 중복해 주어지는 경우는 없습니다.
- actions의 길이는 1 이상 100 이하입니다.
- actions의 원소는 다음 형태 중 하나입니다.
  - "LOGIN 아이디 비밀번호"
  - "ADD 음식아이디"
  - "ORDER"
- infos와 actions 배열에서 주어지는 아이디와 비밀번호는 영문 소문자로만 이루어져 있습니다.
- actions 배열에서 주어지는 음식아이디는 숫자로만 주어집니다.

## 입출력 예

### 입력 #1

infos = ["kim password", "lee abc"]
actions = [
"ADD 30",
"LOGIN kim abc",
"LOGIN lee password",
"LOGIN kim password",
"LOGIN kim password",
"LOGIN lee abc",
"ADD 30",
"ORDER",
"ORDER",
"ADD 40",
"ADD 50"
]

### 출력 #1(리턴 값)

[false, false, false, true, false, false, true, true, false, true, true]

### 설명 #1

행동 결과 설명
ADD 30 거부 로그인하지 않았으므로 장바구니에 음식을 담을 수 없습니다.
LOGIN kim abc 거부 아이디가 kim인 유저가 있지만, 비밀번호가 다르므로 로그인할 수 없습니다.
LOGIN lee password 거부 아이디가 lee인 유저가 있지만, 비밀번호가 다르므로 로그인할 수 없습니다.
LOGIN kim password 허용 아이디와 비밀번호가 일치하므로 로그인할 수 있습니다.
LOGIN kim password 거부 이미 kim 유저로 로그인했으므로 거부합니다.
LOGIN lee abc 거부 이미 kim 유저로 로그인했으므로 거부합니다.
ADD 30 허용 로그인 한 유저이므로 장바구니에 음식을 담을 수 있습니다.
ORDER 허용 장바구니에 담은 음식이 있으므로 주문할 수 있습니다. 장바구니를 비웁니다.
ORDER 거부 장바구니에 담은 음식이 없으므로 주문할 수 없습니다.
ADD 40 허용 로그인 한 유저이므로 장바구니에 음식을 담을 수 있습니다.
ADD 50 허용 로그인 한 유저이므로 장바구니에 음식을 담을 수 있습니다.
따라서 [false, false, false, true, false, false, true, true, false, true, true]를 리턴합니다.

### 입력 #2

infos = ["kim password", "lee abc"]
actions = [
"LOGIN lee abc",
"LOGIN kim password"
]

### 출력 #2(리턴 값)

[true, false]

### 설명 #2

행동 결과 설명
LOGIN lee abc 허용 아이디와 비밀번호가 일치하므로 로그인할 수 있습니다.
LOGIN kim password 거부 이미 lee 계정으로 로그인했으므로 거부합니다.
따라서 [true, false]를 리턴합니다.
