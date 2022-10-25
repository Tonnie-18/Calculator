let outputScreen= document.getElementById("display");

function display (num){
    outputScreen.value +=num;
}

function calculate(){
    try{
        outputScreen.value= eval(outputScreen.value);
    }
    catch(err)
    {
         alert("invalid")
    }
}

function clear(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}