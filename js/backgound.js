const imgs=["0.jpeg","1.jpeg","2.jpeg"];

const chosenImg=imgs[Math.floor(Math.random()*imgs.length)];

const bgimg = document.createElement("img");
bgimg.src=`img/${chosenImg}`
document.body.appendChild(bgimg);