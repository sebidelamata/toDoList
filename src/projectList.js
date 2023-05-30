import { Project } from './project';

const ProjectListManager = (() => {

    let projectList = [];

    let selectedProject = 0;

    const getProjectList = () => {
        return projectList;
    };

    const getSelectedProject = () => {
        return selectedProject
    };

    const setSelectedProject = (_selectedProjectString) => {
        selectedProject = getProjectList().findIndex(_project => {
            return _project.getProjectName() === _selectedProjectString;
        });
    }

    const appendProjectList = (_name, _description, _date, _priority) => {
        let _project = Project(_name, _description, _date, _priority);
        projectList.push(_project);
        setSelectedProject(_project.getProjectName());
    };

    const removeProjectFromProjectList = (_projectName) => {
        let _projectIndex = projectList.findIndex(i => i.getProjectName() === _projectName);
        projectList.splice(_projectIndex, 1);
    };

    return {
        getProjectList,
        getSelectedProject,
        setSelectedProject,
        appendProjectList,
        removeProjectFromProjectList,
    };

})();

export { ProjectListManager };