let money = 1000;
let win = 300;
let lose = 100;

/*onclick?*/

function checkScore() {
    if (money < 100) {alert('Not enough money!')}
    else {money = money - 100}
}



function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function setIntegerIntoSlot() {
        numbers = [];
      for(let i=0; i<9; i++){
         let random = getRandomInteger(1,9);
         document.getElementById('cell'+ i).innerText = random + "";
         numbers.push(random);
        }
}

function checkFirstRow() {
if( numbers[0] === numbers[1] && numbers[1] === numbers[2]){
    return true;}
else {return false;}
}

function checkSecondRow() {
    if( numbers[3] === numbers[4] && numbers[4] === numbers[5]){
        return true;}
    else {return false;}
    }

function checkThirdRow() {
        if(numbers[6] === numbers[7] && numbers[8] === numbers[7]){
            return true;}
        else {return false;}
        }

function rewardCalculating() {
if ((checkFirstRow() && checkSecondRow() && checkThirdRow()) === false) {alert("Ma point");
}
else if ((checkFirstRow() && checkSecondRow() && checkThirdRow()) === true) {
    print('Rampage!!!');
    money = money + win * 10;
}
else if (((checkFirstRow() && checkSecondRow()) === true) or (2 && 3 true) or (1 && 3 true))) {
    print('Double kill');
    money = money + win * 3;
}
}