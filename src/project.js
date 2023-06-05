import { Task } from "./task.js";

const Project = (_name, _description, _date, _priority) => {
  let name = _name;
  let description = _description;
  let date = _date;
  let priority = _priority;
  let complete = false;

  const getProjectName = () => {
    return name;
  };

  const editProjectName = (_newName) => {
    name = _newName;
  };

  const getProjectDescription = () => {
    return description;
  };

  const editProjectDescription = (_newDescriptionString) => {
    description = _newDescriptionString;
  };

  const getProjectDate = () => {
    return date;
  };

  const editProjectDate = (_newDate) => {
    date = _newDate;
  };

  const getProjectPriority = () => {
    return priority;
  };

  const editProjectPriority = (_newPriority) => {
    if (
      _newPriority !== "High" &&
      _newPriority !== "Medium" &&
      _newPriority !== "Low"
    ) {
      console.error("Priority must be High, Low, or Medium");
    }

    priority = _newPriority;
  };

  const getProjectComplete = () => {
    return complete;
  };

  const setProjectComplete = (_boolean) => {
    if (_boolean !== true && _boolean !== false) {
      return console.error("Input must be a boolean");
    }
    complete = _boolean;
  };

  let projectTasks = [];

  const getProjectTasks = () => {
    return projectTasks;
  };

  const appendProjectTasks = (_name, _description, _date, _priority) => {
    let taskObject = Task(_name, _description, _date, _priority);

    projectTasks.push(taskObject);
  };

  const deleteProjectTask = (_index) => {
    projectTasks.splice(_index, 1);
  };

  return {
    getProjectName,
    editProjectName,
    getProjectDescription,
    editProjectDescription,
    getProjectDate,
    editProjectDate,
    getProjectPriority,
    editProjectPriority,
    getProjectComplete,
    setProjectComplete,
    getProjectTasks,
    appendProjectTasks,
    deleteProjectTask,
  };
};

export { Project };
