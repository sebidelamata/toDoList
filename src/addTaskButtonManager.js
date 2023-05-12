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
    let taskContainerName = document.createElement('div');
    taskContainerName.id = 'task-container-name';
    taskContainerName.classList.add('add-task-inputs');
    let taskContainerNameLabel = document.createElement('label');
    taskContainerNameLabel.setAttribute('for', 'name');
    taskContainerNameLabel.textContent = 'Name';
    taskContainerName.appendChild(taskContainerNameLabel);
    let taskContainerNameInput = document.createElement('input');
    taskContainerNameInput.setAttribute('name', 'name');
    taskContainerNameInput.setAttribute('required', 'required');
    taskContainerNameInput.type = 'text';
    taskContainerName.appendChild(taskContainerNameInput);
    addTaskBody.appendChild(taskContainerName); 
    let taskContainerDescription = document.createElement('div');
    taskContainerDescription.id = 'task-container-description';
    taskContainerDescription.classList.add('add-task-inputs');
    let taskContainerDescriptionLabel = document.createElement('label');
    taskContainerDescriptionLabel.setAttribute('for', 'description');
    taskContainerDescriptionLabel.textContent = 'Description';
    taskContainerDescription.appendChild(taskContainerDescriptionLabel);
    let taskContainerDescriptionInput = document.createElement('input');
    taskContainerDescriptionInput.setAttribute('name', 'description');
    taskContainerDescriptionInput.setAttribute('required', 'required');
    taskContainerDescriptionInput.type = 'text';
    taskContainerDescription.appendChild(taskContainerDescriptionInput);
    addTaskBody.appendChild(taskContainerDescription); 
    let taskContainerDate = document.createElement('div');
    taskContainerDate.classList.add('add-task-inputs');
    let taskContainerDateLabel = document.createElement('label');
    taskContainerDateLabel.setAttribute('for', 'date');
    taskContainerDateLabel.textContent = 'Due Date';
    taskContainerDate.appendChild(taskContainerDateLabel);
    let taskContainerDateInput = document.createElement('input');
    taskContainerDateInput.setAttribute('name', 'date');
    taskContainerDateInput.setAttribute('required', 'required');
    taskContainerDateInput.type = 'text';
    taskContainerDate.appendChild(taskContainerDateInput);
    taskContainerDate.id = 'task-container-date';
    addTaskBody.appendChild(taskContainerDate); 
    let taskContainerPriority = document.createElement('div');
    taskContainerPriority.id = 'task-container-priority';
    taskContainerPriority.classList.add('add-task-inputs');
    let taskContainerPriorityLabel = document.createElement('label');
    taskContainerPriorityLabel.setAttribute('for', 'priority');
    taskContainerPriorityLabel.textContent = 'Priority';
    taskContainerPriority.appendChild(taskContainerPriorityLabel);
    let taskContainerPriorityInput = document.createElement('input');
    taskContainerPriorityInput.setAttribute('name', 'priority');
    taskContainerPriorityInput.setAttribute('required', 'required');
    taskContainerPriorityInput.type = 'text';
    taskContainerPriority.appendChild(taskContainerPriorityInput);
    addTaskBody.appendChild(taskContainerPriority);

    let selectedProject = ProjectListManager.getProjectList().filter(_project => {
        return _project.getProjectName() === _projectName;
    });

    selectedProject = selectedProject[0];

    console.log(selectedProject.getProjectName());



};

addTasksButton.addEventListener('click', addTasksPopup);

};

export { AddTaskButtonManager };