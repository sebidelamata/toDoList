import "./style.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import { SidebarMenuManager } from "./sideBarMenuManager.js";

let docBody = document.querySelector("body");

let headerDiv = document.createElement("div");
headerDiv.setAttribute("id", "header");
let titleDivSpacer = document.createElement("div");
headerDiv.appendChild(titleDivSpacer);
let titleDiv = document.createElement("div");
titleDiv.id = "header-title-div";
titleDiv.textContent = "2Dü";
headerDiv.appendChild(titleDiv);
let titleDivSpacer2 = document.createElement("div");
headerDiv.appendChild(titleDivSpacer2);

let sidebar = document.createElement("div");
sidebar.id = "sidebar";

let bodyDiv = document.createElement("div");
bodyDiv.setAttribute("id", "body");

let footerDiv = document.createElement("div");
footerDiv.setAttribute("id", "footer");

docBody.appendChild(headerDiv);
docBody.appendChild(sidebar);
docBody.appendChild(bodyDiv);
docBody.appendChild(footerDiv);

//sidebar stuff
let newTaskIconDiv = document.createElement("div");
newTaskIconDiv.id = "sidebar-icon-div";
sidebar.appendChild(newTaskIconDiv);
let sidebarIconSubDiv1 = document.createElement("div");
let sidebarIconSubDiv2 = document.createElement("div");
sidebarIconSubDiv2.id = "sidebar-icon-sub-div";
let sidebarIconSubDiv3 = document.createElement("div");
newTaskIconDiv.appendChild(sidebarIconSubDiv1);
newTaskIconDiv.appendChild(sidebarIconSubDiv2);
newTaskIconDiv.appendChild(sidebarIconSubDiv3);
let sidebarIconSubSubDiv1 = document.createElement("div");
let sidebarIconSubSubDiv2 = document.createElement("div");
sidebarIconSubSubDiv2.id = "sidebar-icon-sub-sub-div";
sidebarIconSubSubDiv2.classList.add("button-outline");
sidebarIconSubSubDiv2.textContent = "+";
let sidebarIconSubSubDiv3 = document.createElement("div");
sidebarIconSubDiv2.appendChild(sidebarIconSubSubDiv1);
sidebarIconSubDiv2.appendChild(sidebarIconSubSubDiv2);
sidebarIconSubDiv2.appendChild(sidebarIconSubSubDiv3);

let generalTasksSection = document.createElement("div");
generalTasksSection.id = "general-tasks-section";
generalTasksSection.classList.add("button-outline");
generalTasksSection.textContent = "General Tasks";
sidebar.appendChild(generalTasksSection);

let projectsSection = document.createElement("div");
projectsSection.id = "sidebar-projects-section";
projectsSection.classList.add("button-outline");
sidebar.appendChild(projectsSection);
let projectsSectionTitle = document.createElement("div");
projectsSectionTitle.id = "sidebar-projects-section-title";
projectsSectionTitle.textContent = "Projects";
projectsSection.appendChild(projectsSectionTitle);
let listedProjects = document.createElement("div");
listedProjects.id = "listed-projects";
projectsSection.appendChild(listedProjects);
let addProjectButton = document.createElement("div");
addProjectButton.id = "add-project-button";
addProjectButton.classList.add("sidebar-links");
addProjectButton.textContent = "Add Project +";
projectsSection.appendChild(addProjectButton);

SidebarMenuManager();
