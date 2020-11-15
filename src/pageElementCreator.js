
const pageElementsCreator = (whatToCreate) => {
    const divMaker = () =>{
        document.createElement('div')
    }

    const h1Maker = () =>{
        document.createElement('h1')
    }

    const pMaker = () =>{
        document.createElement('p')
    }

    if (whatToCreate == "div"){
        elementToCreate = divMaker()
    } 

    if (whatToCreate == "h1"){
        elementToCreate = h1Maker()
    } 

    if (whatToCreate == "p"){
        elementToCreate = h1Maker()
    } 

    return elementToCreate
}