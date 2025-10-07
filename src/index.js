

import './styles.css';
import addProject from './projects.js'
import addTodo from './todos.js'
import {addProjectConfirmListener, addTodoConfirmListener} from './addListeners.js'
import writeContent from './DOM.js'
import {storageFeedback, getStorage, setStorage} from './storage.js'

window.myProjects = [];

storageFeedback('localStorage');

getStorage();

// addProject('Yoga');
// addProject('Cooking');
// addProject('Writing');
// addProject('Singing');
// addProject('Studying');
// addTodo('Yoga','Stretch legs', '08/10','None','Low');
// addTodo('Cooking','Prepare breakfast','11/10','None','High');
// addTodo('Cooking','Bake sponge cake','11/10','None','Medium');

if (myProjects.length == 0) {

    addProject('Project');

}

writeContent();

addProjectConfirmListener();
addTodoConfirmListener();










