/*
    놀이기구의 원래 이용료는 price
    놀이기구를 N번 째 이용한다면 원래 이용료의 N배를 받기로 하였다.
    즉 처음 이용료가 100 이었다면 2번째에는 200, 3번째에는 300
    놀이기구를 count 번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return
 */

function solution(price, money, count) {
  let totalPrice = 0;

  for (let i = 1; i <= count; i++) {
    totalPrice += price * i;
  }

  return totalPrice > money ? totalPrice - money : 0;
}
