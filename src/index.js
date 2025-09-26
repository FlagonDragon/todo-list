

import './styles.css';
import addProject from './projects.js'
import addTodo from './todos.js'
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

addTodo('Yoga','leg stretch','yea','yea','yea');

addTodo('Cooking','marinated eggs','yea','yea','yea');

addTodo('Cooking','chococookie','yea','yea','yea');

// console.log(testFinder('writing'));

// testFinder('cooking');

writeContent();



