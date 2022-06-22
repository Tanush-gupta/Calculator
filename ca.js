  var x="";
function addTox(a){
    x+=a;
    document.getElementById("display").innerText=x;
}
function cLear(){
    x='';
    document.getElementById("display").innerText=x;
}
function delTox(){
    let length=x.length;
    x=x.substr(0,length-1);
    document.getElementById("display").innerText=x;
}
function Home(){
    x=document.getElementById("exp").value;
    x='= '+eval(x);
    document.getElementById("exp").value=x;
}
function clear2(){
    x='';
    document.getElementById("exp").value=x;
}