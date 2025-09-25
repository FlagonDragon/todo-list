// project logic

class Project {
    
    constructor(name) {
        
        this.name = name;
        this.todos = []

    };

};




function addProject(name) {

    console.log('uhmmmm okay whatever you say ' + name);
    
    var newProject = new Project(name);

    myProjects.push(newProject);

    console.log(myProjects);

}

export default addProject;