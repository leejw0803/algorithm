# 주어진 항공권을 이용하여 여행경로를 짠다.
# ICN 공항에서 출발한다.
# 항공권 정보가 담긴 2차원 배열 tickets
# 방문하는 공항 경로를 배열에 담아 return 

# 모든 공항 알파벳은 대문자 3글자
# 주어진 공항 수는 3개 이상 10000개 이하
# tickets의 각 행 a,b 는 a에서 b로 가는 항공권이 있다는 의미
# 모두 사용
# 가능 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 
# 모든 도시를 방문할 수 없는 경우는 없다

# 1. graph를 만든다. 방향성이 있는 그래프 이다. visited의 경우 간선에 대해서 존재해야 한다...?
# 2. 항상 ICN 공항에서 출발하므로, ICN부터 dfs를 하면 된다.
# 3. 두개 이상 겹칠 경우 하나의 경로를 반환하면 되고, 그 경로는 알파벳이 앞선 순서이다
#     즉, 두 갈래 길이 있을 때 알파벳이 앞선 쪽을 선택하면 된다.
# 4. 순서대로 배열에 넣으면 될 듯합니다.

answer = []

def solution(tickets):
    global answer
    
    graph = dict();
    visited = dict();
    for ticket in tickets:
        if ticket[0] in graph.keys():
            graph[ticket[0]].append(ticket[1])
            visited[ticket[0]].append(False)
        else:
            graph[ticket[0]] = [ticket[1]]
            visited[ticket[0]] = [False]
    
    for row in graph.values():
        row.sort()
    
    print(graph)
    print(visited)
    
    answer.append('ICN')
    dfs(graph, 'ICN', 0, visited)
    return answer

def dfs(graph, v, i, visited):
    global answer
    answer.append(graph[v][i])
    visited[v][i] = True
    
    if graph[v][i] not in graph.keys():
        return
    
    for idx in range(len(graph[graph[v][i]])):
        if not visited[graph[v][i]][idx]:
            dfs(graph, graph[v][i], idx, visited)