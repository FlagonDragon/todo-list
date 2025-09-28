

import './styles.css';
import addProject from './projects.js'
import addTodo from './todos.js'
import {addTodoConfirmListener} from './addListeners.js'
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

addTodo('Yoga','Stretch legs','None','08/10','Low');

addTodo('Cooking','Prepare lunch','None','11/10','High');

addTodo('Cooking','Bake sponge cake','None','11/10','Medium');

// console.log(testFinder('writing'));

// testFinder('cooking');


writeContent();

addTodoConfirmListener();






