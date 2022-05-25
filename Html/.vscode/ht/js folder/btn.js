const a=document.querySelectorAll(".mybttion button");
console.log(a);
a.forEach((button)=>{
   button.addEventListener("click",(e)=>{
     // console.log( e.currentTarget.textContent);
      console.log( e.currentTarget);
      e.target.style.backgroundColor="yellow";
      e.target.style.color="#2222";

   })
})