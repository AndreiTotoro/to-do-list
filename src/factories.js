import {taskMaker} from './pageLoad'

const projectFactory = (name, toDos) =>{
    return{
        name: name,
        toDos: toDos,
    }
}

const toDoFactory = (name, description, dueDate, priority) =>{
    taskMaker(name)
    return{
        name: name,
        description: description,
        dueDate: dueDate,
        priority: priority,
    }
}

export {projectFactory, toDoFactory}