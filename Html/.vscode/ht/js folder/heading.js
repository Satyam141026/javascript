const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
setTimeout(() => {
    heading1.textContent = "one";
    heading1.style.color = "violet"
    setTimeout(() => {
        heading2.textContent = "one";
    heading2.style.color = "green"
    setTimeout(() => {
        heading3.textContent = "one";
    heading3.style.color = "red"
    setTimeout(() => {
        heading4.textContent = "one";
    heading4.style.color = "green"
    setTimeout(() => {
        heading5.textContent = "one";
    heading5.style.color = "green"
    
    setTimeout(() => {
        heading6.textContent = "one";
    heading6.style.color = "green"
    
    }, 2000);}, 2000);
    
    }, 2000);
    
    }, 2000);
    
    }, 2000);
}, 1000);