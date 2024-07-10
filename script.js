function calculate(){
    let mon=Number(document.getElementById("month").value);
    let rate=0;
    if(mon<3){
        rate=5.8;
    }
    else if(mon>=3 && mon<=6){
        rate=6.5;
    }
    else if(mon>=7 && mon<=9){
        rate=6.8;
    }
    else {
        rate=7;
    } 
    let result=document.querySelector("#result")
    result.innerHTML="Your interest rate is " + rate + "%";
}