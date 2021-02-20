function solution(skill, skill_trees) {
    let answer = 0;
    let index = 0;
    
    while(skill_trees.length > 0){
        const skills = skill_trees.shift();
        const userSkillList = skills.split('');
        let isOk = true;
        
        for(let item of userSkillList){
            const [isIn, idx] = includes(skill, item);
            if(isIn){
                if(idx === index){
                    index++;
                }else{
                    isOk = false;
                    break;
                }
            }
        }
        
        index = 0;
        if(isOk) answer++;
    }
    
    return answer;
}

function includes(arr, item){
    let result = false;
    let index = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === item){
            index = i;
            result = true;
        }
    }
    
    return [result, index];
}


