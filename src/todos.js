// todo logic

class Todo {
    
    constructor(title, description, dueDate, priority) {
        
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;

    };

};

// const myProjects = [];



function testFinder(targetProject) {

    const projectIndex = (project) => project.name == targetProject;

    return myProjects.findIndex(projectIndex)

}

function addTodo(targetProject, title, description, dueDate, priority) {
    
    var newTodo = new Todo(title, description, dueDate, priority);

    myProjects[testFinder(targetProject)].todos.push(newTodo);

    console.log(myProjects);

}

export default addTodo;