function promise(params) {
    return new Promise((resolve,reject)=>{
        resolve("hello");
    })
}
promise().then(value=>{
    console.log(value);
    value +=" satyam";
    return value;
}).then((value) => {

    console.log(value);
});