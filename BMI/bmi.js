function calculator(){

    var bmi;

    var result=document.getElementById("result");

    var wei = parseInt(document.getElementById("wei").value);

    document.getElementById("weight").textContent = wei + " kg";
    
    var hei = parseInt(document.getElementById("hei").value);

    document.getElementById("height").textContent = hei + " cm";
     
    bmi = (wei / Math.pow( (hei/100), 2 )).toFixed(1);

    result.textContent = bmi;


}