const makerTemplate = (whatToMake, text = "", cssClass) =>{
      const el = document.createElement(whatToMake)
      el.classList.add(cssClass)
      el.textContent = text
      return el
}

const elementCreator = () => {

   const body = document.querySelector('#content')

   return {
    divMaker: (cssClass) =>{
      return makerTemplate("div", text, cssClass)
    },

    h1Maker: (text, cssClass) =>{
       return makerTemplate("h1", text, cssClass)
    },

    pMaker: (text, cssClass) => {
      return makerTemplate("p", text, cssClass)
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