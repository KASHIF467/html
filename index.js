function getPerc() {
    let name = prompt("enter your name")
    let obtMarks = document.getElementById("obt1").value ;
    let tmMarks = document.getElementById("tm1").value
    res = obtMarks /tmMarks * 100
alert("dear "+name + "you have got " + res + "%")
document.write("dear "+name + "you have got " + res + "%")
console.log("dear "+name + "you have got " + res + "%")



}