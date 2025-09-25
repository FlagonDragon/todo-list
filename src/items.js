// item logic

class Item {
    
    constructor(project, title, description, dueDate, priority) {
        
        this.project = project;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;

    };

};

const myProjects = [];

function addItem(project, title, description, dueDate, priority) {

    console.log('i ' + title);
    
    var newItem = new Item(name);

    myProjects.push(newItem);

    console.log(myProjects);

}

export default addItem;