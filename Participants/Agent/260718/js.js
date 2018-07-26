let str = prompt("Введите слово");
let Offset = +prompt("Введите начальный угол.\n(По умолчанию текст начинается на 13. Сдвиг по часовой стрелке)");
const step = 360 / str.length;
const Radius = 920 / step;
alert("Шаг: "+step+"\nРадиус: "+Radius+"\nКоличество символов: "+str.length);
document.write("<div class=\"circle\">");
if (Offset == "") {Offset = 0};
let j = 0;
for (let i=0;i<360;i+=step) {
	let x = Math.cos(i*(Math.PI/180)+200+Offset)*Radius+1.2*Radius;
    let y = Math.sin(i*(Math.PI/180)+200+Offset)*Radius+1.2*Radius;
	document.write("<span style=\"position: absolute; left: "+x+"px; top: "+y+"px"+"\">"+str[j]+"</span>");
    j++
}
document.write("</div>");
