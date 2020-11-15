
const elements = () => {

   const body = document.querySelector('#content')
   
   return {
    divMaker: () =>{
       return document.createElement('div')
    },

    h1Maker: () =>{
       return document.createElement('h1')
    },

    pMaker: () => {
       return document.createElement('p')
    },
    bodyAppender: (whatToAppend) =>{
      body.appendChild(whatToAppend)
    }
   }

}


export {elements}