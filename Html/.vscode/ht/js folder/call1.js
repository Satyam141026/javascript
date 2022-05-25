var id=0;
var message=()=>alert("satyam sharma");
function start()
{
 id=setTimeout(message,2000);


}
 
function stop()
{
clearTimeout(id);

}
 
