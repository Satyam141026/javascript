//const url= "https://jsonplaceholder.typicode.com/posts";
const url= "https://jsonplaceholder.typicode.com/photos";
const xhr=new XMLHttpRequest();
fetch(url)
.then((response)=>
{

console.log(response.json());

}).then(data=>{

    console.log(data);

}).catch(error=>
{
    console.log("try");   
});