import {elementCreator} from "./elementCreator"
import {taskMaker} from "./taskMaker"
import {defaultProject} from "./index"
import './cssReset.css'
import './pageLoad.css'



const domElements = {
    main: elementCreator().divMaker("main"),
    logo: elementCreator().elMaker("h1", "Andrew's To Do List", "logo"),
    newToDoButton: () =>{
        const button = elementCreator().elMaker("button", "Add To Do", "newToDoButton")
        button.addEventListener('click', () =>{
        taskMaker(defaultProject.name)
    })
    return button
    },
    defaultProjectContainer: elementCreator().divMaker('defaultProject'),
    defaultProjectTitle: elementCreator().elMaker("h1", "Default Project", "defaultProjectTitle")
}


const pageLoad = () =>{
    elementCreator().bodyAppender(domElements.main)
    elementCreator().appender(domElements.main, domElements.logo)
    elementCreator().bodyAppender(domElements.defaultProjectContainer)
    elementCreator().appender(domElements.defaultProjectContainer, domElements.defaultProjectTitle)
    elementCreator().appender(domElements.defaultProjectContainer, domElements.newToDoButton())
}

export {pageLoad}