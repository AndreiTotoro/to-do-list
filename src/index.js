import {projectFactory, toDoFactory} from "./factories"
import {elements} from './elementCreator'
import {pageLoad} from './pageLoad'

const defaultProject = projectFactory("Example Project", [toDoFactory("Example To Do1", "An example to do element", 12, "Low"), toDoFactory("Example To Do2", "An example to do element", 15, "Medium")])
const newh1 = elements().h1Maker()
elements().bodyAppender(newh1)
pageLoad()

