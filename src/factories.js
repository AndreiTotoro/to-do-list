

const projectFactory = (name, toDos) =>{
    return{
        name: name,
        toDos: toDos,
    }
}

const toDoFactory = (name, description, dueDate, priority) =>{
    return{
        name: name,
        description: description,
        dueDate: dueDate,
        priority: priority,
    }
}

export {projectFactory, toDoFactory}