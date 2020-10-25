// Pulling id's from the HTML and placing them into variables to use.
const addTodo = document.querySelector("#todoList");
const addButton = document.querySelector("#addButton");
const todoList = document.querySelector("#todoLists");
const completed = document.getElementById("completed");
const all = document.getElementById("all");
const uncompleted = document.getElementById("uncompleted");


 // Function to add todo tasks to our html with classes to allow css styling.
 addButton.addEventListener('click', addToDo);
 function addToDo() {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');
    const newTodo = document.createElement("div");
    newTodo.innerText = addTodo.value;
    saveLocalTasks(addTodo.value);
    addTodo.value ="";
    newTodo.classList.add("todoTask");
    todoDiv.appendChild(newTodo);
    
    //Creates button within our html with an event listener of click to activate our toggleCompleted function upon clicking. Then we add the check mark and append it to the html.
    const completedButton = document.createElement("button");
    completedButton.addEventListener("click", toggleCompleted);
    completedButton.innerHTML = "&#9989;";
    todoDiv.appendChild(completedButton);
    
    //Creates button within our html with an event listener of click to activate our deleteCheck function upon clicking. Then we add the X and append it to the html.
    const trashButton = document.createElement("button");
    trashButton.addEventListener("click", deleteCheck);
    trashButton.innerHTML = "&#10060;";
    todoDiv.appendChild(trashButton);

    //Sends lists back to the html todoDiv. 
    todoList.appendChild(todoDiv);
}


//Function to remove local storage.
todoList.addEventListener('deleteCheck', deleteCheck);
function deleteCheck() {
    const todo = this.parentElement;
    removeLocalTasks(todo);
    
        todo.remove();
}

// Function that adds class completed to element. 
function toggleCompleted() {
  this.parentElement.classList.toggle('completed');
}


// Event listeners for the filter buttons to activate functions once clicked.
completed.addEventListener("click", filterTasks);
all.addEventListener("click", filterTasks);
uncompleted.addEventListener("click", filterTasks);
// Function to utilize the filter buttons 
function filterTasks() {
    let tasks = this.id; 
    const todos = todoList.childNodes;
    todos.forEach(todo => {
        //Switch statement for all, completed, and uncompleted buttons to change the css style to flex when true and none to hide when false.
        switch(tasks) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
        
    });
}


// Function that will check if local tasks are stored, if not it'll create an empty array. 
function saveLocalTasks(todo) {
  
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    //Adds a new task to the existing local storage array. 
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}


// Event listener to activate the getTodos function. 
document.addEventListener("DOMContentLoaded", getTodos);
// Function that will pull from the local storage / array of all the tasks already in the local storage to display within our html. 
function getTodos () {
    let todos;    
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(todo => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add('todo');
        const newTodo = document.createElement("div");
        newTodo.innerText = todo;
        newTodo.classList.add("todoTask");
        todoDiv.appendChild(newTodo);
        
        //Creates button within our html with an event listener of click to activate our toggleCompleted function upon clicking. Then we add the check mark and append it to the html.
        const completedButton = document.createElement("button");
        completedButton.addEventListener("click", toggleCompleted);        
        completedButton.innerHTML = "&#9989;";
        todoDiv.appendChild(completedButton);
        
        //Creates button within our html with an event listener of click to activate our deleteCheck function upon clicking. Then we add the X and append it to the html.
        const trashButton = document.createElement("button");
        trashButton.addEventListener("click", deleteCheck);
        trashButton.innerHTML = "&#10060;";
        todoDiv.appendChild(trashButton);
    
        //Sends lists back to the html todoDiv. 
        todoList.appendChild(todoDiv); 
    });
}

// Function to remove our local storage data from our array when we are deleting individual lines. 
function removeLocalTasks(todo) {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

