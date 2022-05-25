const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(element){
              element.textContent = text;
              element.style.color = color;
              resolve();
            }else{
              reject("element not found");
            }
          },time)
    })  
  }
changeText(heading1, "one", "red", 1000)
.then(()=>  changeText(heading2, "one", "red", 1000) )
.then(()=>  changeText(heading3, "one", "red", 1000) )
.then(()=>  changeText(heading4, "one", "red", 1000) )
.then(()=>  changeText(heading5, "one", "red", 1000) )
.then(()=>  changeText(heading6, "one", "red", 1000) )
.then(()=>  changeText(heading7, "one", "red", 1000) )
.then(()=>  changeText(heading8, "one", "red", 1000) )
.then(()=>  changeText(heading9, "one", "red", 1000) )
.then(()=>  changeText(heading10, "one", "red", 1000) )