
const displayText = document.getElementById("displayText");
const operator = document.querySelectorAll(".operator");

function apendToDisplay(input){
    if(displayText.innerText == "error"){
        clearDisplay();
        displayText.innerText += input;
    }
    else{
        displayText.innerText += input;
    }
}
function clearDisplay(){
    displayText.innerText = "";
}
function calculate(){
    try{
        displayText.innerText = eval(displayText.innerText);
    }
    catch(error){
        displayText.innerText = "error";
    }
}
function deleteChar(input){
    displayText.innerText -= input;
}