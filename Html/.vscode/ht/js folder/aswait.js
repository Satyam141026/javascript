
const url= "https://jsonplaceholder.typicode.com/posts";
async function data() {
  const a=await  fetch(url);
const b=await a.json();
return b;
}
const z=data()
.then(z=>{

    console.log(z) ;


})