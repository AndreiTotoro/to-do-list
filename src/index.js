import {projectFactory, toDoFactory} from "./factories"
import {elementCreator} from './elementCreator'

const defaultProject = projectFactory("Example Project", [toDoFactory("Example To Do1", "An example to do element", 12, "Low"), toDoFactory("Example To Do2", "An example to do element", 15, "Medium")])

