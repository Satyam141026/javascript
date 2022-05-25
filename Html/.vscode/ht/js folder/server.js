const url= "https://jsonplaceholder.typicode.com/posts";
const xhr=new XMLHttpRequest();
const response = xhr.response;

const a=xhr.open("GET",url);
console.log(xhr.readyState);
xhr.onload = function(){
    const response = xhr.response;
     console.log(xhr.readyState);

const data=JSON.parse(response);
console.log(data);
console.log(data[3].id);
console.log(xhr.status);

}

xhr.send();