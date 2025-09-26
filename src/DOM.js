// DOM manipulation

const content = document.getElementById('content');


function writeContent() {

    myProjects.forEach(project => {

        console.log(project.name);

        var projectDiv = document.createElement('div');

        projectDiv.classList.add('projectDiv');

        projectDiv.textContent += project.name;

        content.appendChild(projectDiv);

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
            todoDesc.classList.add('todoDesc');
            todoDesc.textContent = todo.description;
            todoDiv.appendChild(todoDesc);

            var todoDate = document.createElement('span');
            todoDate.classList.add('todoDate');
            todoDate.textContent = todo.dueDate;
            todoDiv.appendChild(todoDate);

            var todoPrio = document.createElement('span');
            todoPrio.classList.add('todoPrio');
            todoPrio.textContent = todo.priority;
            todoDiv.appendChild(todoPrio);

        });

    });

}

export default writeContent;
