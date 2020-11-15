import {elementCreator} from "./elementCreator"

const domElements = {
    title: elementCreator().h1Maker("test", "blah")
}

const pageLoad = () =>{
    elementCreator().bodyAppender(domElements.title)
}

export {pageLoad}