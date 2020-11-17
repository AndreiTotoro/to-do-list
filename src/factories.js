import {taskMaker} from './pageLoad'

const projectFactory = (name, toDos) =>{
    return{
        name: name,
        toDos: toDos,
    }
}

export {projectFactory}