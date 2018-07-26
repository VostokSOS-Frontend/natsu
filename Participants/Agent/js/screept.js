"strict mode"

let message = +prompt("Сколько 2+2 ?\n1. 1\n2. 2\n3. 4\n4. 5");

if (message == 3)  
    {
    alert("Very good!");

    message=+prompt("Do you have brain ?\n1. Yes\n2. No"); 

    if(message == 1) 
        {
        alert("Очень рад за тебя!")
        }
    else{
        alert("I`m so sorry . . .");
        }
    }
else {alert("Very bad!")};