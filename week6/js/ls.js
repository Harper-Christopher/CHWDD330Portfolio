function getTodoList(key){
    const todoListString=localStorage.getItem('toDoList');
    let todoList = [];

    if(todoListString){
        todoList = JSON.parse(todoListString);
    } return todoList;
}