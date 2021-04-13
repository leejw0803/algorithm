answer = 0

def solution(numbers, target):
    global answer
    dfs(0, 0, numbers, target)
    return answer

def dfs(cur, idx, numbers, target):
    global answer
    if idx == len(numbers):
        if cur == target:
            answer += 1
        return
    
    cur_minus = cur - numbers[idx]
    cur_plus = cur + numbers[idx]
    
    dfs(cur_minus, idx+1, numbers, target)
    dfs(cur_plus, idx+1, numbers, target)