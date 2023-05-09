import { ProjectListManager } from './projectList.js';
import { GeneralTask } from './generalTasks.js';

const SidebarMenuManager = () => {

let bodyDiv = document.querySelector('#body'); 

GeneralTask();

let generalTasksButton = document.querySelector('#general-tasks-section'); 

generalTasksButton.addEventListener('click', GeneralTask);

};

export { SidebarMenuManager };