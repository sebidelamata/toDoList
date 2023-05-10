import { ProjectListManager } from './projectList.js';
import { GeneralTask } from './generalTasks.js';

const AddTaskButtonManager = () => {

let addTasksButton = document.querySelector('#sidebar-icon-sub-sub-div'); 

const addTasksPopup = () => {
    
    let bodyDiv = document.querySelector('body');
    
    let greyout = document.createElement('div');
    greyout.id = 'add-task-greyout';
    bodyDiv.appendChild(greyout);
    
    let addTaskContainer = document.createElement('div');
    addTaskContainer.id = 'add-task-container';
    addTaskContainer.classList.add('add-task-button-outline');
    greyout.appendChild(addTaskContainer);



};

addTasksButton.addEventListener('click', addTasksPopup);

};

export { AddTaskButtonManager };