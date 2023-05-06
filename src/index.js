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
let sidebarIconDiv = document.createElement('div');
sidebarIconDiv.id = 'sidebar-icon-div';
sidebar.appendChild(sidebarIconDiv);
let sidebarIconSubDiv1 = document.createElement('div');
let sidebarIconSubDiv2 = document.createElement('div');
sidebarIconSubDiv2.id = 'sidebar-icon-sub-div';
let sidebarIconSubDiv3 = document.createElement('div');
sidebarIconDiv.appendChild(sidebarIconSubDiv1);
sidebarIconDiv.appendChild(sidebarIconSubDiv2);
sidebarIconDiv.appendChild(sidebarIconSubDiv3);
let sidebarIconSubSubDiv1 = document.createElement('div');
let sidebarIconSubSubDiv2 = document.createElement('div');
sidebarIconSubSubDiv2.id = 'sidebar-icon-sub-sub-div';
sidebarIconSubSubDiv2.classList.add('button-outline');
sidebarIconSubSubDiv2.textContent = '+';
let sidebarIconSubSubDiv3 = document.createElement('div');
sidebarIconSubDiv2.appendChild(sidebarIconSubSubDiv1);
sidebarIconSubDiv2.appendChild(sidebarIconSubSubDiv2);
sidebarIconSubDiv2.appendChild(sidebarIconSubSubDiv3);



