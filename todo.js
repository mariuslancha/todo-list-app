//Model
//If localStorage has a todos array, then use it 
//Otherwise use the default array.
let todos;

//Retrieve localStorage
const savedTodos = JSON.parse(localStorage.getItem('todos')); //converts it back to an array using JSON.parse
//check if it's an array
if(Array.isArray(savedTodos)){
    todos = savedTodos;
} else {
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
}



render();

// create todo
function createTodo(title, dueDate){
    const id = '' + new Date().getTime();

    todos.push({
        title: title,
        dueDate: dueDate,
        id: id
    });

    saveTodos();
}

//Delete todo
function removeTodo(idToDelete){
    todos = todos.filter(function(todo){
        if(todo.id === idToDelete){
            return false;
        } else {
            return true;
        }
    });

    saveTodos();
}      

function saveTodos(){
    localStorage.setItem('todos', JSON.stringify(todos));     
    }
    

// controller
function addTodo(){
    const textbox = document.getElementById('todo-title');
    const title = textbox.value;

    const datepicker = document.getElementById('date-picker');
    const dueDate = datepicker.value;

    createTodo(title, dueDate);
    render();
}
 
function deleteTodo(event){
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;

    removeTodo(idToDelete);
    render();   
} 


//view
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