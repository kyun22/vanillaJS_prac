const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';
const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));  // localStorage 는 스트링만 저장 가능
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button")
    const span = document.createElement("span");
    const newID = toDos.length + 1;
    delBtn.innerHTML = "X";
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newID;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newID
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit2(event) {
    event.preventDefault();
    const currentTodo = toDoInput.value;
    paintToDo(currentTodo);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo){
            paintToDo(toDo.text)
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit2)
}

init();
