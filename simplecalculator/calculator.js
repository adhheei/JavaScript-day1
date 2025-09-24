function add(){
    let n1=parseFloat(document.getElementById("num1").value);
    let n2=parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerText="Result : " +(n1+n2);
}

function sub(){
    let n1=parseFloat(document.getElementById("num1").value);
    let n2=parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerText="Result : " +(n1-n2);
}