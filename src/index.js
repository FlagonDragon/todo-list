

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

addTodo('Cooking','Make banana mug cake','11/10','None','High');

// console.log(testFinder('writing'));

// testFinder('cooking');


writeContent();

addProjectConfirmListener();
addTodoConfirmListener();

const inputs = document.getElementsByTagName("input");

for (let input of inputs) {


    if (input.type == 'radio') {

        let checked = false;

        let thisBtn = input.parentNode.parentNode.querySelector('.expandBtn');

        input.addEventListener('click', () => {

            if (checked) {

                checked = false;

                input.checked = false;

                input.parentNode.parentNode.style.textDecoration = 'none';
                input.parentNode.parentNode.style.color = 'black';

                
                console.log(thisBtn);
                console.log(input.parentNode.parentNode);
                
                thisBtn.style.backgroundColor = 'darkmagenta';
                thisBtn.style.color = 'white';

                console.log('was checked');

            } else if (!checked) {

                checked = true;

                input.parentNode.parentNode.style.textDecoration = 'line-through'
                input.parentNode.parentNode.style.color = 'darkslategray'

                thisBtn.style.backgroundColor = 'darkslategray';
                thisBtn.style.color = 'black';

                console.log('was unchecked');

            };            

        });

    };

};


    








