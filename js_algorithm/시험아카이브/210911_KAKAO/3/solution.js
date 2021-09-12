/*
    입차 후 출차 내역이 없다면 23시 59분에 출차한 것으로 간주
    00:00 부터 23:59까지 입출차 내역을 바탕으로 차량별 누적 주차 시간을 계산하여 요금 일괄 정산
    누적 주차 시간이 기본 시간 이하라면 기본 요금만 청구
    기본 요금 이상이라면 기본 요금 + (단위 시간(초과시간) * 단위 요금)
    초과시간이 단위시간으로 나누어 떨어지지 않으면 올림 
    
    fees 주차 요금을 나타내는 정수배열 
        fees[0] 기본 시간
        fees[1] 기본 요금
        fees[2] 단위 시간
        fees[3] 단위 요금
    records 자동차 입/출차 내역을 나타내는 문자열 배열 시각을 기준으로 오름차순
        "시각 차량번호 내역"
        시각 HH:MM
        차량번호 4자리 문자열
        내역 IN || OUT
        
    차량 번호가 작은 자동차부터 청구할 주차요금을 차례대로 정수 배열에 담아서 return 
    
    
    1. 각 차량별로 입차 시간과 출차 시간을 파악한다.
        1. records를 순회하면서 시간, 차량번호, 내역으로 나눈다.
        2. 차량 번호 별로 [IN 시간, OUT 시간]의 배열로 나타낸다. => timeInfos
        3. 해당 배열을 통해서 총 시간을 계산한다.
            1. 마지막이 IN으로 끝나는 경우 : 뒤에 OUT 23:59를 추가한다.
            2. 순회하면서 2개씩 시간을 계산한다.
            3. 계산된 결과를 timeInfosDetail(key=[차량번호], value=[총시간])으로 정리한다.
    2. 시간과 fees를 통해서 요금을 계산한다.
    
 */

function getTime(inTime, outTime) {
  const [inHour, inMin] = inTime.split(":");
  const [outHour, outMin] = outTime.split(":");

  return (
    (Number(outHour) - Number(inHour)) * 60 + (Number(outMin) - Number(inMin))
  );
}

function getFee(totalTime, defaultTime, defaultFee, unitTime, unitFee) {
  if (totalTime <= defaultTime) {
    return defaultFee;
  } else {
    return (
      defaultFee + Math.ceil((totalTime - defaultTime) / unitTime) * unitFee
    );
  }
}

function solution(fees, records) {
  var answer = [];

  const timeInfos = {};
  const [defaultTime, defaultFee, unitTime, unitFee] = fees;

  records.forEach((record) => {
    const [time, code, inOrOut] = record.split(" ");

    timeInfos[code] = timeInfos[code]
      ? timeInfos[code].concat([`${inOrOut} ${time}`])
      : [`${inOrOut} ${time}`];
  });

  Object.keys(timeInfos).forEach((code) => {
    if (timeInfos[code][timeInfos[code].length - 1].startsWith("IN")) {
      timeInfos[code].push("OUT 23:59");
    }
  });

  const timeInfosDetail = {};

  Object.keys(timeInfos).forEach((code) => {
    for (let i = 0; i < timeInfos[code].length; i += 2) {
      timeInfosDetail[code] = timeInfosDetail[code]
        ? timeInfosDetail[code] +
          getTime(
            timeInfos[code][i].split(" ")[1],
            timeInfos[code][i + 1].split(" ")[1]
          )
        : getTime(
            timeInfos[code][i].split(" ")[1],
            timeInfos[code][i + 1].split(" ")[1]
          );
    }
  });

  const feeInfos = {};

  Object.keys(timeInfosDetail).forEach((code) => {
    feeInfos[code] = getFee(
      timeInfosDetail[code],
      defaultTime,
      defaultFee,
      unitTime,
      unitFee
    );
  });

  const feeInfoArr = Object.entries(feeInfos).sort((a, b) => a[0] - b[0]);

  feeInfoArr.forEach((fee) => {
    answer.push(fee[1]);
  });

  return answer;
}
