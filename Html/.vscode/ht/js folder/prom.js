var prom= new Promise(function(resolve, reject) {
  var drive="";  

if(drive)
{

    resolve("yes");
}
else{
    reject("no");
}
});

prom.then(function(resolve){
console.log(resolve+"the user is drive");


}).catch(function (reject){

console.log(reject+"does not drive")
})