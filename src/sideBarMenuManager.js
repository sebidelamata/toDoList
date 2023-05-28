import { ProjectListManager } from './projectList.js';
import { GeneralTask } from './generalTasks.js';
//import { AddTaskButtonManager } from './addTaskButtonManager.js';

const SidebarMenuManager = () => {

let bodyDiv = document.querySelector('#body'); 

if(ProjectListManager.getProjectList()[0] === undefined || ProjectListManager.getProjectList()[0].getProjectName() !== 'General Tasks'){
    // create initial project (if it doesnt already exist)
    ProjectListManager.appendProjectList(
        'General Tasks', 
        'A junk drawer for your 2düs',
        null,
        "Low"
    );
}

GeneralTask();

let projectName = 'General Tasks';

const setProjectName = (_projectName) => {
    projectName = _projectName;
};

let addTasksButton = document.querySelector('#sidebar-icon-sub-sub-div'); 

let selectedProjectIndex = ProjectListManager.getProjectList().findIndex(_project => {
    return _project.getProjectName() === projectName;
});



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
    addTaskTitle.textContent = `Add Task to ${projectName}`;
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
    submitButton.type = 'button';
    submitButton.textContent = 'Add';
    submitButton.id = 'submit-button';
    let cancelDiv = document.createElement('div');
    cancelDiv.id = 'cancel-div';
    addTaskBody.appendChild(cancelDiv);
    let cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelDiv.appendChild(cancelButton);
    cancelButton.textContent = 'Cancel';
    cancelButton.id = 'cancel-button';
    //cancelButton.formNoValidate = true;


    const addTask = (e) => {

        e.preventDefault();
        let selectedForm = document.querySelector('form');
        let nameInput = selectedForm.name.value;
        let descriptionInput = selectedForm.description.value;
        let dateInput = selectedForm.date.value;
        let priorityInput = selectedForm.priority.value;

        
        ProjectListManager.getProjectList()[selectedProjectIndex].appendProjectTasks(
            nameInput,
            descriptionInput,
            dateInput,
            priorityInput,
        );
        // remove add task modal
        greyout.remove();
        GeneralTask();

    }

    const cancelTask = (e) => {
        e.preventDefault();
        // remove add task modal
        greyout.remove();
        GeneralTask();
    }

    let docForm = document.querySelector('form');

    submitButton.addEventListener('click', addTask);

    let cancelSelect = document.querySelector('#cancel-button');

    cancelSelect.addEventListener('click', cancelTask);

};

addTasksButton.addEventListener('click', addTasksPopup);

let generalTasksButton = document.querySelector('#general-tasks-section'); 

generalTasksButton.addEventListener('click', GeneralTask);

return {
    setProjectName,
}

};

export { SidebarMenuManager };