
import math
def solution(answers):
    answer = []
    first = [1, 2, 3, 4, 5]
    second = [2, 1, 2, 3, 2, 4, 2, 5]
    third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    first = first * math.ceil(len(answers) / len(first))
    second = second * math.ceil(len(answers) / len(second))
    third = third * math.ceil(len(answers) / len(third))
    
    first_cnt = 0
    second_cnt = 0
    third_cnt = 0
    for i in range(len(answers)):
        if (answers[i] == first[i]):
            first_cnt += 1
        if (answers[i] == second[i]):
            second_cnt += 1
        if (answers[i] == third[i]):
            third_cnt += 1
            
    answer = [[1,first_cnt], [2,second_cnt], [3,third_cnt]]
    print(answer)
    answer.sort(key=lambda x: x[1])
    max_value = answer[len(answer)-1][1]
    answer = [answer[i][0] for i in range(len(answer)) if answer[i][1] == max_value]
    return answer