import { ProjectListManager } from './projectList.js';
import { GeneralTask } from './generalTasks.js';

const AddTaskButtonManager = (_projectName) => {

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
    let addTaskTitle = document.createElement('div');
    addTaskTitle.id = 'add-task-title';
    addTaskTitle.textContent = `Add Task to ${_projectName}`;
    addTaskContainer.appendChild(addTaskTitle);
    let addTaskBody = document.createElement('div');
    addTaskBody.id = 'add-task-body';
    addTaskContainer.appendChild(addTaskBody);

    let selectedProject = ProjectListManager.getProjectList().filter(_project => {
        return _project.getProjectName() === _projectName;
    });

    selectedProject = selectedProject[0];

    console.log(selectedProject.getProjectName());



};

addTasksButton.addEventListener('click', addTasksPopup);

};

export { AddTaskButtonManager };