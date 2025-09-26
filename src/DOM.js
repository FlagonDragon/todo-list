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
            
            todoDiv.textContent += todo.title

            projectDiv.appendChild(todoDiv);

        });

    });

}

export default writeContent;
