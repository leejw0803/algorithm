function solution(priorities, location) {
    /* 문제분석
     * 프린터는 인쇄 요청이 들어온 순서대로 인쇄
     * 중요 문서를 먼저 인쇄하는 프린터를 개발
     * 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
     * 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
     * 3. 그렇지 않으면 J를 인쇄합니다.
     * 앞에 있는 것 부터 꺼내서 순서를 매기자
     * 맨 앞에서 하나를 뺀다.
     * 배열을 돌면서 중요도 체크를 한다.
     * 중요도가 높은 게 있다면, 다시 넣는다.
     * 중요도가 높은 게 없다면, 인쇄 순서에 넣는다.
     */
    
    let printList = [];
    
    const pr = priorities.reduce((acc, cur, i) => {
        acc[i] = [i , cur];
        
        return acc;
    }, []);
    
    while(pr){
        const compare = pr.shift();
        for(let i = 0; i < pr.length; i++){
            if(compare[1] < pr[i][1]){
                pr.push(compare);
                break;
            }
        }
        // console.log("while문 안입니다.");
        printList.push(compare);
    }
    console.log(pr);
    console.log(printList);
}