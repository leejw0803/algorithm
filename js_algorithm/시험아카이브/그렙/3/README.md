문제 설명
다음과 같은 규칙의 퍼즐 게임을 하려 합니다.

1. 카드 N x N장이 N행 N열 형태로 정렬되어 탁자 위에 놓여있습니다.
2. 각 카드에는 알파벳이 하나씩 적혀 있습니다.
3. 단어 하나가 주어질 때, 카드를 적절히 선택해 해당 단어를 만드는 것이 게임의 목표입니다. 3-1. 카드를 선택할 때 같은 행, 같은 열에 있는 카드는 최대 한 장만 고를 수 있습니다.
   단어 word와 카드가 놓인 형태를 나타내는 문자열 배열 cards가 매개변수로 주어질 때, 단어를 만들 수 있도록 카드를 선택하는 방법의 개수를 return 하도록 solution 함수를 완성해주세요. 만약, 단어를 만드는 방법이 없다면 0을 return 해주세요.
   제한사항

- word의 길이는 1 이상 8 이하입니다.
  - word는 알파벳 대문자로만 이루어져 있습니다.
- cards의 길이는 4 이상 8 이하입니다.
  - cards의 원소는 각 행 별로 카드에 적힌 알파벳을 나타내는 문자열입니다.
  - 각 문자열의 길이는 cards 배열의 길이(문자열 개수)와 같습니다.
  - 모든 문자열은 알파벳 대문자로만 이루어져 있습니다.

입출력 예
word cards result
"APPLE" ["LLZKE", "LCXEA","CVPPS","EAVSR","FXPFP"] 3
"BAB" ["ZZBZ", "BAZB","XBXB","XBAX"] 4
"BABXZ" ["ZZBZ", "BAZB","XBXB","XBAX"] 0
입출력 예 설명
입출력 예 #1
입력으로 주어진 카드는 아래 그림과 같으며, 규칙에 맞게 카드를 선택해 "APPLE"을 만드는 방법은 3가지입니다.
￼
다음과 같은 방법은 같은 행 또는 열에서 두 장 이상 카드를 선택했으므로 불가능한 방법입니다.
￼
입출력 예 #2
입력으로 주어진 카드는 아래 그림과 같으며, 규칙에 맞게 카드를 선택해 "BAB"를 만드는 방법은 4가지입니다.
￼
입출력 예 #3
규칙에 맞게 카드를 선택하는 방법은 없습니다.
