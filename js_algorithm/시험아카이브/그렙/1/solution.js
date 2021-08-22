/*
    일단 유저정보를 담아야 함
    infos를 나눠서 id, password, isLogin 으로 분류하고 작업
    1. ADD인 경우 checkAdd 함수로 체크
    2. LOGIN인 경우 checkLogin 함수로 체크
    3. ORDER인 경우 checkOrder 함수로 체크
 */
function checkLogin(infos, id, password) {
  const alreadyLogin = infos.find((info) => info.isLogin);

  if (alreadyLogin) {
    return false;
  }

  const info = infos.find((info) => info.id === id);

  if (!info) {
    return false;
  }

  if (info.password === password) {
    info.isLogin = true;
    return true;
  }

  return false;
}

function checkAdd(infos) {
  const loginInfo = infos.find((info) => info.isLogin);

  if (!loginInfo) {
    return false;
  }

  loginInfo.hasItems = true;

  return true;
}

function checkOrder(infos) {
  const loginInfo = infos.find((info) => info.isLogin);

  if (!loginInfo) {
    return false;
  }

  if (loginInfo.hasItems) {
    loginInfo.hasItems = false;
    return true;
  }

  return false;
}

function solution(infos, actions) {
  var answer = [];

  const detailInfos = infos.map((info) => {
    const [userId, password] = info.split(" ");
    return {
      id: userId,
      password: password,
      isLogin: false,
      hasItems: false,
    };
  });

  actions.forEach((action) => {
    if (action.startsWith("ORDER")) {
      answer.push(checkOrder(detailInfos));
    } else if (action.startsWith("ADD")) {
      answer.push(checkAdd(detailInfos));
    } else if (action.startsWith("LOGIN")) {
      const [actionType, id, password] = action.split(" ");
      answer.push(checkLogin(detailInfos, id, password));
    }
  });

  return answer;
}
