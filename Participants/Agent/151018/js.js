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
    for (let i=0; i < winCombs.length; i++){
        if ( (table[winCombs[i][0]]===table[winCombs[i][1]]) && (table[winCombs[i][1]]===table[winCombs[i][2]]) ){
            combo++;
            showwinline(i);
        }}
    return combo;
}
function showwinline(number){
    let line = document.getElementsByClassName("winline")[number];
    let className = line.className;
    className = className.slice(0,-5);
    line.className = className;
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
function hidelines() {
    let lines = document.getElementsByClassName("winline");
    let className = "";
    let line;
    for (let i=0; i < lines.length;i++){
        line = lines[i];
        className = line.className;
        if(className.slice(-4) != "hide"){
        line.className = className + " hide";
        }
    };
}
function startGame(){
    hidelines();
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