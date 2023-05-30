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
projectsContainerTitle.textContent = ProjectListManager.getProjectList()[0].getProjectName();
projectsContainer.appendChild(projectsContainerTitle);
let projectDetails = document.createElement('div');
projectDetails.id = 'project-details';
projectDetails.textContent = ProjectListManager.getProjectList()[0].getProjectDate() !== null ? `${ProjectListManager.getProjectList()[0].getProjectDescription()}, a ${ProjectListManager.getProjectList()[0].getProjectPriority()} priority project due on ${ProjectListManager.getProjectList()[0].getProjectDate()}` : `${ProjectListManager.getProjectList()[0].getProjectDescription()} a ${ProjectListManager.getProjectList()[0].getProjectPriority()} priority project`;
projectsContainer.appendChild(projectDetails);
let projectPriority = document.createElement('div');
projectPriority.id = 'project-priority';
projectPriority.textContent = ProjectListManager.getProjectList()[0].getProjectDate() !== null ? `A ${ProjectListManager.getProjectList()[0].getProjectPriority()} Priority Project Due on ${ProjectListManager.getProjectList()[0].getProjectDate()}` : `A ${ProjectListManager.getProjectList()[0].getProjectPriority()} Priority Project`;
projectsContainer.appendChild(projectPriority);
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


// so we can clear the div of child divs
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// display project names on the project list board
let listedProjects = document.querySelector('#listed-projects'); 
removeAllChildNodes(listedProjects);
console.log(ProjectListManager.getProjectList())



if(ProjectListManager.getProjectList().length > 1){
    for(let i=1; i<ProjectListManager.getProjectList().length; i++){
        let projectRow = document.createElement('div');
        projectRow.id = `project-row-${i}`;
        listedProjects.appendChild(projectRow);
        projectRow.textContent = ProjectListManager.getProjectList()[i].getProjectName();
        projectRow.classList.add('project-row');
    }
}

}; 

export { GeneralTask };