// import {saveTodo, deleteTodo, completedTodo, getTodoList} from './ToDo.js';
import * as ToDo from './ToDo.js';
import * as ls from './ls.js';
import * as utilities from './utilities';

document.querySelector('#addBtn').onclick = newTodo;
loadTodos();

//load todos
function loadTodos(){
    const todoList = ToDo.getTodoList();
    todoList.forEach(todo => {
        const el = createTodoElement(todo)
        addToList(el);
    })
       
    var count = todoList.filter(element => element.completed === false).length;
    document.querySelector('#leftBtn').innerHTML = count + " tasks left";
}

function addToList(el) {

}

//default export for the module
function newTodo(){
    const todo = createTodo();
    const todoDiv = createTodoElement(todo);
    addToList(todoDiv);
    ls.saveTodo(todo);
}

//create todo element
function createTodoElement(todo){
  //todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //Not done. 
}

function deleteTodo(e) {
  //const to event, then pull deleted todo. todo.delete todo, then load the todos again to show the updated list. Button to filter, use elements with arrow functions. 
}

function completedTodo(e) {
  //Mark as complete and reload the page to display updates. 
}


//create todo
function createTodo(){
    const input = document.querySelector('#todoInput');
    const newTodo = {id: Date.now(), content: input.value, completed: false }
    input.value = "";
    return newTodo;
}

// Relook at the book for the arrow function. 

//wesboss. 

const todo = new ToDo();