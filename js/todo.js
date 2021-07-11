const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("input")
//const toDoInput=document.querySelector("#todo-form input"); 위와 동일.
const toDoList=document.getElementById("todo-list");

let toDos=[];


function saveToDos(){
    //localStorage.setItem("todos",toDos);
    //처음엔 list 각각을 setItem 해주어서 따로 관리하려고 했음. But key 하나에 value를 배열로 관리하면됨.  
    localStorage.setItem("todos",JSON.stringify(toDos)); //list를 string으로 바꿈.
   
}

function paintToDo(newTodo){ //list를 만들어주는 function
    /********list*********/
    const li=document.createElement("li");
    const span=document.createElement("span");
    li.appendChild(span);
    li.id=newTodo.id;
    span.innerText=newTodo.text; //새로고침 시 object로 표시되기에 newTodo ->  newTodo.text.
    /********button*********/
    const button=document.createElement("button");
    li.appendChild(button);
    button.innerText="❌";
    /********list&button 합침*********/
    toDoList.appendChild(li);

    /********delete button*********/
    button.addEventListener("click",(e)=>{
        li_form=e.target.parentNode;//console.dir(e.target)으로 parent를 찾음(li의 부모에게 접근해서 list와 버튼을 삭제)
        li_form.remove();
        toDos=toDos.filter(toDo=>toDo.id!==Number(li_form.id));
        saveToDos();
    });

    

}

function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    //toDos.push(newTodo); delete를 하려면 value에 id를 주어야한다. newTodo가 아닌 newTodoObj로 만듦
    const newTodoObj = {
        text:newTodo,
        id:Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj); //text가 아닌 object를 넘겨준다.
    saveToDos();
}
toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos=localStorage.getItem("todos");
//savedToDos는 단지 string.
if(savedToDos){
    const parsedToDos=JSON.parse(savedToDos);
     //parsedToDos는 단순한 strign을 parse를 통해 실제로 무언가를 할 수 있는 배열을 얻는다.
    toDos=parsedToDos; //list를 추가해서 새로고침하면, 전에 list들을 기억하기 위함.
    //새로운 setItem해주기 전에 빈배열인 toDos에 새로고침 전 list를 넣어 기억한다. 
    parsedToDos.forEach(paintToDo); //parsedToDos에 있는 인자들을 paintToDo에 넣어주기 때문에 paintToDo의 인자를 따로 넣어주지 않는다.
}