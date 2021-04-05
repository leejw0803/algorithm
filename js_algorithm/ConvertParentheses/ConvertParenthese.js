function solution(p) {
    let answer = '';
    
    let arr = p.split('');
    let answerList = [];
    
    answerList = processing(arr);
    
    while(answerList.length > 0){
        answer = answer.concat(answerList.shift());
    }
    
    return answer;
}

function processing(arr){
    const result = [];
    const [u, v] = divide(arr);
    
    let tempArr = [];
    if(v.length) tempArr = processing(v);
    
    if(check(u)){
        return u.concat(tempArr);
    }else {
        tempArr.unshift('(');
        tempArr.push(')');
        u.shift();
        u.pop();
        const opposite = [];
        for(let i=0; i<u.length; i++){
            opposite.push(u[i] === ')' ? '(' : ')');
        }
        return tempArr.concat(opposite);
    }
    
}

function divide(arr){
    const first = [];
    const left = [];
    const right = [];
    
    while(arr.length > 0) {
        const cur = arr.shift();
        first.push(cur);
        cur === "(" ? left.push(cur) : right.push(cur);
        if(left.length === right.length){
            break;
        }
    }
    
    return [first, arr];
}

function check(arr){
    let left = 0;
    let result = true;
    for(let item of arr) {
        item === "(" ? left++ : left--;
        if(left < 0){
            result = false;
            break;
        }
    }
    return result;
}