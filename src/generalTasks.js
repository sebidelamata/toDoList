import { ProjectListManager } from './projectList.js';

const GeneralTask = () => {

let bodyDiv = document.querySelector('#body'); 

if(bodyDiv.childNodes.length !== undefined && bodyDiv.childNodes.length > 0){
    bodyDiv.removeChild(bodyDiv.firstElementChild);
}

    // task list
let projectsContainer = document.createElement('div');
projectsContainer.id = 'projects-container';
projectsContainer.classList.add('button-outline');
bodyDiv.appendChild(projectsContainer);
let projectsContainerTitle = document.createElement('div');
projectsContainerTitle.id = 'projects-container-title';
projectsContainerTitle.textContent = 'General Tasks';
projectsContainer.appendChild(projectsContainerTitle);
let projectsContainerBody = document.createElement('div');
projectsContainerBody.id = 'projects-container-body';
projectsContainer.appendChild(projectsContainerBody);

let taskArray = ProjectListManager.getProjectList()[0].getProjectTasks();
for(let i=0; i<taskArray.length; i++){
    let taskRow = document.createElement('div');
    projectsContainerBody.appendChild(taskRow);
    taskRow.id = `task-row-${i}`;
    taskRow.classList.add('task-row');
    let taskName = document.createElement('div');
    taskRow.appendChild(taskName);
    taskName.id = `task-name-${i}`;
    taskName.classList.add('task-name'); 
    taskName.textContent = taskArray[i].getTaskName();
    let taskDescription = document.createElement('div');
    taskRow.appendChild(taskDescription);
    taskDescription.id = `task-description-${i}`;
    taskDescription.classList.add('task-description'); 
    taskDescription.textContent = taskArray[i].getTaskDescription();
    let taskDate = document.createElement('div');
    taskRow.appendChild(taskDate);
    taskDate.id = `task-date-${i}`;
    taskDate.classList.add('task-date'); 
    taskDate.textContent = taskArray[i].getTaskDate();
    let taskPriority = document.createElement('div');
    taskRow.appendChild(taskPriority);
    taskPriority.id = `task-priority-${i}`;
    taskPriority.classList.add('task-priority'); 
    taskPriority.textContent = taskArray[i].getTaskPriority();
    let taskEdit = document.createElement('div');
    taskRow.appendChild(taskEdit);
    taskEdit.id = `task-edit-${i}`;
    taskEdit.classList.add('task-edit');
    taskEdit.innerHTML = ' <i class="fas fa-edit"></i>';
    let taskDelete = document.createElement('div');
    taskRow.appendChild(taskDelete);
    taskDelete.id = `task-delete-${i}`;
    taskDelete.classList.add('task-delete'); 
    taskDelete.innerHTML = ' <i class="fas fa-trash"></i>';

}

//console.log(_projectList)

// listen on the project tasks window and delete tasks
let deleteTaskButtons = document.querySelectorAll('.task-delete');

const deleteTaskFromProject = (e) => {
    
    let taskId = e.target.id.substring(12);
    
    ProjectListManager.getProjectList()[0].deleteProjectTask(taskId);

    GeneralTask();

};

deleteTaskButtons.forEach(function(deleteTaskButton){
    deleteTaskButton.addEventListener('click', deleteTaskFromProject);
});

// listen on the project tasks window and edit task

let editTaskButtons = document.querySelectorAll('.task-edit');

const editTaskFromProject = (e) => {

    let taskId = e.target.id.substring(10);

    console.log(taskId)

    let projectName = ProjectListManager.getProjectList()[0].getProjectName();
    
    let taskName = ProjectListManager.getProjectList()[0].getProjectTasks()[taskId].getTaskName();

    let bodyDiv = document.querySelector('body');
        
    let greyout = document.createElement('div');
    greyout.id = 'add-task-greyout';
    bodyDiv.appendChild(greyout);
    
        
    let editTaskContainer = document.createElement('div');
    editTaskContainer.id = 'add-task-container';
    editTaskContainer.classList.add('add-task-button-outline');
    greyout.appendChild(editTaskContainer);
    let editTaskTitle = document.createElement('div');
    editTaskTitle.id = 'add-task-title';
    editTaskTitle.textContent = `Edit ${taskName} from ${projectName}`;
    editTaskContainer.appendChild(editTaskTitle);
    let editTaskBody = document.createElement('form');
    editTaskBody.id = 'add-task-body';
    editTaskContainer.appendChild(editTaskBody);
    let editTaskContainerName = document.createElement('div');
    editTaskContainerName.id = 'add-task-container-name';
    editTaskContainerName.classList.add('add-task-inputs');
    let editTaskContainerNameLabel = document.createElement('label');
    editTaskContainerNameLabel.setAttribute('for', 'name');
    editTaskContainerNameLabel.textContent = 'Name';
    editTaskContainerName.appendChild(editTaskContainerNameLabel);
    let editTaskContainerNameInput = document.createElement('input');
    editTaskContainerNameInput.setAttribute('name', 'name');
    editTaskContainerNameInput.setAttribute('required', 'required');
    editTaskContainerNameInput.type = 'text';
    editTaskContainerNameInput.value = ProjectListManager.getProjectList()[0].getProjectTasks()[taskId].getTaskName();
    editTaskContainerName.appendChild(editTaskContainerNameInput);
    editTaskBody.appendChild(editTaskContainerName); 
    let editTaskContainerDescription = document.createElement('div');
    editTaskContainerDescription.id = 'add-task-container-description';
    editTaskContainerDescription.classList.add('add-task-inputs');
    let editTaskContainerDescriptionLabel = document.createElement('label');
    editTaskContainerDescriptionLabel.setAttribute('for', 'description');
    editTaskContainerDescriptionLabel.textContent = 'Description';
    editTaskContainerDescription.appendChild(editTaskContainerDescriptionLabel);
    let editTaskContainerDescriptionInput = document.createElement('input');
    editTaskContainerDescriptionInput.setAttribute('name', 'description');
    editTaskContainerDescriptionInput.setAttribute('required', 'required');
    editTaskContainerDescriptionInput.value = ProjectListManager.getProjectList()[0].getProjectTasks()[taskId].getTaskDescription();
    editTaskContainerDescriptionInput.type = 'text';
    editTaskContainerDescription.appendChild(editTaskContainerDescriptionInput);
    editTaskBody.appendChild(editTaskContainerDescription); 
    let editTaskContainerDate = document.createElement('div');
    editTaskContainerDate.classList.add('add-task-inputs');
    let editTaskContainerDateLabel = document.createElement('label');
    editTaskContainerDateLabel.setAttribute('for', 'date');
    editTaskContainerDateLabel.textContent = 'Due Date';
    editTaskContainerDate.appendChild(editTaskContainerDateLabel);
    let editTaskContainerDateInput = document.createElement('input');
    editTaskContainerDateInput.setAttribute('name', 'date');
    editTaskContainerDateInput.setAttribute('required', 'required');
    editTaskContainerDateInput.type = 'date';
    editTaskContainerDateInput.value = ProjectListManager.getProjectList()[0].getProjectTasks()[taskId].getTaskDate();
    editTaskContainerDate.appendChild(editTaskContainerDateInput);
    editTaskContainerDate.id = 'add-task-container-date';
    editTaskBody.appendChild(editTaskContainerDate); 
    
    //Create array of options to be added
    var priorityChoices = ["High", "Medium", "Low"];
    
    let editTaskContainerPriority = document.createElement('div');
    editTaskContainerPriority.id = 'task-container-priority';
    editTaskContainerPriority.classList.add('add-task-inputs');
    let editTaskContainerPriorityLabel = document.createElement('label');
    editTaskContainerPriorityLabel.setAttribute('for', 'priority');
    editTaskContainerPriorityLabel.textContent = 'Priority';
    editTaskContainerPriority.appendChild(editTaskContainerPriorityLabel);
    let editTaskContainerPriorityInput = document.createElement('select');
    editTaskContainerPriorityInput.id = 'task-priority-select';
    editTaskContainerPriorityInput.setAttribute('name', 'priority');
    editTaskContainerPriorityInput.setAttribute('required', 'required');
    //Create and append the options
    for (var i = 0; i < priorityChoices.length; i++) {
        var option = document.createElement("option");
        option.value = priorityChoices[i];
        option.text = priorityChoices[i];
        editTaskContainerPriorityInput.appendChild(option);
    }
    editTaskContainerPriority.appendChild(editTaskContainerPriorityInput);
    editTaskContainerPriorityInput.value = ProjectListManager.getProjectList()[0].getProjectTasks()[taskId].getTaskPriority();
    editTaskBody.appendChild(editTaskContainerPriority);
    
    
    let submitDiv = document.createElement('div');
    submitDiv.id = 'submit-div';
    editTaskBody.appendChild(submitDiv);
    let submitButton = document.createElement('button');
    submitDiv.appendChild(submitButton);
    submitButton.type = 'button';
    submitButton.textContent = 'Update Task';
    submitButton.id = 'submit-button';
    let cancelDiv = document.createElement('div');
    cancelDiv.id = 'cancel-div';
    editTaskBody.appendChild(cancelDiv);
    let cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelDiv.appendChild(cancelButton);
    cancelButton.textContent = 'Cancel';
    cancelButton.id = 'cancel-button';
    
    const editTask = (e) => {
    
        e.preventDefault();
        let selectedForm = document.querySelector('form');
        let nameInput = selectedForm.name.value;
        let descriptionInput = selectedForm.description.value;
        let dateInput = selectedForm.date.value;
        let priorityInput = selectedForm.priority.value;
    
            
        ProjectListManager.getProjectList()[0].getProjectTasks()[taskId].editTaskName(nameInput);
        ProjectListManager.getProjectList()[0].getProjectTasks()[taskId].editTaskDescription(descriptionInput);
        ProjectListManager.getProjectList()[0].getProjectTasks()[taskId].editTaskDate(dateInput);
        ProjectListManager.getProjectList()[0].getProjectTasks()[taskId].editTaskPriority(priorityInput);
            // remove add task modal
        greyout.remove();
        GeneralTask();
    
    };
    
    const cancelTask = (e) => {
        e.preventDefault();
        // remove add task modal
        greyout.remove();
        GeneralTask();
        }
    
    let docForm = document.querySelector('form');
    
    submitButton.addEventListener('click', editTask);
    
    let cancelSelect = document.querySelector('#cancel-button');
    
    cancelSelect.addEventListener('click', cancelTask);
    
};

editTaskButtons.forEach(function(editTaskButton){
    editTaskButton.addEventListener('click', editTaskFromProject);
});

// listen to the projects window
let addProjectButton = document.querySelector('#add-project-button');

const addProjectPopup = () => {
    
    let bodyDiv = document.querySelector('body');
    
    let greyout = document.createElement('div');
    greyout.id = 'add-task-greyout';
    bodyDiv.appendChild(greyout);

    
    let addProjectContainer = document.createElement('div');
    addProjectContainer.id = 'add-task-container';
    addProjectContainer.classList.add('add-task-button-outline');
    greyout.appendChild(addProjectContainer);
    let addProjectTitle = document.createElement('div');
    addProjectTitle.id = 'add-task-title';
    addProjectTitle.textContent = 'Add Project';
    addProjectContainer.appendChild(addProjectTitle);
    let addProjectBody = document.createElement('form');
    addProjectBody.id = 'add-task-body';
    addProjectContainer.appendChild(addProjectBody);
    let projectContainerName = document.createElement('div');
    projectContainerName.id = 'task-container-name';
    projectContainerName.classList.add('add-task-inputs');
    let projectContainerNameLabel = document.createElement('label');
    projectContainerNameLabel.setAttribute('for', 'name');
    projectContainerNameLabel.textContent = 'Name';
    projectContainerName.appendChild(projectContainerNameLabel);
    let projectContainerNameInput = document.createElement('input');
    projectContainerNameInput.setAttribute('name', 'name');
    projectContainerNameInput.setAttribute('required', 'required');
    projectContainerNameInput.type = 'text';
    projectContainerName.appendChild(projectContainerNameInput);
    addProjectBody.appendChild(projectContainerName); 
    let projectContainerDescription = document.createElement('div');
    projectContainerDescription.id = 'task-container-description';
    projectContainerDescription.classList.add('add-task-inputs');
    let projectContainerDescriptionLabel = document.createElement('label');
    projectContainerDescriptionLabel.setAttribute('for', 'description');
    projectContainerDescriptionLabel.textContent = 'Description';
    projectContainerDescription.appendChild(projectContainerDescriptionLabel);
    let projectContainerDescriptionInput = document.createElement('input');
    projectContainerDescriptionInput.setAttribute('name', 'description');
    projectContainerDescriptionInput.setAttribute('required', 'required');
    projectContainerDescriptionInput.type = 'text';
    projectContainerDescription.appendChild(projectContainerDescriptionInput);
    addProjectBody.appendChild(projectContainerDescription); 
    let projectContainerDate = document.createElement('div');
    projectContainerDate.classList.add('add-task-inputs');
    let projectContainerDateLabel = document.createElement('label');
    projectContainerDateLabel.setAttribute('for', 'date');
    projectContainerDateLabel.textContent = 'Due Date';
    projectContainerDate.appendChild(projectContainerDateLabel);
    let projectContainerDateInput = document.createElement('input');
    projectContainerDateInput.setAttribute('name', 'date');
    projectContainerDateInput.setAttribute('required', 'required');
    projectContainerDateInput.type = 'date';
    projectContainerDate.appendChild(projectContainerDateInput);
    projectContainerDate.id = 'task-container-date';
    addProjectBody.appendChild(projectContainerDate); 

    //Create array of options to be added
    var priorityChoices = ["High", "Medium", "Low"];

    let projectContainerPriority = document.createElement('div');
    projectContainerPriority.id = 'task-container-priority';
    projectContainerPriority.classList.add('add-task-inputs');
    let projectContainerPriorityLabel = document.createElement('label');
    projectContainerPriorityLabel.setAttribute('for', 'priority');
    projectContainerPriorityLabel.textContent = 'Priority';
    projectContainerPriority.appendChild(projectContainerPriorityLabel);
    let projectContainerPriorityInput = document.createElement('select');
    projectContainerPriorityInput.id = 'task-priority-select';
    projectContainerPriorityInput.setAttribute('name', 'priority');
    projectContainerPriorityInput.setAttribute('required', 'required');
    //Create and append the options
    for (var i = 0; i < priorityChoices.length; i++) {
        var option = document.createElement("option");
        option.value = priorityChoices[i];
        option.text = priorityChoices[i];
        projectContainerPriorityInput.appendChild(option);
}
    projectContainerPriority.appendChild(projectContainerPriorityInput);
    addProjectBody.appendChild(projectContainerPriority);


    let submitDiv = document.createElement('div');
    submitDiv.id = 'submit-div';
    addProjectBody.appendChild(submitDiv);
    let submitButton = document.createElement('button');
    submitDiv.appendChild(submitButton);
    submitButton.type = 'button';
    submitButton.textContent = 'Add';
    submitButton.id = 'submit-button';
    let cancelDiv = document.createElement('div');
    cancelDiv.id = 'cancel-div';
    addProjectBody.appendChild(cancelDiv);
    let cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelDiv.appendChild(cancelButton);
    cancelButton.textContent = 'Cancel';
    cancelButton.id = 'cancel-button';

    const addProject = (e) => {

        e.preventDefault();
        let selectedForm = document.querySelector('form');
        let nameInput = selectedForm.name.value;
        let descriptionInput = selectedForm.description.value;
        let dateInput = selectedForm.date.value;
        let priorityInput = selectedForm.priority.value;

        
        ProjectListManager.appendProjectList(
            nameInput,
            descriptionInput,
            dateInput,
            priorityInput
        );
        // remove add task modal
        greyout.remove();
        GeneralTask();

    }

    const cancelProject = (e) => {
        e.preventDefault();
        // remove add task modal
        greyout.remove();
        GeneralTask();
    }

    let docForm = document.querySelector('form');

    submitButton.addEventListener('click', addProject);

    let cancelSelect = document.querySelector('#cancel-button');

    cancelSelect.addEventListener('click', cancelProject);

};

addProjectButton.addEventListener('click', addProjectPopup);

console.log(ProjectListManager.getProjectList())

}; 

export { GeneralTask };