import {elementCreator} from "./elementCreator"

const taskMaker = (text) =>{
   const taskAdder = {
        taskCard: elementCreator().divMaker("taskCard"),
        title: elementCreator().elMaker("h1", text, "taskText"),
        buttons: elementCreator().divMaker("taskButtons"),
        doneButton: elementCreator().elMaker("button", "✔️", "doneButton"),
        removeButton: elementCreator().elMaker("button", "❌", "removeButton")
    }
    elementCreator().bodyAppender(taskAdder.taskCard)
    elementCreator().appender(taskAdder.taskCard, taskAdder.title)
    elementCreator().appender(taskAdder.taskCard, taskAdder.buttons)
    elementCreator().appender(taskAdder.buttons, taskAdder.doneButton)
    elementCreator().appender(taskAdder.buttons, taskAdder.removeButton)

}

export {taskMaker}