function bmiCal(){
   let n1 =parseFloat(document.getElementById("height").value);
   let n2 =parseFloat(document.getElementById("weight").value); 

   let sqr=parseFloat(n1*n1);
   let bmi=parseFloat(n2/sqr);
   document.getElementById("result").innerHTML="Result :"+bmi;
}