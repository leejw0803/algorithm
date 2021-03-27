function solution(array, commands) {
  var answer = [];

  // console.log(array);

  for (let i = 0; i < commands.length; i++) {
    const newArray = array.slice(commands[i][0] - 1, commands[i][1]);

    console.log(newArray);
    newArray.sort((a, b) => a - b);
    answer.push(newArray[commands[i][2] - 1]);
  }

  console.log(answer);
  return answer;
}
