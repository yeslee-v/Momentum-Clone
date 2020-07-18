const clockContainer = document.querySelector(".js-clock"), // querySelector: element의 자식 탐색
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`; // 질문 ? True : false
}

function init() {
  getTime();
  setInterval(getTime, 1000); // setInterval(실행할 함수, 실행 시간(millisecond) 간격)
}

init(); // 함수 초기화
