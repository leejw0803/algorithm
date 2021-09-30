# <a href="https://programmers.co.kr/learn/courses/30/lessons/84325"> 직업군 추천하기 </a>

# 문제 설명

개발자가 사용하는 언어와 언어 선호도를 입력하면 그에 맞는 직업군을 추천해주는 알고리즘을 개발하려고 합니다. <br />

아래 표는 5개 직업군 별로 많이 사용하는 5개 언어에 직업군 언어 점수를 부여한 표입니다.<br />

| 점수 | SI         | CONTENTS   | HARDWARE   | PORTAL     | GAME       |
| ---- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 5    | JAVA       | JAVASCRIPT | C          | JAVA       | C++        |
| 4    | JAVASCRIPT | JAVA       | C++        | JAVASCRIPT | C#         |
| 3    | SQL        | PYTHON     | PYTHON     | PYTHON     | JAVASCRIPT |
| 2    | PYTHON     | SQL        | JAVA       | KOTLIN     | C          |
| 1    | C#         | C++        | JAVASCRIPT | PHP        | JAVA       |

<br />
예를 들면, SQL의 SI 직업군 언어 점수는 3점이지만 CONTENTS 직업군 언어 점수는 2점입니다. SQL의 HARDWARE, PORTAL, GAME 직업군 언어 점수는 0점입니다.
<br /><br />

직업군 언어 점수를 정리한 문자열 배열 table, <br />
개발자가 사용하는 언어를 담은 문자열 배열 languages,<br />
언어 선호도를 담은 정수 배열 preference가 매개변수로 주어집니다.<br /><br />

개발자가 사용하는 언어의 언어 선호도 x 직업군 언어 점수의 총합이 가장 높은 직업군을 return 하도록 solution 함수를 완성해주세요. <br />
총합이 같은 직업군이 여러 개일 경우, 이름이 사전 순으로 가장 빠른 직업군을 return 해주세요.

## 제한사항

- table의 길이 = 5
  - table의 원소는 "직업군 5점언어 4점언어 3점언어 2점언어 1점언어"형식의 문자열입니다. 직업군, 5점언어, 4언어, 3점언어, 2점언어, 1점언어는 하나의 공백으로 구분되어 있습니다.
  - table은 모든 테스트케이스에서 동일합니다.
- 1 ≤ languages의 길이 ≤ 9
  - languages의 원소는 "JAVA", "JAVASCRIPT", "C", "C++" ,"C#" , "SQL", "PYTHON", "KOTLIN", "PHP" 중 한 개 이상으로 이루어져 있습니다.
  - languages의 원소는 중복되지 않습니다.
- preference의 길이 = languages의 길이
  - 1 ≤ preference의 원소 ≤ 10
- preference의 i번째 원소는 languages의 i번째 원소의 언어 선호도입니다.
- return 할 문자열은 "SI", "CONTENTS", "HARDWARE", "PORTAL", "GAME" 중 하나입니다.
  <br/><br/>

## 입출력 예

| table                                                                                                                                                                                                 | languages                | preference | result     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------- | ---------- |
| ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"] | ["PYTHON", "C++", "SQL"] | [7, 5, 5]  | "HARDWARE" |
| ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"] | ["JAVA", "JAVASCRIPT"]   | [7, 5]     | "PORTAL"   |

### 입출력 예 설명

<b>입출력 예 #1</b> <br />

각 직업군 별로 점수를 계산해보면 아래와 같습니다.<br />
아래 사진은 개발자 언어 선호도 나타낸 표입니다.<br />
![tc1_preference](https://user-images.githubusercontent.com/55906697/133591142-40b0ec63-1bf0-4626-91c6-d7a050eda869.png)

<br/><br/>
아래 사진은 개발자가 선호하는 언어의 직업군 언어 점수를 나타낸 표입니다.<br />
![tc1_score](https://user-images.githubusercontent.com/55906697/133591151-b248d489-57db-481a-8cba-c57026f6800d.png)

<br/><br/>
따라서 점수 총합이 41로 가장 높은 "HARDWARE"를 return 해야 합니다.<br/><br/>

<b>입출력 예 #2</b><br/>

각 직업군 별로 점수를 계산해보면 아래와 같습니다.<br/>
아래 사진은 개발자 언어 선호도 나타낸 표입니다.<br/>

![tc2_preference](https://user-images.githubusercontent.com/55906697/133591174-2fcf2a71-a9ea-40b2-91bd-1cfb25b21d17.png)

<br/><br/>
아래 사진은 개발자가 선호하는 언어의 직업군 언어 점수를 나타낸 표입니다.<br/>

![tc2_score](https://user-images.githubusercontent.com/55906697/133591207-fbe2cb24-491f-4813-b3c1-07bc6f2e6bff.png)

<br/><br/>
점수 총합이 55로 가장 높은 직업군은 "SI" 와 "PORTAL"입니다.<br/>
따라서 사전 순으로 먼저 오는 "PORTAL"을 return 해야 합니다.<br/>
