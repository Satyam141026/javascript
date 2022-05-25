alert("hello");
const students = [
{name: "harry", subject: "javaScript"},
{name: "rohan", subject: "machine learning"},
]

function enrollStudent(student)
{
setTimeout(function (){
    students.push(student);
},3000)
}
function getStudets()
{
    setTimeout(function(){
        let str="";
        students.forEach(function(student){
        str+='<li>' $(student.name)'</li>'
    });
    document.getElementById('student').innerHTML=str;}, 1000);

}

let newStudent = {name:"Sunny",subject:"pythone"}
 enrollStudent(std);
 getStudets();