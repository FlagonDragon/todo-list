// DOM manipulation

import {addTodoListeners} from './addListeners.js'

let content = document.getElementById('content');

function writeContent() {

    const projectDivs = document.querySelectorAll('.projectDiv');
    
    for (let project of projectDivs) {
    project.remove();
    };

    myProjects.forEach(project => {

        console.log(project.name);

        var projectDiv = document.createElement('div');
        projectDiv.classList.add('projectDiv');
        content.appendChild(projectDiv);

        var headerDiv = document.createElement('div');
        headerDiv.classList.add('headerDiv');
        projectDiv.appendChild(headerDiv);

        var headerLeft = document.createElement('div');
        headerLeft.classList.add('headerLeft');
        headerDiv.appendChild(headerLeft);

        var projectName = document.createElement('span');
        projectName.classList.add('headerLeft');
        projectName.textContent = project.name
        headerLeft.appendChild(projectName);

        var headerRight = document.createElement('div');
        headerRight.classList.add('headerRight');
        headerDiv.appendChild(headerRight);

        var addTodoBtn = document.createElement('button');
        addTodoBtn.classList.add('addTodoBtn');
        addTodoBtn.textContent = 'Add Todo';
        headerRight.appendChild(addTodoBtn);

        project.todos.forEach(todo => {

            console.log(todo.title)

            var todoDiv = document.createElement('div');
            todoDiv.classList.add('todoDiv');
            projectDiv.appendChild(todoDiv);

            var todoTitle = document.createElement('span');
            todoTitle.classList.add('todoTitle');
            todoTitle.textContent = todo.title;
            todoDiv.appendChild(todoTitle);

            var todoDesc = document.createElement('span');
            todoDesc.classList.add('detail');
            todoDesc.textContent = todo.description;
            todoDiv.appendChild(todoDesc);

            var todoDate = document.createElement('span');
            todoDate.classList.add('todoDate');
            todoDate.classList.add('detail');
            todoDate.textContent = todo.dueDate;
            todoDiv.appendChild(todoDate);

            var todoPrio = document.createElement('span');
            todoPrio.classList.add('todoPrio');
            todoPrio.classList.add('detail');
            todoPrio.textContent = todo.priority;
            todoDiv.appendChild(todoPrio);

        });

    });

    addTodoListeners();

};



export default writeContent;
