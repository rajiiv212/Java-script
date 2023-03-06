var tbcal = "";
const inputbox = document.getElementById('inputbox');
const outputbox = document.getElementById('outputbox');

function cal(value){
    tbcal += value;
    inputbox.value = tbcal;
}

function removech(){
    tbcal = tbcal.substring(0,tbcal.length - 1);
    inputbox.value = tbcal;
}

function execm(){
    if(tbcal.length == 0 || tbcal== ""){
      alert("Need a input");
      return;
    }
    try {
        ans = eval(tbcal);
        outputbox.value = ans;
    }
    catch (err){
        alert("Input Invalid")
    }
}



function reset(){
    outputbox.value =  "";
    inputbox.value = "";
    tbcal = ""; 
}