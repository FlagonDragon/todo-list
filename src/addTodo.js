// add todo button

addTodoBtn.addEventListener('click', () => {

    writeFunction();

    addTodo(targetProject, title, description, dueDate, priority);

});

  projectDivs = document.querySelectorAll('.projectDiv');
    
    for (let item of projectDivs) {
    item.remove();
    }