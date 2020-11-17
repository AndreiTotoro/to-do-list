import {elementCreator} from "./elementCreator"
import './cssReset.css'
import './pageLoad.css'



const domElements = {
    main: elementCreator().divMaker("main"),
    logo: elementCreator().elMaker("h1", "Andrew's To Do List", "logo"),
    newToDoButton: () =>{
        const button = elementCreator().elMaker("button", "Add To Do", "newToDoButton")
        button.addEventListener('click', () =>{
        console.log(newTask())
    })
    return button
    },
    defaultProjectContainer: elementCreator().divMaker('defaultProjectContainer'),
    projectInfoContainer: elementCreator().divMaker('projectInfoContainer'),
    defaultProjectTitle: elementCreator().elMaker("h1", "Default Project", "defaultProjectTitle")
}

const taskMaker = (text, taskDescription, taskDueDate, taskPriority) =>{
    const taskAdder = {
         taskCard: elementCreator().divMaker("taskCard"),
         title: elementCreator().elMaker("h1", text, "taskText"),
         name: text,
         description: taskDescription,
         dueDate: taskDueDate,
         priority: taskPriority,
         buttons: elementCreator().divMaker("taskButtons"),
         doneButton: elementCreator().elMaker("button", "✔️", "doneButton"),
         removeButton: elementCreator().elMaker("button", "❌", "removeButton")
     }

     taskAdder.removeButton.addEventListener('click', () => {
        domElements.defaultProjectContainer.removeChild(taskAdder.taskCard)
     })

     taskAdder.doneButton.addEventListener('click', () => {
         if (taskAdder.taskCard.classList.contains('done') == false){
            taskAdder.taskCard.classList.add('done')
         } else {
             taskAdder.taskCard.classList.remove('done')
         }
       
     })

     taskAdder.taskCard.addEventListener('click', () => {
         alert(`The description of the task is ${taskAdder.description} the due date of the task is ${taskAdder.dueDate} and the priority is ${taskAdder.priority}`)
     })



     elementCreator().bodyAppender(domElements.defaultProjectContainer)
     elementCreator().appender(domElements.defaultProjectContainer, taskAdder.taskCard)
     elementCreator().appender(taskAdder.taskCard, taskAdder.title)
     elementCreator().appender(taskAdder.taskCard, taskAdder.buttons)
     elementCreator().appender(taskAdder.buttons, taskAdder.doneButton)
     elementCreator().appender(taskAdder.buttons, taskAdder.removeButton)
 }


 const newTask = () => {
     const name = prompt('What is the name of the task?')
     const description = prompt('What is the description of this task?')
     const dueDate = prompt('When is this task due?')
     const priority = prompt('What is the priority of this task?')
     taskMaker(name, description, dueDate, priority)
 }


const pageLoad = () =>{
    elementCreator().bodyAppender(domElements.main)
    elementCreator().appender(domElements.main, domElements.logo)
    elementCreator().bodyAppender(domElements.defaultProjectContainer)
    elementCreator().appender(domElements.defaultProjectContainer, domElements.projectInfoContainer)
    elementCreator().appender(domElements.projectInfoContainer, domElements.defaultProjectTitle)
    elementCreator().appender(domElements.projectInfoContainer, domElements.newToDoButton())
}

export {pageLoad}
export {taskMaker}