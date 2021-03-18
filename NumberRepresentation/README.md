# 문제 설명

- 자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

# 문제 분석

- 자연수 n을 연속한 자연수들로 표현하는 방법이 여러개
- 연속된 자연수로 표현하는 방법의 수를 return
- 생각을 해보자
- 연속된 자연수의 합 = n이 되어야 함
- k개의 자연수가 사용되었다고 할 때
- 0-k-1의 합 sum(k) 예를 들어 k=3, n=15
- 0+1+2 = 3 , n-sum(k) = 15-3 = 12,
- n-sum(k) % k === 0 이면 k개의 자연수로 더하는 방법의 수가 1개 존재한다는 뜻
- 방법의 수니까 k=1부터 k<n까지 돌면서 계산하면 될듯
- k가 보다 작을 때까지 보다는 sum(k) < n일때까지가 맞을 듯

# 딱히 문제될 점이 없었다.

- 이번 문제는 오히려 문제 풀 때 술술 잘 풀렸다.
- 차근차근히 생각하고 접근하는 것이 좋은 방식이 될 것 같다.