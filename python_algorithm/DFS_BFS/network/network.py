def get_row(arr):
    result = list()
    for i in range(len(arr)):
        if arr[i] == 1:
            result.append(i+1)
            
    return result

def solution(n, computers):
    answer = 0
    graph = [get_row(arr) for arr in computers]
    graph.insert(0,[])
    visited = [False] * (n+1)

    for i in range(1, n+1):
        answer += dfs(graph, i, visited)
        
    return answer


def dfs(graph, v, visited):
    
    if visited[v] :
        return 0
    
    visited[v] = True
    
    for i in graph[v]:
        if not visited[i]:
            dfs(graph, i, visited)
            
    return 1