const clock= document.getElementById("clock");



function time(){
    const date=new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    //const hours = String(date.getHours()).padStart(2,"0");
    // string의 길이가 2가 아니라면 앞에 0을 추가한다.
    clock.innerText=`
    ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}
    `
}
time();
setInterval(time,1000);
