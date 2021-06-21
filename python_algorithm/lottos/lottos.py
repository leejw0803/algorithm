
def solution(lottos, win_nums):
    answer = []
    
    zero_cnt = 0
    right_cnt = 0
    
    for num in lottos:
        if num == 0:
            zero_cnt = zero_cnt + 1
        else:
            if win_nums.count(num) != 0:
                right_cnt = right_cnt + 1
    
    top = get_rank(right_cnt+zero_cnt)
    bottom = get_rank(right_cnt)
    
    answer= [top, bottom]
    return answer

def get_rank(cnt):
    if cnt < 2:
        return 6
    elif cnt < 3:
        return 5
    elif cnt < 4:
        return 4
    elif cnt < 5:
        return 3
    elif cnt < 6:
        return 2
    else:
        return 1
      
