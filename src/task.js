const Task = (_name, _description, _date, _priority) => {
    
    // requirements
    if(_priority !== 'High' || _priority !== 'Medium' || _priority !== 'Low'){
        console.error('Priority must be High, Low, or Medium');
    }

    let name = _name;
    let description = _description;
    let date = _date;
    let priority = _priority;
    let complete = false;

    const getName = () => {
        return name;
    };

    const editName = (_newName) => {
        name = _newName;
    };

    const getDescription = () => {
        return description;
    };

    const editDescription = (_newDescriptionString) => {
        description = _newDescriptionString;
    };

    const getDate = () => {
        return date;
    };

    const editDate = (_newDate) => {
        date = _newDate;
    };

    const getPriority = () => {
        return priority;
    };

    const editPriority = (_newPriority) => {
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
        getName, 
        getDescription, 
        getDate, 
        getPriority, 
        getTaskComplete, 
        setTaskComplete, 
        editDescription,
        editDate,
        editName,
        editPriority,
    };
};

export { Task };