from collections import deque

def solution(begin, target, words):
    answer = 0
    
    words.insert(0, begin)
    
    # target의 노드 번호 확인
    target_node_num = -1
    if target not in words:
        return 0
    else:
        target_node_num = words.index(target) + 1
    
    
    # 그래프 만들기
    graph = []
    graph.append([])
    for i in range(len(words)):
        graph.append(get_adj_nodes(words[i], words))
    visited = [False] * len(graph)
    
    # bfs
    bfs_list = []
    queue = deque([(1, 0)])
    visited[1] = True
    while queue:
        (v, distance) = queue.popleft()
        
        for i in graph[v]:
            if not visited[i]:
                queue.append((i, distance+1))
                bfs_list.append((i, distance+1))
                visited[i] = True
                
    # 후처리
    if target_node_num not in [i[0] for i in bfs_list]:
        return 0
    else:
        for i in bfs_list:
            if i[0] == target_node_num:
                answer = i[1]

    return answer

def is_hit(word_1, word_2):
    hitRate = 0
    for i in range(len(word_1)):
        if word_1[i] == word_2[i]:
            hitRate += 1
            
    return hitRate >= len(word_1)-1
        
        
def get_adj_nodes(word, words):
    result = []
    for i in range(len(words)):
        if is_hit(word, words[i]) and word != words[i]:
            result.append(i+1)
            
    return result