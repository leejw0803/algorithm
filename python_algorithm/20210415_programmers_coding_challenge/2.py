def solution(s):
    answer = 0
    sList = list(s)
    
    for i in range(len(s)):
        if check(''.join(sList)):
            answer += 1
        
        ins = sList.pop()
        sList.insert(0, ins)
        
    return answer

def check(s):
    pair = [['[', ']'], ['{', '}'], ['(', ')']]
    stack =[s[0]]
    for i in range(1, len(s)):
        if(len(stack) > 0):
            compare = stack[-1]
        else:
            stack.append(s[i])
            compare = 'none'
        
        if compare != 'none':
            [a, thisIndex] = findPair(pair, compare)
            if s[i] == a and thisIndex == 0:
                stack.pop()
            else:
                stack.append(s[i])
    
    if len(stack) > 0:
        return False
    else:
        return True
            
        
def findPair(pair, char):
    goal = []
    for i in pair:
        if char in i:
            goal = i
            break;
    
    if goal.index(char) == 0:
        return [goal[1], 0]
    else:
        return [goal[0], 1]