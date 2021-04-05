function solution(priorities, location) {
    /*
     * 후에 비교를 편하게 하기 위해서 
     * locPrList = [[location, priority], [location, priority], .... ] 의 형태로 저장한다.
     */
    const locPrList = priorities.reduce((acc, cur, i) => {
        acc[i] = [i , cur];
        
        return acc;
    }, []);
    
    /*
     * 각 locPrList 의 원소들을 프린팅 순서대로 나열하여 push할 배열 order와 최종 답안 answer를 define.
     */
    const order = [];
    let answer = 0;
    
    /*
     * while 문을 돌면서 locPrList의 원소를 하나씩 빼서 비교 후, 
     * 우선순위가 낮으면 locPrList에 넣고
     * 우선순위가 높으면 order에 push한다.
     * 결과적으로 locPrList의 원소를 전부 빼내면 order에 순서대로 담긴다.
     */
    while(locPrList.length > 0){
        getOrder(locPrList, order);
    }
    
    /*
     * order의 원소의 location 정보와 주어진 location을 비교하여 답을 구한다.
     * 마지막으로 index에 1을 더해야 answer번째를 정확히 구할 수 있다.
     */
    for(let i = 0; i < order.length; i++){
        if(order[i][0] === location){
            answer = i+1;
        }
    }
    
    return answer;
    
    
}

function getOrder(locPrList, order){
    const leng = locPrList.length;
    const compare = locPrList.shift();
    
    /* 우선순위가 낮으면 locPrList에 push한다. */
    for(let i = 0; i < locPrList.length; i++){
        if(compare[1] < locPrList[i][1]){
            locPrList.push(compare);
            break;
        }
    }
    
    /* push하지 않고 끝났다면, 우선순위가 높다는 의미와 동시에 locPrList의 길이가 줄어들게 되므로 길이를 비교하여 order에 push */
    if(leng > locPrList.length){
        order.push(compare);
    }
}