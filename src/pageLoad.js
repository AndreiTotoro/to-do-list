import {elementCreator} from "./elementCreator"
import {taskMaker} from "./taskMaker"
import {defaultProject} from "./index"
import './cssReset.css'
import './pageLoad.css'

function buttonTest(){
    taskMaker(defaultProject.name)
}

const domElements = {
    main: elementCreator().divMaker("main"),
    logo: elementCreator().elMaker("h1", "Andrew's To Do List", "logo"),
    addTaskButton: elementCreator().elMaker("button", "Test Adding Thins", "testButton")
}

const pageLoad = () =>{
    elementCreator().bodyAppender(domElements.main)
    elementCreator().appender(domElements.main, domElements.logo)
    elementCreator().bodyAppender(domElements.addTaskButton)
}

export {pageLoad}