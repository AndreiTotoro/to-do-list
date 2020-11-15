
const elementCreator =  {

    body: document.querySelector('content'),

    divMaker: () =>{
       return document.createElement('div')
    },

    h1Maker: () =>{
       return document.createElement('h1')
    },

    pMaker: () =>{
       return document.createElement('p')
    },

    appender: (whereToAppend, whatToAppend) =>{
        return whereToAppend.appendChild(whatToAppend)
    }

}

export {elementCreator}