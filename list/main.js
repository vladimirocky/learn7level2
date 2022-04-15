'use strict';

const todoInput = document.querySelector('.todoInput');
const buttonTodo = document.querySelector('.button-todo');
const list = document.querySelector('.list');

let todoList = [];
if (localStorage.getItem('todo')) {
  todoList = JSON.parse(localStorage.getItem('todo'));
  displayMessages();
}

buttonTodo.addEventListener('click', () => {
  let newTodo = {
    todo: todoInput.value,
    checked: false,
    important: false
  };
  todoList.push(newTodo);
  displayMessages();
  todoInput.value = '';
  localStorage.setItem('todo', JSON.stringify(todoList));
});

function displayMessages() {
  let displayMessage = '';
  todoList.forEach(function (item, i) {
    displayMessage +=
      `
    <li>
    <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
    <label for='item_${i}' class="${item.important ? 'alert': ''}">${item.todo}</label>
    </li>
    `;
    list.innerHTML = displayMessage;
  });
}

list.addEventListener('change', (event) => {
  let valueLabel = list.querySelector('[for=' + event.target.getAttribute('id') + ']').innerHTML;
  todoList.forEach(function (item) {
    if (item.todo === valueLabel) {
      item.checked = !item.checked;
      localStorage.setItem('todo', JSON.stringify(todoList));
    }
  });
});
list.addEventListener('contextmenu', function (event) {
  event.preventDefault();
  //console.log(item.todo);
  todoList.forEach(function (item) {
    console.log(todoList);
    // if (item.todo != event.target.innerHTML) {

    //   item.important = !item.important;
    //   displayMessages();
    //   localStorage.setItem('todo', JSON.stringify(todoList));
    // }
  });
});