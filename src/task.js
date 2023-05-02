const Task = (_name, _description, _date, _priority) => {
    let name = _name;
    let description = _description;
    let date = _date;
    let priority = _priority;

    const getName = () => {
        return name;
    };

    const getDescription = () => {
        return description;
    };

    const getDate = () => {
        return date;
    };

    const getPriority = () => {
        return priority;
    };

    return { getName, getDescription, getDate, getPriority};
};

export { Task };