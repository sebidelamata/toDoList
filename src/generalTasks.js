import { LocalStorageManager } from './localStorageManager.js';
import { ProjectListManager } from './projectList.js';

const GeneralTask = () => {

    let selectedProjectIndex = ProjectListManager.getSelectedProject();
    let selectedProjectName = ProjectListManager.getProjectList()[selectedProjectIndex].getProjectName();

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
    projectsContainerTitle.textContent = selectedProjectName;
    projectsContainer.appendChild(projectsContainerTitle);
    let projectDetails = document.createElement('div');
    projectDetails.id = 'project-details';
    projectDetails.textContent = `${ProjectListManager.getProjectList()[selectedProjectIndex].getProjectDescription()}`;
    projectsContainer.appendChild(projectDetails);
    let projectPriority = document.createElement('div');
    projectPriority.id = 'project-priority';
    projectPriority.textContent = ProjectListManager.getProjectList()[selectedProjectIndex].getProjectDate() !== null && ProjectListManager.getProjectList()[selectedProjectIndex].getProjectDate() !== '' ? `A ${ProjectListManager.getProjectList()[selectedProjectIndex].getProjectPriority()} Priority Project Due on ${ProjectListManager.getProjectList()[selectedProjectIndex].getProjectDate()}` : `A ${ProjectListManager.getProjectList()[selectedProjectIndex].getProjectPriority()} Priority Project`;
    projectsContainer.appendChild(projectPriority);
    let projectsContainerBody = document.createElement('div');
    projectsContainerBody.id = 'projects-container-body';
    projectsContainer.appendChild(projectsContainerBody);
    let projectContainerFooter = document.createElement('div');
    projectContainerFooter.id = 'projects-container-footer';
    projectsContainer.appendChild(projectContainerFooter);
    let projectEdit = document.createElement('div');
    projectEdit.id = 'projects-container-edit';
    projectContainerFooter.appendChild(projectEdit);
    projectEdit.classList.add('project-edit'); 
    projectEdit.innerHTML = '<i class="fas fa-edit"></i>';
    let projectComplete = document.createElement('div');
    projectComplete.id = 'projects-container-complete';
    projectContainerFooter.appendChild(projectComplete)
    projectComplete.classList.add('project-complete'); 
    projectComplete.innerHTML = ProjectListManager.getProjectList()[selectedProjectIndex].getProjectComplete() === false ? '<i class="fa-regular fa-square"></i>' : '<i class="fa-regular fa-check-square"></i>';
    let projectDelete = document.createElement('div');
    projectDelete.id = 'projects-container-delete';
    projectContainerFooter.appendChild(projectDelete)
    projectDelete.classList.add('project-delete'); 
    projectDelete.innerHTML = ' <i class="fas fa-trash"></i>';

     // listen on the project tasks window and edit task

    let editTaskButton = document.querySelector('#projects-container-edit');

     const editProject = (e) => {
 
         let bodyDiv = document.querySelector('body');
             
         let greyout = document.createElement('div');
         greyout.id = 'add-task-greyout';
         bodyDiv.appendChild(greyout);
         
             
         let editTaskContainer = document.createElement('div');
         editTaskContainer.id = 'add-task-container';
         editTaskContainer.classList.add('add-task-button-outline');
         greyout.appendChild(editTaskContainer);
         let editTaskTitle = document.createElement('div');
         editTaskTitle.id = 'add-task-title';
         editTaskTitle.textContent = `Edit ${selectedProjectName}`;
         editTaskContainer.appendChild(editTaskTitle);
         let editTaskBody = document.createElement('form');
         editTaskBody.id = 'add-task-body';
         editTaskContainer.appendChild(editTaskBody);
         let editTaskContainerName = document.createElement('div');
         editTaskContainerName.id = 'add-task-container-name';
         editTaskContainerName.classList.add('add-task-inputs');
         let editTaskContainerNameLabel = document.createElement('label');
         editTaskContainerNameLabel.setAttribute('for', 'name');
         editTaskContainerNameLabel.textContent = 'Name';
         editTaskContainerName.appendChild(editTaskContainerNameLabel);
         let editTaskContainerNameInput = document.createElement('input');
         editTaskContainerNameInput.setAttribute('name', 'name');
         editTaskContainerNameInput.setAttribute('required', 'required');
         editTaskContainerNameInput.type = 'text';
         editTaskContainerNameInput.value = selectedProjectName;
         editTaskContainerName.appendChild(editTaskContainerNameInput);
         editTaskBody.appendChild(editTaskContainerName); 
         let editTaskContainerDescription = document.createElement('div');
         editTaskContainerDescription.id = 'add-task-container-description';
         editTaskContainerDescription.classList.add('add-task-inputs');
         let editTaskContainerDescriptionLabel = document.createElement('label');
         editTaskContainerDescriptionLabel.setAttribute('for', 'description');
         editTaskContainerDescriptionLabel.textContent = 'Description';
         editTaskContainerDescription.appendChild(editTaskContainerDescriptionLabel);
         let editTaskContainerDescriptionInput = document.createElement('input');
         editTaskContainerDescriptionInput.setAttribute('name', 'description');
         editTaskContainerDescriptionInput.setAttribute('required', 'required');
         editTaskContainerDescriptionInput.value = ProjectListManager.getProjectList()[selectedProjectIndex].getProjectDescription();
         editTaskContainerDescriptionInput.type = 'text';
         editTaskContainerDescription.appendChild(editTaskContainerDescriptionInput);
         editTaskBody.appendChild(editTaskContainerDescription); 
         let editTaskContainerDate = document.createElement('div');
         editTaskContainerDate.classList.add('add-task-inputs');
         let editTaskContainerDateLabel = document.createElement('label');
         editTaskContainerDateLabel.setAttribute('for', 'date');
         editTaskContainerDateLabel.textContent = 'Due Date';
         editTaskContainerDate.appendChild(editTaskContainerDateLabel);
         let editTaskContainerDateInput = document.createElement('input');
         editTaskContainerDateInput.setAttribute('name', 'date');
         editTaskContainerDateInput.setAttribute('required', 'required');
         editTaskContainerDateInput.type = 'date';
         editTaskContainerDateInput.value = ProjectListManager.getProjectList()[selectedProjectIndex].getProjectDate();
         editTaskContainerDate.appendChild(editTaskContainerDateInput);
         editTaskContainerDate.id = 'add-task-container-date';
         editTaskBody.appendChild(editTaskContainerDate); 
         
         //Create array of options to be added
         const priorityChoices = ["High", "Medium", "Low"];
         
         let editTaskContainerPriority = document.createElement('div');
         editTaskContainerPriority.id = 'task-container-priority';
         editTaskContainerPriority.classList.add('add-task-inputs');
         let editTaskContainerPriorityLabel = document.createElement('label');
         editTaskContainerPriorityLabel.setAttribute('for', 'priority');
         editTaskContainerPriorityLabel.textContent = 'Priority';
         editTaskContainerPriority.appendChild(editTaskContainerPriorityLabel);
         let editTaskContainerPriorityInput = document.createElement('select');
         editTaskContainerPriorityInput.id = 'task-priority-select';
         editTaskContainerPriorityInput.setAttribute('name', 'priority');
         editTaskContainerPriorityInput.setAttribute('required', 'required');
         //Create and append the options
         for (var i = 0; i < priorityChoices.length; i++) {
             var option = document.createElement("option");
             option.value = priorityChoices[i];
             option.text = priorityChoices[i];
             editTaskContainerPriorityInput.appendChild(option);
         }
         editTaskContainerPriority.appendChild(editTaskContainerPriorityInput);
         editTaskContainerPriorityInput.value = ProjectListManager.getProjectList()[selectedProjectIndex].getProjectPriority();
         editTaskBody.appendChild(editTaskContainerPriority);
         
         
         let submitDiv = document.createElement('div');
         submitDiv.id = 'submit-div';
         editTaskBody.appendChild(submitDiv);
         let submitButton = document.createElement('button');
         submitDiv.appendChild(submitButton);
         submitButton.type = 'button';
         submitButton.textContent = 'Update Project';
         submitButton.id = 'submit-button';
         let cancelDiv = document.createElement('div');
         cancelDiv.id = 'cancel-div';
         editTaskBody.appendChild(cancelDiv);
         let cancelButton = document.createElement('button');
         cancelButton.type = 'button';
         cancelDiv.appendChild(cancelButton);
         cancelButton.textContent = 'Cancel';
         cancelButton.id = 'cancel-button';
         
         const editTask = (e) => {
         
             let selectedProjectIndex = ProjectListManager.getSelectedProject();
 
             e.preventDefault();
             let selectedForm = document.querySelector('form');
             let nameInput = selectedForm.name.value;
             let descriptionInput = selectedForm.description.value;
             let dateInput = selectedForm.date.value;
             let priorityInput = selectedForm.priority.value;
         
                 
             ProjectListManager.getProjectList()[selectedProjectIndex].editProjectName(nameInput);
             ProjectListManager.getProjectList()[selectedProjectIndex].editProjectDescription(descriptionInput);
             ProjectListManager.getProjectList()[selectedProjectIndex].editProjectDate(dateInput);
             ProjectListManager.getProjectList()[selectedProjectIndex].editProjectPriority(priorityInput);
                 // remove add task modal
             greyout.remove();
             GeneralTask();
         
         };
         
         const cancelTask = (e) => {
             e.preventDefault();
             // remove add task modal
             greyout.remove();
             GeneralTask();
             };
         
         submitButton.addEventListener('click', editTask);
         
         let cancelSelect = document.querySelector('#cancel-button');
         
         cancelSelect.addEventListener('click', cancelTask);
         
     };
 
    editTaskButton.addEventListener('click', editProject);

     // listen on the project tasks window and complete tasks
     let completeTaskButton = document.querySelector('#projects-container-complete');

     const completeProject = () => {
 
         if(ProjectListManager.getProjectList()[selectedProjectIndex].getProjectComplete() === true){
             ProjectListManager.getProjectList()[selectedProjectIndex].setProjectComplete(false);
         } else {
             ProjectListManager.getProjectList()[selectedProjectIndex].setProjectComplete(true);
         }
 
         GeneralTask();
 
     };
 
    completeTaskButton.addEventListener('click', completeProject);
 
     // listen on the project tasks window and delete tasks
     let deleteProjectButton = document.querySelector('#projects-container-delete');
 
     const deleteProject = () => {

         ProjectListManager.removeProjectFromProjectList(selectedProjectName);

         ProjectListManager.setSelectedProject('General Tasks');

         if(ProjectListManager.getProjectList()[0] !== 'General Tasks'){
            // create initial project (if it doesnt already exist)
            ProjectListManager.appendProjectList(
                'General Tasks', 
                'A junk drawer for your 2düs',
                null,
                "Low"
            );
        }
 
         GeneralTask();
 
     };
 
    
     deleteProjectButton.addEventListener('click', deleteProject);


    let taskArray = ProjectListManager.getProjectList()[selectedProjectIndex].getProjectTasks();
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
        // shading if complete
        if(ProjectListManager.getProjectList()[selectedProjectIndex].getProjectTasks()[i].getTaskComplete() === true){
            taskName.style = 'text-decoration: line-through; color: rgba(255, 255, 255, 0.343);'
        }
        let taskDescription = document.createElement('div');
        taskRow.appendChild(taskDescription);
        taskDescription.id = `task-description-${i}`;
        taskDescription.classList.add('task-description'); 
        taskDescription.textContent = taskArray[i].getTaskDescription();
        // shading if complete
        if(ProjectListManager.getProjectList()[selectedProjectIndex].getProjectTasks()[i].getTaskComplete() === true){
            taskDescription.style = 'text-decoration: line-through; color: rgba(255, 255, 255, 0.343);'
        }
        let taskDate = document.createElement('div');
        taskRow.appendChild(taskDate);
        taskDate.id = `task-date-${i}`;
        taskDate.classList.add('task-date'); 
        taskDate.textContent = taskArray[i].getTaskDate();
        // shading if complete
        if(ProjectListManager.getProjectList()[selectedProjectIndex].getProjectTasks()[i].getTaskComplete() === true){
            taskDate.style = 'text-decoration: line-through; color: rgba(255, 255, 255, 0.343);'
        }
        let taskPriority = document.createElement('div');
        taskRow.appendChild(taskPriority);
        taskPriority.id = `task-priority-${i}`;
        taskPriority.classList.add('task-priority'); 
        taskPriority.textContent = taskArray[i].getTaskPriority();
        // shading if complete
        if(ProjectListManager.getProjectList()[selectedProjectIndex].getProjectTasks()[i].getTaskComplete() === true){
            taskPriority.style = 'text-decoration: line-through; color: rgba(255, 255, 255, 0.343);'
        }
        let taskEdit = document.createElement('div');
        taskRow.appendChild(taskEdit);
        taskEdit.id = `task-edit-${i}`;
        taskEdit.classList.add('task-edit');
        taskEdit.innerHTML = ' <i class="fas fa-edit"></i>';
        let taskComplete = document.createElement('div');
        taskRow.appendChild(taskComplete);
        taskComplete.id = `task-complete-${i}`;
        taskComplete.classList.add('task-complete');
        taskComplete.innerHTML = ProjectListManager.getProjectList()[selectedProjectIndex].getProjectTasks()[i].getTaskComplete() === false ? '<i class="fa-regular fa-square"></i>' : '<i class="fa-regular fa-check-square"></i>';
        let taskDelete = document.createElement('div');
        taskRow.appendChild(taskDelete);
        taskDelete.id = `task-delete-${i}`;
        taskDelete.classList.add('task-delete'); 
        taskDelete.innerHTML = ' <i class="fas fa-trash"></i>';

    }

    // listen on the project tasks window and complete tasks
    let completeTaskButtons = document.querySelectorAll('.task-complete');

    const completeTaskFromProject = (e) => {
        
        let taskId = e.target.id.substring(14);
        let selectedProjectIndex = ProjectListManager.getSelectedProject();

        if(ProjectListManager.getProjectList()[selectedProjectIndex].getProjectTasks()[taskId].getTaskComplete() === true){
            ProjectListManager.getProjectList()[selectedProjectIndex].getProjectTasks()[taskId].setTaskComplete(false);
        } else {
            ProjectListManager.getProjectList()[selectedProjectIndex].getProjectTasks()[taskId].setTaskComplete(true);
        }

        GeneralTask();

    };

    completeTaskButtons.forEach(function(completeTaskButton){
        completeTaskButton.addEventListener('click', completeTaskFromProject);
    });

    // listen on the project tasks window and delete tasks
    let deleteTaskButtons = document.querySelectorAll('.task-delete');

    const deleteTaskFromProject = (e) => {
        
        let taskId = e.target.id.substring(12);
        let selectedProjectIndex = ProjectListManager.getSelectedProject();
        
        ProjectListManager.getProjectList()[selectedProjectIndex].deleteProjectTask(taskId);

        GeneralTask();

    };

    deleteTaskButtons.forEach(function(deleteTaskButton){
        deleteTaskButton.addEventListener('click', deleteTaskFromProject);
    });

    // listen on the project tasks window and edit task

    let editTaskButtons = document.querySelectorAll('.task-edit');

    const editTaskFromProject = (e) => {

        let taskId = e.target.id.substring(10);
        let selectedProjectIndex = ProjectListManager.getSelectedProject();

        let projectName = ProjectListManager.getProjectList()[selectedProjectIndex].getProjectName();
        
        let taskName = ProjectListManager.getProjectList()[selectedProjectIndex].getProjectTasks()[taskId].getTaskName();

        let bodyDiv = document.querySelector('body');
            
        let greyout = document.createElement('div');
        greyout.id = 'add-task-greyout';
        bodyDiv.appendChild(greyout);
        
            
        let editTaskContainer = document.createElement('div');
        editTaskContainer.id = 'add-task-container';
        editTaskContainer.classList.add('add-task-button-outline');
        greyout.appendChild(editTaskContainer);
        let editTaskTitle = document.createElement('div');
        editTaskTitle.id = 'add-task-title';
        editTaskTitle.textContent = `Edit ${taskName} from ${projectName}`;
        editTaskContainer.appendChild(editTaskTitle);
        let editTaskBody = document.createElement('form');
        editTaskBody.id = 'add-task-body';
        editTaskContainer.appendChild(editTaskBody);
        let editTaskContainerName = document.createElement('div');
        editTaskContainerName.id = 'add-task-container-name';
        editTaskContainerName.classList.add('add-task-inputs');
        let editTaskContainerNameLabel = document.createElement('label');
        editTaskContainerNameLabel.setAttribute('for', 'name');
        editTaskContainerNameLabel.textContent = 'Name';
        editTaskContainerName.appendChild(editTaskContainerNameLabel);
        let editTaskContainerNameInput = document.createElement('input');
        editTaskContainerNameInput.setAttribute('name', 'name');
        editTaskContainerNameInput.setAttribute('required', 'required');
        editTaskContainerNameInput.type = 'text';
        editTaskContainerNameInput.value = ProjectListManager.getProjectList()[selectedProjectIndex].getProjectTasks()[taskId].getTaskName();
        editTaskContainerName.appendChild(editTaskContainerNameInput);
        editTaskBody.appendChild(editTaskContainerName); 
        let editTaskContainerDescription = document.createElement('div');
        editTaskContainerDescription.id = 'add-task-container-description';
        editTaskContainerDescription.classList.add('add-task-inputs');
        let editTaskContainerDescriptionLabel = document.createElement('label');
        editTaskContainerDescriptionLabel.setAttribute('for', 'description');
        editTaskContainerDescriptionLabel.textContent = 'Description';
        editTaskContainerDescription.appendChild(editTaskContainerDescriptionLabel);
        let editTaskContainerDescriptionInput = document.createElement('input');
        editTaskContainerDescriptionInput.setAttribute('name', 'description');
        editTaskContainerDescriptionInput.setAttribute('required', 'required');
        editTaskContainerDescriptionInput.value = ProjectListManager.getProjectList()[selectedProjectIndex].getProjectTasks()[taskId].getTaskDescription();
        editTaskContainerDescriptionInput.type = 'text';
        editTaskContainerDescription.appendChild(editTaskContainerDescriptionInput);
        editTaskBody.appendChild(editTaskContainerDescription); 
        let editTaskContainerDate = document.createElement('div');
        editTaskContainerDate.classList.add('add-task-inputs');
        let editTaskContainerDateLabel = document.createElement('label');
        editTaskContainerDateLabel.setAttribute('for', 'date');
        editTaskContainerDateLabel.textContent = 'Due Date';
        editTaskContainerDate.appendChild(editTaskContainerDateLabel);
        let editTaskContainerDateInput = document.createElement('input');
        editTaskContainerDateInput.setAttribute('name', 'date');
        editTaskContainerDateInput.setAttribute('required', 'required');
        editTaskContainerDateInput.type = 'date';
        editTaskContainerDateInput.value = ProjectListManager.getProjectList()[selectedProjectIndex].getProjectTasks()[taskId].getTaskDate();
        editTaskContainerDate.appendChild(editTaskContainerDateInput);
        editTaskContainerDate.id = 'add-task-container-date';
        editTaskBody.appendChild(editTaskContainerDate); 
        
        //Create array of options to be added
        const priorityChoices = ["High", "Medium", "Low"];
        
        let editTaskContainerPriority = document.createElement('div');
        editTaskContainerPriority.id = 'task-container-priority';
        editTaskContainerPriority.classList.add('add-task-inputs');
        let editTaskContainerPriorityLabel = document.createElement('label');
        editTaskContainerPriorityLabel.setAttribute('for', 'priority');
        editTaskContainerPriorityLabel.textContent = 'Priority';
        editTaskContainerPriority.appendChild(editTaskContainerPriorityLabel);
        let editTaskContainerPriorityInput = document.createElement('select');
        editTaskContainerPriorityInput.id = 'task-priority-select';
        editTaskContainerPriorityInput.setAttribute('name', 'priority');
        editTaskContainerPriorityInput.setAttribute('required', 'required');
        //Create and append the options
        for (var i = 0; i < priorityChoices.length; i++) {
            var option = document.createElement("option");
            option.value = priorityChoices[i];
            option.text = priorityChoices[i];
            editTaskContainerPriorityInput.appendChild(option);
        }
        editTaskContainerPriority.appendChild(editTaskContainerPriorityInput);
        editTaskContainerPriorityInput.value = ProjectListManager.getProjectList()[selectedProjectIndex].getProjectTasks()[taskId].getTaskPriority();
        editTaskBody.appendChild(editTaskContainerPriority);
        
        
        let submitDiv = document.createElement('div');
        submitDiv.id = 'submit-div';
        editTaskBody.appendChild(submitDiv);
        let submitButton = document.createElement('button');
        submitDiv.appendChild(submitButton);
        submitButton.type = 'button';
        submitButton.textContent = 'Update Task';
        submitButton.id = 'submit-button';
        let cancelDiv = document.createElement('div');
        cancelDiv.id = 'cancel-div';
        editTaskBody.appendChild(cancelDiv);
        let cancelButton = document.createElement('button');
        cancelButton.type = 'button';
        cancelDiv.appendChild(cancelButton);
        cancelButton.textContent = 'Cancel';
        cancelButton.id = 'cancel-button';
        
        const editTask = (e) => {
        
            let selectedProjectIndex = ProjectListManager.getSelectedProject();

            e.preventDefault();
            let selectedForm = document.querySelector('form');
            let nameInput = selectedForm.name.value;
            let descriptionInput = selectedForm.description.value;
            let dateInput = selectedForm.date.value;
            let priorityInput = selectedForm.priority.value;
        
                
            ProjectListManager.getProjectList()[selectedProjectIndex].getProjectTasks()[taskId].editTaskName(nameInput);
            ProjectListManager.getProjectList()[selectedProjectIndex].getProjectTasks()[taskId].editTaskDescription(descriptionInput);
            ProjectListManager.getProjectList()[selectedProjectIndex].getProjectTasks()[taskId].editTaskDate(dateInput);
            ProjectListManager.getProjectList()[selectedProjectIndex].getProjectTasks()[taskId].editTaskPriority(priorityInput);
                // remove add task modal
            greyout.remove();
            GeneralTask();
        
        };
        
        const cancelTask = (e) => {
            e.preventDefault();
            // remove add task modal
            greyout.remove();
            GeneralTask();
            };
        
        submitButton.addEventListener('click', editTask);
        
        let cancelSelect = document.querySelector('#cancel-button');
        
        cancelSelect.addEventListener('click', cancelTask);
        
    };

    editTaskButtons.forEach(function(editTaskButton){
        editTaskButton.addEventListener('click', editTaskFromProject);
    });


    // so we can clear the div of child divs
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    // display project names on the project list board
    let listedProjects = document.querySelector('#listed-projects'); 
    removeAllChildNodes(listedProjects);



    if(ProjectListManager.getProjectList().length > 1){
        for(let i=1; i<ProjectListManager.getProjectList().length; i++){
            let projectRow = document.createElement('div');
            projectRow.id = `project-row-${i}`;
            listedProjects.appendChild(projectRow);
            projectRow.textContent = ProjectListManager.getProjectList()[i].getProjectName();
            projectRow.classList.add('project-row');
        }
    }

    // listen on the project window and switch projects
    let projectRows = document.querySelectorAll('.project-row');
    let generalTasksSection = document.querySelector('#general-tasks-section');

    const selectProject = (e) => {
        
        let project = e.target.textContent;
        
        ProjectListManager.setSelectedProject(project)

        GeneralTask();

    };

    projectRows.forEach(function(projectRow){
        projectRow.addEventListener('click', selectProject);
    });
    generalTasksSection.addEventListener('click', selectProject);

    LocalStorageManager().saveToLocalData();

}; 

export { GeneralTask };