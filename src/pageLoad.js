import {elementCreator} from "./elementCreator"
import {taskMaker} from "./taskMaker"
import {defaultProject} from "./index"
import './cssReset.css'
import './pageLoad.css'



const domElements = {
    main: elementCreator().divMaker("main"),
    logo: elementCreator().elMaker("h1", "Andrew's To Do List", "logo"),
    
}

const newToDoButton = () =>{
    const button = elementCreator().elMaker("button", "Add To Do", "newToDoButton")
    button.addEventListener('click', () =>{
        console.log("test")
    })
    return button
}

const pageLoad = () =>{
    elementCreator().bodyAppender(domElements.main)
    elementCreator().appender(domElements.main, domElements.logo)
    elementCreator().bodyAppender(newToDoButton())
}

export {pageLoad}