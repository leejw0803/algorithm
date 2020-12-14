function solution(participant, completion) {
    var newList = completion.reduce((acc, c) => {
        acc[c] = (acc[c]) ? (acc[c] + 1) : 1;
        // 없으면 1로 넣어서 있다고 하고, 있으면 1씩 추가, 결과적으로 (cur : 갯수) 형태로 저장

        return acc;
    }, {});

    console.log(newList);

    return participant.find((c) => { //c는 find의 callback함수에서 element를 의미한다.
        if (newList[c]) { // participant를 순회하면서 newList[crr] 가 있다면 빼주고,
            newList[c] -= 1;
        } else { // 없다면 true를 반환
            return true;
        }
    });
}
