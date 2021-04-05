# 카카오 신입 개발자 네오
# 아이디 생성
# 규칙
# 3자 이상 15자 이하
# - _ . 소문자 숫자 만 사용 가능
# . 는 처음과 끝에 사용 불가능, 연속 사용 불가능


def solution(new_id):
    answer = ''
    
    new_id = list(new_id.lower())
    
    remain_words = 'abcdefghijklmnopqrstuvwxyz1234567890-_.'
    new_id = [i for i in new_id if i in remain_words]
    
    last_word = new_id[-1]
    new_id = [new_id[i] for i in range(len(new_id)-1) 
              if new_id[i] != '.' 
              or new_id[i] == '.' and new_id[i+1] != '.']
    new_id.append(last_word)
    
    
    if len(new_id) != 0 and new_id[0] == '.':
        new_id.pop(0)
    if len(new_id) != 0 and new_id[-1] == '.':
        new_id.pop(-1)
        
    if len(new_id) == 0:
        new_id.append('a')
        
    if len(new_id) >= 15:
        new_id = new_id[:15]
    if len(new_id) != 0 and new_id[-1] == '.':
        new_id.pop(-1)
    
    
    if len(new_id) <= 2:
        last = new_id[-1]
        while len(new_id) < 3:
            new_id.append(last)
    
    new_id = ''.join(new_id)
    
    print(new_id)
    
    answer = new_id
    
    return answer