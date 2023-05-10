import { ProjectListManager } from './projectList.js';
import { GeneralTask } from './generalTasks.js';

const SidebarMenuManager = () => {

let bodyDiv = document.querySelector('#body'); 

// create initial project
ProjectListManager.appendProjectList(
    'General Tasks', 
    'A junk drawer for your 2düs',
    null,
    "Low"
);

GeneralTask();

let generalTasksButton = document.querySelector('#general-tasks-section'); 

generalTasksButton.addEventListener('click', GeneralTask);

};

export { SidebarMenuManager };