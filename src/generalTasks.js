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
for(let i=0; i<taskArray.length; i ++){
    console.log(taskArray[i].getTaskName())
}

//console.log(_projectList)

}; 

export { GeneralTask };