def solution(arr):
    arr.append(-1)
    answer = [arr[i] for i in range(len(arr)-1) if arr[i] != arr[i+1]]
    return answer