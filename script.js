console.log("hi")
console.log("hello world")

var a=10
var b=20
console.log("a+b")
console.log(a+b)

function submit(){
    let text=prompt("Enter name","xxx")
    if(text!=null){
        console.log("Hello"+text)
    }
}

var inp=document.getElementById("demo").innerText
console.log(inp)
var w=document.getElementById("demo").innerHTML="hello"
console.log(w)

const pi=3.14
function area(r){
    console.log("Area of circle="+pi*r*r)
}

function add(){
    let val=document.getElementById("num").innerHTML
    let num=Number(val)+1
    document.getElementById("num").innerHTML=num
}

function sub(){
    let val=document.getElementById("num").innerHTML
    let num=Number(val)-1
    document.getElementById("num").innerHTML=num
}