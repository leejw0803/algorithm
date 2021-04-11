

from itertools import permutations

def solution(numbers):
    answer = 0
    numbers = list(numbers)
    result = []
    for i in range(1, len(numbers)+1):
        result += (list(permutations(numbers, i)))
    
    num = []
    for item in result:
        num.append(int(''.join(list(item))))
    
    num=list(set(num))
    
    for n in num:
        if(check(n)):
            answer += 1
    
    return answer

def check(num):
    if num == 0 or num == 1:
        return False
    else:
        for n in range(2, num):
            if num % n == 0:
                return False
        return True