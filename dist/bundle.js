(()=>{"use strict";const e=(e,t,n,o)=>({name:e,description:t,dueDate:n,priority:o}),t=()=>{const e=document.querySelector("content");return{divMaker:()=>document.createElement("div"),h1Maker:()=>document.createElement("h1"),pMaker:()=>document.createElement("p"),bodyAppender:t=>{e.appendChild(t)}}};e("Example To Do1","An example to do element",12,"Low"),e("Example To Do2","An example to do element",15,"Medium");const n=t().h1Maker();t().bodyAppender(n)})();