function compute(){
    //Create variables which gets the values to calculate 
    var principal=parseFloat(document.getElementById("principal").value);
    var rate=parseFloat(document.getElementById("rate").value);
    var years=parseInt(document.getElementById("years").value);
    var interest=principal*years*rate/100;
    var year=new Date().getFullYear()+years; 
    //Create the Interest text
    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
    "at an interest rate of <mark>" + rate +"%"+ "</mark>,<br/>" +
    "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
    "in the year <mark>" + year + "</mark>";

}
    //update the rate value
function getSliderValue() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value;
}   
    //check for positive values
function validateAmount()
    // Function returns false if Amount entered is less than or equal to zero
{
    var principal = document.getElementById("principal");
    if (principal.value<=0){
        alert ("Enter a positive number");
        principal.focus();
        return false;
    }
    return true;
}