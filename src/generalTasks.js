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
})

}; 

export { GeneralTask };