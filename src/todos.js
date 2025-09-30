// todo logic

class Todo {
    
    constructor(title, dueDate, description, priority) {

        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;

    };

};

// const myProjects = [];



function testFinder(targetProject) {

    const projectIndex = (project) => project.name == targetProject;

    return myProjects.findIndex(projectIndex)

}

function addTodo(targetProject, title, dueDate, description, priority) {
    
    var newTodo = new Todo(title, dueDate, description, priority);

    myProjects[testFinder(targetProject)].todos.push(newTodo);

    console.log(myProjects);

}

export default addTodo;