const final = [];

function solution(clothes) {
//     문제 분석
//     스파이들은 매일 다른 옷을 조합하여 자신을 위장
//     clothes의 각 행은 [의상의 이름, 의상의 종류]
//     의상 수는 1개부터 30개
//     같은 이름의 의상은 없다
//     문자열
    
//     의상의 종류 중에서 골라서 의상의 이름을 뽑는다.
    
//     일단 하나씩 입는 경우 - 배열의 행의 수
//     n종류의 의상이 있을 때 종류별로 조합하는 경우 - 종류별로 모아서 종류가 2개일 때부터 종류가 n개일 때까지
//     헤시 배열 있다고 가정 [headgear : 2, eyewear : 3, top : 5]
//     2*3 + 3*5 + 2*5 + 2*3*5
    
//     1. 하나씩 입는 경우 -> 배열 행의 수를 구해서 정함
//     2. 의상별로 조합하는 경우 -> 해시로 변환한 다음 해시중에 2개부터 n개까지 뽑아서 곱하기
    
    // 1 . 하나씩 입는 경우의 수 
    const oneCloth = clothes.length;
    // console.log(oneCloth);
    
    // 2 . 여러개를 조합하여 입는 경우의 수
    let clothesList = clothes.reduce((acc, cur) => {
        acc[cur[1]] = (acc[cur[1]]) ? (acc[cur[1]] + 1) : 1;
        // 없으면 1로 넣어서 있다고 하고, 있으면 1씩 추가, 결과적으로 (cur : 갯수) 형태로 저장

        return acc;
    }, {});
    
    let kindOfClothes = Object.values(clothesList); // [ 2, 1 ]  
    const n = kindOfClothes.length;

    for(let i = 1; i <= n; i++){
        combination(kindOfClothes, [], n, i, 0);
    }
    
    // console.log(final);
    
    let answer = final.reduce((acc, cur) => {
        let a = 1;
        for(let i = 0; i < cur.length; i++){
            a *= cur[i];
        }
        acc += a;
        
        return acc;
    }, 0);
    
    return answer;
}

function combination(source, target, n, r, count) { 
    if(r === 0)final.push(target); 
    else if(n === 0 || n < r) return; 
    else { 
        target.push(source[count]); 
        combination(source, Object.assign([], target), n - 1, r - 1, count + 1); 
        target.pop(); 
        combination(source, Object.assign([], target), n - 1, r, count + 1); 
    } 
}
