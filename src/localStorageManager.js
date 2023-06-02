import { ProjectListManager } from "./projectList";

const LocalStorageManager = () => {

    const loadFromLocalData = () => {

        if(localStorage.ProjectListSession){
            let importedLocalStorage = JSON.parse(localStorage.ProjectListSession);
            for(let i in importedLocalStorage){
                // set our projects
                ProjectListManager.appendProjectList(
                    i,
                    importedLocalStorage[i]['description'],
                    importedLocalStorage[i]['date'],
                    importedLocalStorage[i]['priority']
                );
                // now do tasks
                for(let j in importedLocalStorage[i]['tasks']){
                    let projectNameArray = Object.keys(importedLocalStorage)
                    let selectedProjectIndex = projectNameArray.indexOf(i)
                    ProjectListManager.getProjectList()[selectedProjectIndex].appendProjectTasks(
                        j,
                        importedLocalStorage[i]['tasks'][j]['description'],
                        importedLocalStorage[i]['tasks'][j]['date'],
                        importedLocalStorage[i]['tasks'][j]['priority'],
                    );
                }
            }

            // set our complete status
            for(let i in importedLocalStorage){
                let projectNameArray = Object.keys(importedLocalStorage)
                let selectedProjectIndex = projectNameArray.indexOf(i)
                ProjectListManager.getProjectList()[selectedProjectIndex].setProjectComplete(
                    importedLocalStorage[i]['complete']
                );
                // check tasks
                for(let j in importedLocalStorage[i]['tasks']){
                    let taskNameArray = Object.keys(importedLocalStorage[i]['tasks'])
                    let selectedtaskIndex = taskNameArray.indexOf(j)
                    ProjectListManager.getProjectList()[selectedProjectIndex].getProjectTasks()[selectedtaskIndex].setTaskComplete(
                        importedLocalStorage[i]['tasks'][j]['complete']
                    );
                };
            };
        }

    };

    const saveToLocalData = () => {

        let outputObject = {};

        if(ProjectListManager.getProjectList()){
            for(let i=0; i<ProjectListManager.getProjectList().length; i++){
                // get the project names
                outputObject[ProjectListManager.getProjectList()[i].getProjectName()] = {}

                // get the project qualities
                outputObject[ProjectListManager.getProjectList()[i].getProjectName()]['description'] = ProjectListManager.getProjectList()[i].getProjectDescription();
                outputObject[ProjectListManager.getProjectList()[i].getProjectName()]['date'] = ProjectListManager.getProjectList()[i].getProjectDate();
                outputObject[ProjectListManager.getProjectList()[i].getProjectName()]['priority'] = ProjectListManager.getProjectList()[i].getProjectPriority();
                outputObject[ProjectListManager.getProjectList()[i].getProjectName()]['complete'] = ProjectListManager.getProjectList()[i].getProjectComplete();
                outputObject[ProjectListManager.getProjectList()[i].getProjectName()]['tasks'] = {};

                // get the task stuff
                if(ProjectListManager.getProjectList()[i].getProjectTasks()){
                    for(let j=0; j<ProjectListManager.getProjectList()[i].getProjectTasks().length; j++){
                        outputObject[ProjectListManager.getProjectList()[i].getProjectName()]['tasks'][ProjectListManager.getProjectList()[i].getProjectTasks()[j].getTaskName()] = {};
                        outputObject[ProjectListManager.getProjectList()[i].getProjectName()]['tasks'][ProjectListManager.getProjectList()[i].getProjectTasks()[j].getTaskName()]['description'] = ProjectListManager.getProjectList()[i].getProjectTasks()[j].getTaskDescription();
                        outputObject[ProjectListManager.getProjectList()[i].getProjectName()]['tasks'][ProjectListManager.getProjectList()[i].getProjectTasks()[j].getTaskName()]['date'] = ProjectListManager.getProjectList()[i].getProjectTasks()[j].getTaskDate();
                        outputObject[ProjectListManager.getProjectList()[i].getProjectName()]['tasks'][ProjectListManager.getProjectList()[i].getProjectTasks()[j].getTaskName()]['priority'] = ProjectListManager.getProjectList()[i].getProjectTasks()[j].getTaskPriority();
                        outputObject[ProjectListManager.getProjectList()[i].getProjectName()]['tasks'][ProjectListManager.getProjectList()[i].getProjectTasks()[j].getTaskName()]['complete'] = ProjectListManager.getProjectList()[i].getProjectTasks()[j].getTaskComplete();
                    }
                }
            }
        }
        
        localStorage.setItem('ProjectListSession', JSON.stringify(outputObject));
    };

    return { 
        loadFromLocalData,
        saveToLocalData,
     }

};






export { LocalStorageManager };