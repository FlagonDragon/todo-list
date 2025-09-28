// add todo listeners to buttons

import addTodo from './todos.js'
import writeContent from './DOM.js'

const myDialog = document.getElementById("myDialog");
const targetProjectInput = myDialog.querySelector("#targetProject");
const titleInput = myDialog.querySelector("#title");
const descriptionInput = myDialog.querySelector("#description");
const dueDateInput = myDialog.querySelector("#dueDate");
const priorityInput = myDialog.querySelector("#priority");
const confirmBtn = myDialog.querySelector("#confirmBtn");

function addTodoListeners() {

    const addTodoBtns = document.querySelectorAll('.addTodoBtn');

    for (let button of addTodoBtns) {

        button.addEventListener('click', () => {

            myDialog.showModal();

        });

    };

};

function addConfirmListener() {

    confirmBtn.addEventListener('click', (event) => {

        event.preventDefault();

        myDialog.close();

        addTodo(targetProjectInput.value, titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value);

        writeContent();

    });

};

export {addTodoListeners, addConfirmListener};