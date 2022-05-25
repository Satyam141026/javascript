const bucket=['eat','food','egg'];
const full=new Promise((resolve,reject)=>{
if (bucket.includes("eggs")) {

    resolve("problem resolved");
    
} else {
    reject("dont fullfill");
    
}

});
full.then(maths=>{
console.log("let eats", maths);

}, (error)=>{

console.log(error);


})