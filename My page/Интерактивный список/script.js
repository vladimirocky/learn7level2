let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add');
    todo = document.querySelector('.todo');

let todoList = [];

addButton.addEventListener('click', function(){
    
        let newTodo = {
            todo: addMessage.value,
            checked: false,
            important: false
        }
    
        todoList.push(newTodo);
        displayMessage();
})

function displayMessage() {
    
    let displayMessage = "";

    todoList.forEach(function(item, i) {
        displayMessage += `
        <li>
            <input type = 'checkbox' id = 'item_${i}' ${item.checked ? 'checked' : ''}>
            <label for = 'item_${i}'>${item.todo}</label>
            <button id = id = 'item_${i}'>Удалить</button>
        </li>
        `;
        todo.innerHTML = displayMessage;
        message.value = ""; 
    });

}