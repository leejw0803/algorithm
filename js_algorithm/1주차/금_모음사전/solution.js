/*
    모음사전에서 몇 번째 단어인지 리턴하기
    A
        AA
            AAA
                AAAA
                    AAAAA
                    AAAAE
                    AAAAI
                    AAAAO
                    AAAAU
                AAAE
                    AAAEA
                    AAAEE
                    AAAEI
                    AAAEO
                    AAAEU
                AAAI ...
    
    root노드 하나에
    상위노드부터 5개씩 달려있는 트리구조에서
    깊이 우선 탐색입니다.
    
    상위노드 한 뭉치에 1 + 5 + 25 + 125 + 625 = 781;
    두뭉치면 1562
    
    첫 번째 뭉치는 781차이
    두 번째 뭉치는 156차이
    세 번째 뭉치는 31차이
    네 번째 뭉치는 6차이
    다섯 번째 뭉치는 1차이
    
    AAAAE -> 1+0 + 1+0 + 1+0 + 1+0 + 1+1 = 6
    AAAE -> 1+0 + 1+0 + 1+0 + 1+6 = 10
    I -> 1+781+781 = 1563
    EIO -> 1+781 + 1+156+156 + 1+31+31+31 = 1189
    
 */

function solution(word) {
  var answer = 0;

  const counts = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };

  const dump = [781, 156, 31, 6, 1];

  const wordArr = word.split("");

  wordArr.forEach((char, idx) => {
    answer += 1 + counts[char] * dump[idx];
  });

  return answer;
}
