const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
//위와 동일 : const loginInput = document.querySelector("#login-form button");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUserName = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(e){
    e.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);

    
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit)

} else {
    greeting.innerText = `Hello ${savedUserName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
  
}
