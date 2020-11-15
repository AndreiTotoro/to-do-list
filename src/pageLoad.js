import {elementCreator} from "./elementCreator"
import {taskMaker} from "./taskMaker"
import './cssReset.css'
import './pageLoad.css'


const domElements = {
    main: elementCreator().divMaker("main"),
    logo: elementCreator().elMaker("h1", "Andrew's To Do List", "logo"),
}

const pageLoad = () =>{
    elementCreator().bodyAppender(domElements.main)
    elementCreator().appender(domElements.main, domElements.logo)
    taskMaker("test")
    taskMaker("blahsdasda")
}

export {pageLoad}