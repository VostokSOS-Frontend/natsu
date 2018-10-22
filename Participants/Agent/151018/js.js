"strict mode"
let balance = 250;
const winCombs = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[6,4,2]];
const images = [
    "http://cliparthouse.ru/wp-content/uploads/fruit/54-fruit-lemons-2.jpg",
    "http://cliparthouse.ru/wp-content/uploads/fruit/64-fruit-pineapple-1.jpg",
    "http://cliparthouse.ru/wp-content/uploads/fruit/79-fruit-strawberry-4.jpg"];
const numCount = images.length-1;
document.getElementById("balance").innerText = balance;
function randomNumbers(count) {
    let result = [];
    for(let i=0;i<9;i++){
        result[i] = Math.floor(Math.random()*(count+1));}
    return result;}
function checkWins(table) {
    let combo =0;
    for (let i=0; i < winCombs.length-1; i++){
        if ( (table[winCombs[i][0]]===table[winCombs[i][1]]) && (table[winCombs[i][1]]===table[winCombs[i][2]]) ){
            combo++;
            createLine(i);
        }}
    return combo;}
function createDiv(position,angle) {
    let line = document.createElement("div");
    line.className = "line";
    line.id = "line";
    line.style.top = position * 100 +"px";
    line.style.transform = "rotate("+angle+")";
    let table = document.getElementById("slotmachine");
    table.insertBefore(line);
}
function crateline(index) {
    switch(index){
        case "1": createDiv(1,0);
        break;
        case "2": createDiv(2,0);
        break;
        case "3": createDiv(3,0);
        break;
        case "4": createDiv(2,45);
        break;
        case "5": createDiv(2,-45);
        break;
    }
}
function output(numbers){
    numbers.forEach(function(number,index){
        let id = "slot"+(index+1);
        let slot = document.getElementById(id);
        if(slot.innerHTML){
        slot.innerHTML = "";
        }
        let slotImage = document.createElement("img");
        slotImage.src = images[number];
        slotImage.alt = "image";
        slotImage.className = "imageInSlot";
        slot.appendChild(slotImage);
    });
    printBalance();
}
function printBalance() {
    document.getElementById("balance").innerText = balance;
}
function startGame(){
    if(balance > 9){
        balance -= 10;
        let numbers = randomNumbers(numCount);
        output(numbers);
        let combo = checkWins(numbers);
        if(combo){
            balance+=20*combo;
            printBalance();
        }
        
    } else {
        alert("У вас слишком мало денег!");
    }
}