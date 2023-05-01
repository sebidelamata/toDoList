import './style.css';

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