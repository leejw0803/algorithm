def solution(absolutes, signs):
    answer = 123456789
    
    answerList = []
    for i in range(len(absolutes)):
        if signs[i]:
            answerList.append(absolutes[i])
        else:
            answerList.append(absolutes[i] * -1)
            
    answer = sum(answerList)
    return answer