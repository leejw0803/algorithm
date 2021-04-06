def solution(n):
    answer = 0
    
    index = 0;
    while True:
        if 3**index > n:
            break
        index += 1
        
    three = list()
    
    while True:
        three.append(n // 3**(index-1))
        n %= 3**(index-1)
        index -= 1
        if index < 1:
            break
    
    for i in range(len(three)):
        answer += three[i] * (3**i)
        
    return answer