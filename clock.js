const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
  const date = new Date();
  const day_seven = date.getDay();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const date_31 = date.getDate();
  
  const day_eng = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

  clockTitle.innerText = `${hours>12 ? 'PM ' : 'AM '}${
    hours>12 ? hours-12 : hours}:${
    minutes<10? `0${minutes}`:minutes}:${
    seconds<10? `0${seconds}`:seconds
  }/${day_eng[day_seven]} ${date_31}`;
}

function init(){
  getTime();
  setInterval(getTime, 1000);
}

init();