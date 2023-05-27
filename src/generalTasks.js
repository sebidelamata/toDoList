import { ProjectListManager } from './projectList.js';

const GeneralTask = () => {

let bodyDiv = document.querySelector('#body'); 

if(bodyDiv.childNodes.length > 0){
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

let _projectList = ProjectListManager.getProjectList();
// for(let i=0; i<_projectList)

//console.log(_projectList)

}; 

export { GeneralTask };