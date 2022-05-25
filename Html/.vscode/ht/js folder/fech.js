//console.log("hello");
let btn =document.getElementById("btn");
let content =document.getElementById("content");

function getData()
{
    console.log("started get data");
 url="D:\Java Script\Html\.vscode\ht\js folder\te"; 
fetch(url).then((response)=>{
    console.log("inside");
return response.text();
}).then((data)=>{
console.log(data);

})
}
getData()






