
function saveTodo(todo){
    const toDoList = getTodoList();
    toDoList.push(todo);
    localStorage.setItem('toDoList',JSON.stringify(toDoList));
}
//delete id list
function deleteTodo(id){
    const toDoList = getTodoList();
    const updatedTodos=toDoList.filter(todo =>todo.id !=id);
    localStorage.setItem('toDoList',JSON.stringify(updatedTodos));
}
//completed todo
function completedTodo(todos){    
    
    localStorage.setItem('toDoList', JSON.stringify(todos));
}

//get todoList
function getTodoList(){
    const todoListString=localStorage.getItem('toDoList');
    let todoList = [];

    if(todoListString){
        todoList = JSON.parse(todoListString);
    } return todoList;
}

export default {
    saveTodo,
    getTodoList,
    completedTodo,
    deleteTodo
}







function readFromLS(key) {
    return localstorage.getItem(key);
}

function writeToLS(key, data) {
    localStorage.setItem(key.stringify(data));
}