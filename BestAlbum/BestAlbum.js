function solution(genres, plays) {
    /* 장르 별 노래들을 [[<고유번호>, <플레이수>], [<고유번호>, <플레이수>], ... ] 으로 정리하여 playsList에 넣습니다.
     * 장르 별 노래들의 재생횟수를 누적하여 totalPlays에 넣습니다.
     * playsPerGenres는 다음과 같은 형태가 됩니다.
     {
         <장르> : {
            playsList: [[<고유번호>, <플레이수>], [<고유번호>, <플레이수>], ... ],
            totalPlays: <총 재생횟수>
         },
         <장르> : {
            playsList: [[<고유번호>, <플레이수>], [<고유번호>, <플레이수>], ... ],
            totalPlays: <총 재생횟수>
         },
         ...
     }
     */
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
        return acc;
    }, {});
    
    
    /* playsPerGenres의 요소들을 정렬하기 위해 배열의 형태로 바꿔 줍니다. -> playsPerGenresArr
     [
         [<장르>, {
            playsList: [[<고유번호>, <플레이수>], [<고유번호>, <플레이수>], ... ],
            totalPlays: <총 재생횟수>
         }], 
         [<장르>, {
            playsList: [[<고유번호>, <플레이수>], [<고유번호>, <플레이수>], ... ],
            totalPlays: <총 재생횟수>
         }],
         ...
     ]
     */
    const playsPerGenresArr = Object.entries(playsPerGenres);
    
    /* 장르 별 총 재생횟수로 정렬해 줍니다. */
    playsPerGenresArr.sort(function(obj1, obj2) {
        return obj2[1].totalPlays - obj1[1].totalPlays;
    });
    
    /* 각 장르의 노래들을 재생횟수 별로 정렬해 줍니다. 
     * 이 때, 재생횟수가 같다면 고유번호가 낮은 순으로 정렬해 줍니다.
     */
    for(let i = 0; i < playsPerGenresArr.length; i++){
        playsPerGenresArr[i][1].playsList.sort(function(arr1, arr2){
            if(arr1[1] === arr2[1]){
                return arr1[0] - arr2[0];
            }
            return arr2[1] - arr1[1];
        });
    }
    
    /* playPerGernresArr를 순회하면서 각 장르별 상위 2곡씩 정답배열에 push해줍니다.
     * 이 때, 장르별 곡이 2곡 이상 되지 않는 장르들을 파악하여
     * 1곡만 넣어주는 작업을 진행합니다.
     */
    let answer = [];
    for(let i = 0; i < playsPerGenresArr.length; i++){
        if(playsPerGenresArr[i][1].playsList.length >= 2){
            answer.push(playsPerGenresArr[i][1].playsList[0][0]);
            answer.push(playsPerGenresArr[i][1].playsList[1][0]);
        }else{
            for(let j = 0; j<playsPerGenresArr[i][1].playsList.length; j++){
                answer.push(playsPerGenresArr[i][1].playsList[j][0]);
            }
        }
    }
    
    return answer;
}