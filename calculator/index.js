const display = document.getElementById("display");

function myfn(input){
    display.value += input;
}

function clearDisplay(){
    display.value = " " ;
}

function calculate(){
       display.value = eval(display.value); 
}


/* 

function calculate(){
    try{
    
       display.value = eval(display.value); 
    }
    catch(error){

        display.value = "Error";
    }

  */
 
    
    
/*

   ( inner html)

   const display = document.getElementById("display");

function myfn(input) {
    display.innerHTML += input;
}

function clearDisplay() {
    display.innerHTML = "";
}

function calculate() {
    display.innerHTML = eval(display.innerHTML);
}

} 



*/