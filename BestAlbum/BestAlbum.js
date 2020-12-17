function solution(genres, plays) {

    
    const playsPerGenres = genres.reduce((acc, cur, i) => {
        
        if(!acc[cur]){
            acc[cur] = {
                playsList : [[i, plays[i]]],
                totalPlays : plays[i]
            };
            
        }else {
            acc[cur]['playsList'].push([i, plays[i]]);
            acc[cur]['totalPlays'] += plays[i];
        }
        // acc[cur]['totalPlay'] += plays[i];
        return acc;
        
    }, {});
    /* 객체 안에 객체 값을 동적할당 해주려면 2차원 배열처럼 선언하면 된다. */
    console.log(playsPerGenres.classic.playsList[0]);
    
    /* Object의 value값 정렬 */
    
    
    
}