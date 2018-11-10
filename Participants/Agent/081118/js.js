"strict mode"
let left = 0;                                       // отступ слева
let TOP = 0;                                        // отступ справа
let ban = [0,0,0,0];                                // запрещённые направления 1 - запрещено, 0 - разрешено [влево, вверх, вправо, вниз]
const element = document.getElementById("box");     // объект
let block = [600,300,620,600];                      // вершины блока
document.addEventListener("keydown",checkPosition); 
function moveBox(){                                 // перемещение объекта
    element.style.left = left+"px";
    element.style.top = TOP+"px";
}
function move(e,ban){                               // обработка движений с учётом запретов
    let key = e.keyCode;
    if (key == 37 & !ban[0]){
        if(left > 0){
            left-=10;
        }
    }
    if (key == 38 & !ban[1]){
        if (TOP > 0){
            TOP-=10;
        }
    }
    if (key == 39 & !ban[2]){
        if (left < window.innerWidth-50){
            left += 10;
        }
    }
    if (key == 40 & !ban[3]){
        if (TOP < window.innerHeight-50){
            TOP += 10;
        }
    }
    moveBox();
    /*console.log("left: "+left+" top: "+TOP+" blocking: "+ ban)*/ // дебаг отступов и запретов в консоли
}
function checkPosition(e) {                         // проверка позиционирования
    ban = [0,0,0,0];
    if (left == 620 & TOP+50 > 300 & TOP < 600){ban[0]=1}
    if (left+50 > 600 & left < 620 & TOP == 600){ban[1]=1}
    if (left+50 == 600 & TOP+50 > 300 & TOP < 600){ban[2]=1}
    if (TOP+40 == 290 & left+50 > 600 & left < 620){ban[3]=1}
    move(e,ban);
}