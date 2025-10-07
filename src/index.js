window.myProjects = [];

window.addTodoId = '';

import './styles.css';
import addProject from './projects.js'
import {addProjectConfirmListener, addTodoConfirmListener} from './addListeners.js'
import writeContent from './DOM.js'
import {storageFeedback, getStorage} from './storage.js'

storageFeedback('localStorage');

getStorage();

console.log(myProjects);

if (myProjects.length == 0) {

    addProject('Project');

}

writeContent();

addProjectConfirmListener();
addTodoConfirmListener();










