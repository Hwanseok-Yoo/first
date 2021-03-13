const body = document.querySelector("body");

const IMG_NUMBER = 2;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `./image/${imgNumber+1}.jpg`;
    image.onload = function(){
        image.classList.add("bgImage");
        body.appendChild(image);
    }
}

function genRandom(){
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}




function init(){
  const image = document.querySelector(".bgImage");
  const randomNumber = genRandom();
  paintImage(randomNumber);
  setTimeout(function(){
    
    if (image !== null){
      body.removeChild(image);
    }
  }, 2000)
}
init()
setInterval(init, 10000);