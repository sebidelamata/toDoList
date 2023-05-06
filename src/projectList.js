import { Project } from './project';

const ProjectListManager = (() => {

    let projectList = [];

    const getProjectList = () => {
        return projectList;
    };

    const appendProjectList = (_projectName) => {
        projectList[_projectName] = Project();
    };

    const removeProjectFromProjectList = (_taskName) => {
        _projectIndex = projectList.find(_taskName);
        projectList.splice(_projectIndex, 1);
    };

    return {
        getProjectList,
        appendProjectList,
        removeProjectFromProjectList,
    };

})();

export { ProjectListManager };