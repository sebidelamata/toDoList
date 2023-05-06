import { Project } from './project';

const ProjectListManager = (() => {

    let projectList = [];

    const getProjectList = () => {
        return projectList;
    };

    const appendProjectList = (_name, _description, _date, _priority) => {
        let _project = Project(_name, _description, _date, _priority);
        projectList.push(_project);
    };

    const removeProjectFromProjectList = (_projectName) => {
        let _projectIndex = projectList.findIndex(i => i.getProjectName() === _projectName);
        projectList.splice(_projectIndex, 1);
    };

    return {
        getProjectList,
        appendProjectList,
        removeProjectFromProjectList,
    };

})();

export { ProjectListManager };