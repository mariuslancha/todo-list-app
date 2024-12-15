todos = [{
    title: 'Get Groceries',
    dueDate: '2024-02-07',
    id: 'id1'
},{
    title: 'Wash Car',
    dueDate: '2024-10-04',
    id: 'id2'
},{
    title: 'Make Dinner',
    dueDate: '2024-05-12',
    id: 'id3'
}];

render();

function addTodo(){
    const textbox = document.getElementById('todo-title');
    const title = textbox.value;

    const datepicker = document.getElementById('date-picker');
    const dueDate = datepicker.value;

    const id = '' + new Date().getTime();
    todos.push({
        title: title,
        dueDate: dueDate,
        id: id
    });

    render();
}

function deleteTodo(event){
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;

    todos = todos.filter(function(todo){
        if(todo.id === idToDelete){
            return false;
        } else {
            return true;
        }
    });

    render();
}

function render() {
    document.getElementById('todo-list').innerHTML = '';

    todos.forEach(function(todo){
        const element = document.createElement('div');
        element.innerText = todo.title + '' + todo.dueDate;

        const todoList = document.getElementById('todo-list');
        todoList.appendChild(element);

        const deleteButton = document.createElement('Button');
        deleteButton.innerText = 'Delete';
        deleteButton.style = 'margin-left: 12px; margin-top: 12px;';
        deleteButton.onclick = deleteTodo;
        deleteButton.id = todo.id;
        element.appendChild(deleteButton);
    });
}