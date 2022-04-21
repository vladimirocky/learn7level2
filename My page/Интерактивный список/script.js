// Получаем данные из DOM
let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add');
    todo = document.querySelector('.todo');
// Массив для объекта
let todoList = [];

// Вешаем на кнопку событие 
addButton.addEventListener('click', function(){
    // создаём объект для тасков.
        let newTodo = {
            todo: addMessage.value,
            checked: false,
            important: false
        }
    // пушим в массив новый объект
        todoList.push(newTodo);
        // выгружаем вёрстку на страницу
        displayMessage();
        // Чистим инпут
        addMessage.value = "";
})

function displayMessage() {
    // прекращаем функцию, если пустой инпут
    if (!addMessage.value) return;
    let displayMessage = "";
    // чистим вёрстку, если оюъектов нет в массиве при удалении.
    if (todoList.length === 0) todo.innerHTML = '';
    // перебираем таски, выгружаем на страницу
    todoList.forEach(function(item, i) {
        displayMessage += `
        <li>
            <input type = 'checkbox' id = 'item_${i}' ${item.checked ? 'checked' : ''}>
            <label for = 'item_${i}' class = "${item.important ? 'important' : ''}">${item.todo}</label>
        </li>
        `;
        todo.innerHTML = displayMessage;
        
    });

}
// вешаем событие удаления тасков..
todo.addEventListener('contextmenu', function(event){
    event.preventDefault();
    todoList.forEach(function(item, i) {

        if (event.ctrlKey) {
            todoList.splice(i, 1);
        } else {
            item.important = !item.important;
        }
    })
})

// Первая проблема #1

// Таски удаляются, только прогружается новая вёрстка, после добавления нового таска
// не знаю как это исправить

// Проблема вторая #2

// Не смог реализовать кнопку для изменения таска, не понимаю покак как
// В перспективе не понимаю, как реализовать кнопку для удаления так, чтобы 
// кнопка прогружалась вместе с новым таском, и была закреплена за ним...

// HELP PLEASE