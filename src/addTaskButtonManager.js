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
    let addTaskBody = document.createElement('form');
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
    taskContainerDateInput.type = 'date';
    taskContainerDate.appendChild(taskContainerDateInput);
    taskContainerDate.id = 'task-container-date';
    addTaskBody.appendChild(taskContainerDate); 

    //Create array of options to be added
    var priorityChoices = ["High", "Medium", "Low"];

    let taskContainerPriority = document.createElement('div');
    taskContainerPriority.id = 'task-container-priority';
    taskContainerPriority.classList.add('add-task-inputs');
    let taskContainerPriorityLabel = document.createElement('label');
    taskContainerPriorityLabel.setAttribute('for', 'priority');
    taskContainerPriorityLabel.textContent = 'Priority';
    taskContainerPriority.appendChild(taskContainerPriorityLabel);
    let taskContainerPriorityInput = document.createElement('select');
    taskContainerPriorityInput.id = 'task-priority-select';
    taskContainerPriorityInput.setAttribute('name', 'priority');
    taskContainerPriorityInput.setAttribute('required', 'required');
    //Create and append the options
    for (var i = 0; i < priorityChoices.length; i++) {
        var option = document.createElement("option");
        option.value = priorityChoices[i];
        option.text = priorityChoices[i];
        taskContainerPriorityInput.appendChild(option);
}
    taskContainerPriority.appendChild(taskContainerPriorityInput);
    addTaskBody.appendChild(taskContainerPriority);


    let submitDiv = document.createElement('div');
    submitDiv.id = 'submit-div';
    addTaskBody.appendChild(submitDiv);
    let submitButton = document.createElement('button');
    submitDiv.appendChild(submitButton);
    submitButton.type = 'submit';
    submitButton.textContent = 'Add';
    submitButton.id = 'submit-button';
    let cancelDiv = document.createElement('div');
    cancelDiv.id = 'cancel-div';
    addTaskBody.appendChild(cancelDiv);
    let cancelButton = document.createElement('button');
    cancelDiv.appendChild(cancelButton);
    cancelButton.textContent = 'Cancel';
    cancelButton.id = 'cancel-button';


    const addTask = (e) => {
        e.preventDefault();
        console.log('hi');
    }

    const cancelTask = (e) => {
        e.preventDefault();
        console.log(e.target.parentNode.parentNode.parentNode.parentNode.remove());
    }

    let docForm = document.querySelector('form');

    docForm.addEventListener('submit', addTask);

    let cancelSelect = document.querySelector('#cancel-button');

    cancelSelect.addEventListener('click', cancelTask);


    let selectedProject = ProjectListManager.getProjectList().filter(_project => {
        return _project.getProjectName() === _projectName;
    });

    selectedProject = selectedProject[0];

    console.log(selectedProject.getProjectName());



};

addTasksButton.addEventListener('click', addTasksPopup);

};

export { AddTaskButtonManager };