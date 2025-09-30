

import './styles.css';
import addProject from './projects.js'
import addTodo from './todos.js'
import {addProjectConfirmListener, addTodoConfirmListener} from './addListeners.js'
import writeContent from './DOM.js'

window.myProjects = [];

const bestJoJo = 'Jolyne Cujoh';

const myNumber = 500 * 25;

console.log('WE STAY ACTIVE!!!!');

console.log(myNumber);
console.log(bestJoJo);
console.log('eyy')


addProject('Yoga');

addProject('Cooking');

addProject('Writing');

addProject('Singing');

addProject('Studying');

addTodo('Yoga','Stretch legs', '08/10','None','Low');

addTodo('Cooking','Prepare breakfast','11/10','None','High');

addTodo('Cooking','Bake sponge cake','11/10','None','Medium');

// console.log(testFinder('writing'));

// testFinder('cooking');

writeContent();

addProjectConfirmListener();
addTodoConfirmListener();








