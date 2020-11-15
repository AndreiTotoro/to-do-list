

const elementCreator = () => {

   const body = document.querySelector('#content')

   return {
    divMaker: (cssClass) =>{
      const el = document.createElement("div")
      el.classList.add(cssClass)
      return el
    },

    elMaker: (whatToMake, text = "", cssClass) =>{
      const el = document.createElement(whatToMake)
      el.classList.add(cssClass)
      el.textContent = text
      return el
   },

    bodyAppender: (whatToAppend) =>{
      body.appendChild(whatToAppend)
    },
    appender: (whereToAppend, whatToAppend) =>{
       whereToAppend.appendChild(whatToAppend)
    }
   }

}


export {elementCreator}