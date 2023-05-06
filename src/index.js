import './style.css';
import { ProjectListManager } from './projectList.js';

let docBody = document.querySelector('body');

let headerDiv = document.createElement('div');
headerDiv.setAttribute('id', 'header');
let titleDivSpacer = document.createElement('div');
headerDiv.appendChild(titleDivSpacer);
let titleDiv = document.createElement('div');
titleDiv.id = 'header-title-div';
titleDiv.textContent = '2Dü';
headerDiv.appendChild(titleDiv);
let titleDivSpacer2 = document.createElement('div');
headerDiv.appendChild(titleDivSpacer2);

let sidebar = document.createElement('div');
sidebar.id = 'sidebar';



let bodyDiv = document.createElement('div');
bodyDiv.setAttribute('id', 'body');

let footerDiv = document.createElement('div');
footerDiv.setAttribute('id', 'footer');

docBody.appendChild(headerDiv);
docBody.appendChild(sidebar);
docBody.appendChild(bodyDiv);
docBody.appendChild(footerDiv);

//sidebar stuff

ProjectListManager.appendProjectList('Renovate House', 'renovate house', '5/7/2023', 'Low');


ProjectListManager.appendProjectList('Move to NY', 'move to new york', '8/5/2023', 'High');


ProjectListManager.removeProjectFromProjectList('Renovate House');

console.log(ProjectListManager.getProjectList()[0].getProjectName());


let test = ProjectListManager.getProjectList()[0]
