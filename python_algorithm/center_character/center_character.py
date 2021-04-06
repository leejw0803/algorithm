def solution(s):
    index = (lambda s: len(s) // 2)(s)
    return s[index-1:index+1] if len(s) % 2 == 0 else s[index] 