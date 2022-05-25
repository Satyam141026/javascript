var reg=/[a-z]12{2}/;




function regular()
{
var x=document.getElementById("a").value;
document.writeln(x);
alert(reg.test(x));
if(reg.test(x))
{

alert("valid");

}
else{

    alert("invalid");

}
}