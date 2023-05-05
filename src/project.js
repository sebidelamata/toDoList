import { Task } from './task.js';

const Project = () => {

    let projectTasks = [];

    const getProjectTasks = () => {
        return projectTasks;
    };

    const appendProjectTasks = (_name, _description, _date, _priority) => {
        
        let taskObject = Task(_name, _description, _date, _priority);

        projectTasks.push(taskObject);
    };

    return { getProjectTasks, appendProjectTasks };
};

export { Project };

