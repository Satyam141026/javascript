

function debounce(func ,delay) {
    let timeoutid=0;
    return function (...args) {
        if(timeoutid){

            clearTimeout(timeoutid);
        }
             timeoutid=setTimeout(() => {
            func.call(this, ...args);
        }, delay);
     
    }
}

const my = document.getElementById("input-event");
function Hello(e){
  console.log("sugesstion for the  ",e.target.value);

}
const de= debounce(Hello,500);
my.addEventListener("input", de);


/*const debou=debounce(Hello);
debou();*/
/*my.addEventListener("input",(e)=>{
console.log(e.target.value);
})*/
