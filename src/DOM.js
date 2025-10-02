// DOM manipulation

import {addProjectListener, addTodoListeners, addExpandListener, addRadioListeners, addDeleteListeners} from './addListeners.js'
import icon from './delete.png'

let content = document.getElementById('content');

function writeContent() {

    const projectDivs = document.querySelectorAll('.projectDiv');
    
    for (let project of projectDivs) {
    project.remove();
    };

    for (let i = 0; i < myProjects.length; i++) {

        console.log(myProjects[i].name);

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
        projectName.textContent = myProjects[i].name;
        headerLeft.appendChild(projectName);

        var headerRight = document.createElement('div');
        headerRight.classList.add('headerRight');
        headerDiv.appendChild(headerRight);

        var addTodoBtn = document.createElement('button');
        addTodoBtn.classList.add('addTodoBtn');
        addTodoBtn.textContent = 'Add Todo';
        headerRight.appendChild(addTodoBtn);
        
        for (let j = 0; j < myProjects[i].todos.length; j++) {

            console.log(myProjects[i].todos[j].title);

            var todoDiv = document.createElement('div');
            todoDiv.classList.add('todoDiv');
            projectDiv.appendChild(todoDiv);

                var titleDiv = document.createElement('div');
                titleDiv.classList.add('titleDiv');
                todoDiv.appendChild(titleDiv);

                    var todoRadio = document.createElement('input');
                    todoRadio.classList.add('todoTitle');
                    todoRadio.type = 'radio'
                    titleDiv.appendChild(todoRadio);

                    var todoTitle = document.createElement('span');
                    todoTitle.classList.add('todoTitle');
                    todoTitle.textContent = myProjects[i].todos[j].title;
                    titleDiv.appendChild(todoTitle);

                    var projectNum = i;
                    var todoNum = j;

                    console.log(projectNum + ', ' + todoNum);

                    var todoDelete = document.createElement('button');
                    todoDelete.classList.add('todoDelete');
                    titleDiv.appendChild(todoDelete);

                        var deleteIcon = document.createElement('img');
                        deleteIcon.classList.add('deleteIcon');
                        deleteIcon.src = icon;
                        todoDelete.appendChild(deleteIcon);

                        todoDelete.addEventListener('click', () => {
                
                            myProjects[i].todos.splice(j,1);
                
                            console.log('bonk');
                
                            writeContent();
                
                        });
                        

                var todoDate = document.createElement('span');
                todoDate.classList.add('todoDate');
                todoDate.classList.add('detail');
                todoDate.textContent = myProjects[i].todos[j].dueDate;
                todoDiv.appendChild(todoDate);

                var expandBtn = document.createElement('button');
                expandBtn.classList.add('expandBtn');
                expandBtn.textContent = 'Desc.';
                todoDiv.appendChild(expandBtn);

                var descDiv = document.createElement('div');
                descDiv.classList.add('descDiv');
                descDiv.style.display = "none";
                todoDiv.appendChild(descDiv);

                    var todoDesc = document.createElement('span');
                    todoDesc.classList.add('todoDesc');
                    todoDesc.classList.add('detail');
                    todoDesc.textContent = myProjects[i].todos[j].description;
                    todoDesc.contentEditable = "true";
                    descDiv.appendChild(todoDesc);

                    var todoPrio = document.createElement('span');
                    todoPrio.classList.add('todoPrio');
                    todoPrio.classList.add('detail');
                    todoPrio.textContent = myProjects[i].todos[j].priority;
                    descDiv.appendChild(todoPrio);

        };

    };

    addProjectListener();
    addTodoListeners();
    addExpandListener();
    addRadioListeners();
    // addDeleteListeners();

};



export default writeContent;
