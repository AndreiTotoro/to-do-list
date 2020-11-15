import {elementCreator} from "./elementCreator"
import './cssReset.css'
import './pageLoad.css'

const domElements = {
    main: elementCreator().divMaker("main"),
    logo: elementCreator().elMaker("h1", "Andrew's To Do List", "logo"),
    tasks: [{
        taskCard: elementCreator().divMaker("taskCard"),
        title: elementCreator().elMaker("h1", "Make everything automatic", "taskText"),
    }]
}

const pageLoad = () =>{
    elementCreator().bodyAppender(domElements.main)
    elementCreator().appender(domElements.main, domElements.logo)
    elementCreator().bodyAppender(domElements.tasks[0].taskCard)
    elementCreator().appender(domElements.tasks[0].taskCard, domElements.tasks[0].title)
}

export {pageLoad}