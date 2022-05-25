
let hour ,min,sec,time;
setInterval(() => {
     a= new Date();
   
    time=a.getHours()-12+":"+ a.getMinutes()+ ":"+a.getSeconds();
    document.getElementById('time').innerHTML=time;
  
}, 1000);
