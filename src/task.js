const Task = (_name, _description, _date, _priority) => {
    
    // requirements
    if(_priority !== 'High' && _priority !== 'Medium' && _priority !== 'Low'){
        console.error('Priority must be High, Low, or Medium');
    }

    let name = _name;
    let description = _description;
    let date = _date;
    let priority = _priority;
    let complete = false;

    const getTaskName = () => {
        return name;
    };

    const editTaskName = (_newName) => {
        name = _newName;
    };

    const getTaskDescription = () => {
        return description;
    };

    const editTaskDescription = (_newDescriptionString) => {
        description = _newDescriptionString;
    };

    const getTaskDate = () => {
        return date;
    };

    const editTaskDate = (_newDate) => {
        date = _newDate;
    };

    const getTaskPriority = () => {
        return priority;
    };

    const editTaskPriority = (_newPriority) => {
        if(_newPriority !== 'High' || _newPriority !== 'Medium' || _newPriority !== 'Low'){
            console.error('Priority must be High, Low, or Medium');
        }

        priority = _newPriority;
    }

    const getTaskComplete = () => {
        return complete;
    };

    const setTaskComplete = (_boolean) => {
        if(_boolean !== true || _boolean !== false){
            return console.error("Input must be a boolean");
        }
        complete = _boolean;
    };

    return { 
        getTaskName, 
        getTaskDescription, 
        getTaskDate, 
        getTaskPriority, 
        getTaskComplete, 
        setTaskComplete, 
        editTaskDescription,
        editTaskDate,
        editTaskName,
        editTaskPriority,
    };
};

export { Task };