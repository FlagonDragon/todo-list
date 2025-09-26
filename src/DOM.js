// DOM manipulation

const content = document.getElementById('content');

// content.textContent = 'lalapaloza';


function writeContent() {

    myProjects.forEach(project => {

        console.log(project.name);

        var projectDiv = document.createElement('div');

        projectDiv.classList.add('projectDiv');

        projectDiv.textContent += project.name;

        content.appendChild(projectDiv);

    });

}

export default writeContent;
