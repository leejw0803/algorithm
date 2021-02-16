function solution(board, moves) {
    let answer = 0;
    
    const movedArr = [];
    
    for(const pos of moves){
        for(let item of board){
            if(item[pos-1]) {
                movedArr.push(item[pos-1]);
                if(movedArr.length >= 2){
                    if(movedArr[movedArr.length-2] === movedArr[movedArr.length-1]){
                        movedArr.pop();
                        movedArr.pop();
                        answer += 2;
                    }
                }
                
                item[pos-1] = 0;
                break;
            }
        }
    }
    
    return answer;
}



