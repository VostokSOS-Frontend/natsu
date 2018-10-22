(()=>{
/*'use strict';
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth(); // 0-11
let date = now.getDate();
let dayOfWeek = now.getDay();
let hours = now.getHours();
let minutes = now.getMinutes();
let sec = now.getSeconds();
let ms = now.getMilliseconds();
*/
function addLeadingZero(n) {
    if (n < 10) {
        return ('0' + n);} 
    else {
        return(n)
    }
} 

/* [month, date, hours, minutes, sec] = [month, date, hours, minutes, sec].map(addLeadingZero())


let dateTimeStr = `${hours}:${minutes}:${sec} ${date}.${month}.${year}`
console.log('') */

// new Date(34t6456544)

/* let arr1 = new Array()

 Функция-конструктор */

function showTime() {
    'use strict';
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth(); // 0-11
let date = now.getDate();
let dayOfWeek = now.getDay();
let hours = now.getHours();
let minutes = now.getMinutes();
let sec = now.getSeconds();
let ms = now.getMilliseconds();
[month, date, hours, minutes, sec] = [month, date, hours, minutes, sec].map(addLeadingZero)


let dateTimeStr = `${hours}:${minutes}:${sec} ${date}.${month}.${year}.`
console.log(dateTimeStr)


document.getElementById('watch').innerHTML = `${hours}:${minutes}:${sec} ${date}.${month}.${year}.`;

let timeInt = setInterval(showTime, 1000);
clearInterval(timeInt);
}
})();