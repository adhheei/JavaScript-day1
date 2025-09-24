function convert(){
    let n1=parseFloat(document.getElementById("USD").value);
    
    let inr=88.08;
    let con=n1*inr;
    document.getElementById("result").innerHTML="Result : "+ con;
}