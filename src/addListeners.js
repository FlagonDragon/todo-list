// add todo listeners to buttons

import addTodo from './todos.js'
import writeContent from './DOM.js'
import addProject from './projects.js'
import { ja } from 'date-fns/locale';

const projectDialog = document.getElementById("projectDialog");
const nameInput = projectDialog.querySelector("#name");
const addProjectBtn = document.getElementById("addProjectBtn");

const todoDialog = document.getElementById("todoDialog");
const targetProjectInput = todoDialog.querySelector("#targetProject");
const titleInput = todoDialog.querySelector("#title");
const dueDateInput = todoDialog.querySelector("#dueDate");
const descriptionInput = todoDialog.querySelector("#description");
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

        addTodo(targetProjectInput.value, titleInput.value, dueDateInput.value, descriptionInput.value, priorityInput.value);

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

};

function addRadioListeners() {

    const inputs = document.getElementsByTagName("input");

    for (let input of inputs) {

        if (input.type == 'radio') {

            let checked = false;

            let thisBtn = input.parentNode.parentNode.querySelector('.expandBtn');

            input.addEventListener('click', () => {

                if (checked) {

                    checked = false;

                    input.checked = false;

                    input.parentNode.parentNode.style.textDecoration = 'none';
                    input.parentNode.parentNode.style.color = 'black';

                    
                    console.log(thisBtn);
                    console.log(input.parentNode.parentNode);
                    
                    thisBtn.style.backgroundColor = 'darkmagenta';
                    thisBtn.style.color = 'white';

                    console.log('was checked');

                } else if (!checked) {

                    checked = true;

                    input.parentNode.parentNode.style.textDecoration = 'line-through'
                    input.parentNode.parentNode.style.color = 'darkslategray'

                    thisBtn.style.backgroundColor = 'darkslategray';
                    thisBtn.style.color = 'black';

                    console.log('was unchecked');

                };            

            });

        };

    };

};

// removeBtn.addEventListener('click', () => {

//     myLibrary.splice(num, 1);

//     displayBooks(myLibrary);

// });

var i = 0;
var j = 0;

function addDeleteListeners() {

    const deleteBtns = document.querySelectorAll('.todoDelete');

    for (let deleteBtn of deleteBtns) {

        deleteBtn.addEventListener('click', () => {

            myProjects[i].todos.splice(j,1);

            console.log('bonk');

            writeContent();

        });

    };

};

export {addProjectListener, addTodoListeners, addProjectConfirmListener, addTodoConfirmListener, addExpandListener, addRadioListeners, addDeleteListeners}
