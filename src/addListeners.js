// add todo listeners to buttons

import addTodo from './todos.js'
import writeContent from './DOM.js'
import addProject from './projects.js'

const projectDialog = document.getElementById("projectDialog");
const nameInput = projectDialog.querySelector("#name");
const addProjectBtn = document.getElementById("addProjectBtn");

const todoDialog = document.getElementById("todoDialog");
const targetProjectInput = todoDialog.querySelector("#targetProject");
const titleInput = todoDialog.querySelector("#title");
const descriptionInput = todoDialog.querySelector("#description");
const dueDateInput = todoDialog.querySelector("#dueDate");
const priorityInput = todoDialog.querySelector("#priority");
const confirmBtn = todoDialog.querySelector("#confirmBtn");

function addProjectListener() {

    addProjectBtn.addEventListener('click', () => {

        projectDialog.showModal();

    });

};

function addTodoListeners() {

    const addTodoBtns = document.querySelectorAll('.addTodoBtn');

    for (let button of addTodoBtns) {

        button.addEventListener('click', () => {

            todoDialog.showModal();

        });

    };

};

function addProjectConfirmListener() {

    confirmButton.addEventListener('click', (event) => {

        event.preventDefault();

        projectDialog.close();

        addProject(nameInput.value);

        writeContent();

    });

};

function addTodoConfirmListener() {

    confirmBtn.addEventListener('click', (event) => {

        event.preventDefault();

        todoDialog.close();

        addTodo(targetProjectInput.value, titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value);

        writeContent();

    });

};




function addExpandListener() {

    const expandBtns = document.querySelectorAll('.expandBtn');

    for (let button of expandBtns) {

        button.addEventListener('click', () => {

            button.classList.toggle("active");

            var descBox = button.nextElementSibling;

            if (descBox.style.display === "flex") {

                descBox.style.display = "none";

            } else {

                descBox.style.display = "flex";

            };

        });

    };

}

export {addProjectListener, addTodoListeners, addProjectConfirmListener, addTodoConfirmListener, addExpandListener}
