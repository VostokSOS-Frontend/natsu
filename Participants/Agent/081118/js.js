"strict mode" 
function moveBox(){                                 // перемещение объекта
    element.style.left = left+"px";
    element.style.top = TOP+"px";
}
function move(e,ban){                               // обработка движений с учётом запретов
    let key = e.keyCode;
    if (key == 37 & !ban[0]){
        if(left > 10){
            left-=10;
        }
    }
    if (key == 38 & !ban[1]){
        if (TOP > 10){
            TOP-=10;
        }
    }
    if (key == 39 & !ban[2]){
        if (left < window.innerWidth-60){
            left += 10;
        }
    }
    if (key == 40 & !ban[3]){
        if (TOP < window.innerHeight-60){
            TOP += 10;
        }
    }
    moveBox();
    /*console.log("left: "+left+" top: "+TOP+" blocking: "+ ban)*/ // дебаг отступов и запретов в консоли
}
function checkPosition(e) {                         // проверка позиционирования
    ban = [0,0,0,0];
    for (let i = 0; i < blocks.length;) {
        let XWidth        
        let YHeight
        let Xleft
        let Ytop
        if (left == 620 & TOP+50 > 300 & TOP < 600){ban[0]=1}
        if (left+50 > 600 & left < 620 & TOP == 600){ban[1]=1}
        if (left+50 == 600 & TOP+50 > 300 & TOP < 600){ban[2]=1}
        if (TOP+40 == 290 & left+50 > 600 & left < 620){ban[3]=1}
    }
    move(e,ban);
}
/*
function displayBlocks() {
    for(let i = 0; i < blocks.length;){
        let block = document.createElement("div");
        block.classList.add("block");
        block.style.left = blocks[i][0] + "px";
        block.style.top = blocks[i][1] + "px";
        block.style.width = blocks[i][2] + "px";
        block.style.height = blocks[i][3] + "px";
        arena.appendChild(block);
    }
}
*/
let left = 10;                                         // отступ слева
let TOP = 10;                                          // отступ справа
let ban = [0,0,0,0];                                  // запрещённые направления 1 - запрещено, 0 - разрешено [влево, вверх, вправо, вниз]
const element = document.getElementById("box");       // объект
const arena = document.getElementById("arena");
let blocks = [[600,300,20,300],[300,100,200,20]];     // [left,top,width,height]
document.addEventListener("keydown",checkPosition);
displayBlocks();
