import {projectFactory, toDoFactory} from "./factories"
import {pageLoad} from './pageLoad'

const defaultProject = projectFactory("Default Project", [])
pageLoad()


export {defaultProject}

