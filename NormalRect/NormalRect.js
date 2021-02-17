function solution(w, h) {
    let answer = 1;
    
    const LONG = w > h ? w : h;
    const SHORT = w > h ? h : w;
    
    const n = gcd(SHORT, LONG);
    
    answer = (SHORT * LONG) - ((SHORT / n + LONG / n - 1) * n);  

    return answer;
}

function gcd(small, large) {
    return (small % large === 0) ? large : gcd(large, small % large);
}