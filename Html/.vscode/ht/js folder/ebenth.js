
// intro to events
// click 
// event add karne ke 3 tarike hai 
// 1.) 
//const btn = document.querySelector(".btn-headline");
// method --- addEventListener
// function clickMe(){
//     console.log("you clicked me !!!!!");
// }
// btn.addEventListener("click", function(){
//     console.log("you clicked me !!!!");
// });


// btn.addEventListener("click", ()=>{
//     console.log("arrow function !!!")
// });



//const btn = document.querySelector(".n");

// btn.addEventListener("click", function(){
  //       console.log("you clicked me !!!!");
    // });
//btn.addEventListener("click",()=> 
  //  console.log("you clicked me !!!!")
//)


const allButtons = document.querySelectorAll(".n");


for(let b of allButtons){
  button.addEventListener("click", function(){
       console.log(this);
     })
// }

// for(let i = 0 ; i< allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }
// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(this);
//         });
// })