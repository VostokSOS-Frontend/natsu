"strict mode"

let balance = 100;
let numCount = 5;
let winCombs = [
    [0,1,2],[3,4,5],[6,7,8],[0,4,8],[6,4,2]
];
document.getElementById("balance").innerText = balance;
function randomNumbers(count) {
    let result = [];
    for(let i=0;i<9;i++){
        result[i] = Math.floor(Math.random()*(count+1));
    }
    return(result);
}

function checkWins(winCombs,table) {
    let wins =0;
    for (let i=0; i < winCombs.length;i++){
        if ((table[winCombs[i,0]]===table[winCombs[i,1]]) && (table[winCombs[i,0]]===table[winCombs[i,2]])){
            wins++;
        }
    return(wins);
    }
}

function writeTable(numbers){
    numbers.forEach(function(element,index){
        let name = "slot"+(index+1);
        let slot = document.getElementById(name);
        slot.innerText = element;
    });
    document.getElementById("balance").innerText = balance;
}

function startGame(){
    if(balance > 9){
        balance -= 10;
        let numbers = randomNumbers(5);
        writeTable(numbers);
        let wins = checkWins(winCombs,numbers);
        if(wins){
            balance+=10*(wins+1);
            document.getElementById("balance").innerText = balance;
        }
        
    }
    else{alert("У вас слишком мало денег!")}
}