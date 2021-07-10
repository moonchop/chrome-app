const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("input")
//const toDoInput=document.querySelector("#todo-form input"); 위와 동일.
const toDoList=document.getElementById("todo-list");

const a=localStorage.getItem("todo");

function paintToDo(newTodo){
    /********list*********/
    const li=document.createElement("li");
    const span=document.createElement("span");
    li.appendChild(span);
    span.innerText=newTodo;
    /********button*********/
    const button=document.createElement("button");
    li.appendChild(button);
    button.innerText="❌";
    /********list&button 합침*********/
    toDoList.appendChild(li);

    /********delete button*********/
    button.addEventListener("click",(e)=>{
        li_form=e.target.parentNode;//console.dir(e.target)으로 parent를 찾음.
        li_form.remove();
    })
    localStorage.setItem("todo",li);

}

function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    paintToDo(newTodo);
}
toDoForm.addEventListener("submit",handleToDoSubmit);