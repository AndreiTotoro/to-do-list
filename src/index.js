import {projectFactory, toDoFactory} from "./factories"
import {pageLoad} from './pageLoad'

const defaultProject = projectFactory("Example Project", [toDoFactory("Example To Do1", "An example to do element", 12, "Low"), toDoFactory("Example To Do2", "An example to do element", 15, "Medium")])
pageLoad()

