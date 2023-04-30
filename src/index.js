import './style.css';

let docBody = document.querySelector('body');

let headerDiv = document.createElement('div');
headerDiv.setAttribute('id', 'header');

let bodyDiv = document.createElement('div');
bodyDiv.setAttribute('id', 'body');

let footerDiv = document.createElement('div');
footerDiv.setAttribute('id', 'footer');

docBody.appendChild(headerDiv);
docBody.appendChild(bodyDiv);
docBody.appendChild(footerDiv);