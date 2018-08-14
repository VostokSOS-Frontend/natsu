"strict mode";

switch (+prompt("Какое задание ?\n 1.Задания с learn.javascript.ru/data-structures(все)\n 2.Задачи с CodeWars\n 3.Пользователь вводит фразу...")) {
case 1: first();
break;
case 2: second();
break;
case 3: third();
break;
default: alert("Нету такого >=[");
break;
}
function random(num) {
    let numb = Math.round(Math.random()*num);
    if (numb == 0) { return(1)}
    else {return(numb)};
}
function first() {



    let htmlOut = "";
    let goods = [];
    let k = random(100);
    for (let i = 0; i < k; i++) {
        goods.push(random(1000))
    }
    htmlOut += "<div style=\" background-color: #CCC; border-radius: 5px; padding: 15px; margin: 3%; font-size: 18px; \"><span style=\" font-size:24px; font-weight: bold; \">Получить последний элемент массива</span><br> важность: 5 <br><br>Как получить последний элемент из произвольного массива?<br><br>У нас есть массив <span style=\" background-color: #BBB; \">goods</span>. Сколько в нем элементов – не знаем, но можем прочитать из <span style=\" background-color: #BBB; \">goods.length</span>.<br><br>Напишите код для получения последнего элемента <span style=\" background-color: #BBB; \">goods</span>.";
    htmlOut += "<div style=\" padding: 20px; margin: 2%; background-color: #AAA; border-radius: 20px;\">";
    for (let i = 0; i < goods.length;i++) {
        if( i<goods.length-1 ){
            htmlOut +=" |"+goods[i];
        }
        else{htmlOut +=" <span style=\" font-size: 24px; font-weight: bold; \">|"+goods[i]+"|</span>"}
    }
    htmlOut+="<br>Массив состоит из "+goods.length+" элементов<br>Последний элемент равен "+goods[goods.length-1];
    htmlOut += "</div></div>";



    htmlOut += "<div style=\" background-color: #CCC; border-radius: 5px; padding: 15px; margin: 3%; font-size: 18px; \"><span style=\" font-size:24px; font-weight: bold; \">Создание массива</span><br>важность: 5<br><br>Задача из 5 шагов-строк:<ul><li>Создайте массив styles с элементами «Джаз», «Блюз».</li><li>Добавьте в конец значение «Рок-н-Ролл»</li><li>Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.</li><li>Удалите первое значение массива и выведите его alert.</li><li>Добавьте в начало значения «Рэп» и «Регги».<</li></ul>" ;
    htmlOut += "<div style=\" padding: 20px; margin: 2%; background-color: #AAA; border-radius: 20px;\">";
    let styles = ["Джаз","Блюз"];
    htmlOut += "<ol><li>" + styles +"</li>";
    styles.push("Рок-н-Ролл");
    htmlOut += "<li>" + styles +"</li>";
    styles[styles.length-2] = "Классика"
    htmlOut += "<li>" + styles +"</li>";;
    let element = styles.shift();
    htmlOut += "<li>" + styles +"</li>";
    styles.unshift("Рэп","Регги");
    htmlOut += "<li>" + styles +"</li></ol>";
    htmlOut += "Типо вывожу в алерт: "+element;
    htmlOut += "</div></div>";
    


    htmlOut += "<div style=\" background-color: #CCC; border-radius: 5px; padding: 15px; margin: 3%; font-size: 18px; \"><span style=\" font-size:24px; font-weight: bold; \">Получить случайное значение из массива</span><br>важность: 3<br><br>Напишите код для вывода случайного значения из массива";
    htmlOut += "<div style=\" padding: 20px; margin: 2%; background-color: #AAA; border-radius: 20px;\">";
    let array = ["Яблоко", "Апельсин", "Груша", "Лимон"];
    htmlOut += array +"<br>Случайное значение: "+array[random(array.length)];
    htmlOut += "</div></div>";



    htmlOut += "<div style=\" background-color: #CCC; border-radius: 5px; padding: 15px; margin: 3%; font-size: 18px; \"><span style=\" font-size:24px; font-weight: bold; \">Создайте калькулятор для введённых значений</span><br>важность: 4<br><br>Напишите код, который:<ul><li> Запрашивает по очереди значения и сохраняет их в массиве. </li><li> Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена». </li><li> При этом ноль <span style=\" background-color: #BBB; \">0</span> не должен заканчивать ввод, это разрешённое число. </li><li> Выводит сумму всех значений массива </li></ul>"
    htmlOut += "<div style=\" padding: 20px; margin: 2%; background-color: #AAA; border-radius: 20px;\">";
    htmlOut += "<input type=\"text\" id=\" textIn \"><button onclick=\" addition() \" type=\" button \">+</button><button onclick=\" calc() \" type=\" button \">=</button>";
    htmlOut += "<div><span id=\" ARR \"></span><br><span id=\" RES \"></span></div> Это д***** у меня не получилось";
    htmlOut += "</div></div>";



    htmlOut += "<div style=\" background-color: #CCC; border-radius: 5px; padding: 15px; margin: 3%; font-size: 18px; \"><span style=\" font-size:24px; font-weight: bold; \">Поиск в массиве</span><br>важность: 3<br><br>Создайте функцию, которая ищет в массиве значение и возвращает его номер, если найдено, или -1, если не найдено."
    htmlOut += "<div style=\" padding: 20px; margin: 2%; background-color: #AAA; border-radius: 20px;\">";
    let arr = ["test", 2, 1.5, false];
    htmlOut += "["+arr+"]";
    htmlOut += "<br>"+find(arr, "test");
    htmlOut += "<br>"+find(arr, 2);
    htmlOut += "<br>"+find(arr, 1.5);
    htmlOut += "<br><br>"+find(arr, 0);



    document.getElementById("main").innerHTML=htmlOut;
}
function find(array, target) {
    for(let i = 0;i < array.length;i++){
        if(array[i] === target){
            return(i);
            break;
        }
        else if (i==array.length-1) {return(-1)};
    }
}
function second() {
    let htmlOut = "Ещё не сделал";
    document.getElementById("main").innerHTML=htmlOut;
}
function third() {
    let htmlOut = "Ещё не сделал";
    document.getElementById("main").innerHTML=htmlOut;
}