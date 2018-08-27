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
let RES = [];
addition(RES);
function random(num) {
    let numb = Math.round(Math.random()*num);
    if (numb == 0) { return(1)}
    else {return(numb)};
}
function sum(array) {
    let sum = 0;
    for(let i=0;i<array.length;i++){
        sum += array[i];
    }
    return(sum);
}
function addition(array) {
    let valuE = document.getElementById(" textIn ").value;
    if(valuE){
    valuE = +valuE;
    if (!isNaN(valuE)){
    array.push(valuE);
    let HO = "["+array+"]";
    document.getElementById(" ARR ").innerHTML=HO;
    document.getElementById(" RES ").innerHTML=sum(array);
    }}
    document.getElementById(" textIn ").value="";
}
function camelize(str) {
    let STR = "";
    for (let i = 0; i < str.length; i++){
        if (str[i] === "-"){
            STR += str[i+1].toUpperCase();
            i++;
        }
        else {STR += str[i]}
    }
    return(STR);
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
    htmlOut += array +"<br>Случайное значение: "+array[random(array.length)-1];
    htmlOut += "</div></div>";



    htmlOut += "<div style=\" background-color: #CCC; border-radius: 5px; padding: 15px; margin: 3%; font-size: 18px; \"><span style=\" font-size:24px; font-weight: bold; \">Создайте калькулятор для введённых значений</span><br>важность: 4<br><br>Напишите код, который:<ul><li> Запрашивает по очереди значения и сохраняет их в массиве. </li><li> Выводит сумму всех значений массива </li></ul>";
    htmlOut += "<div style=\" padding: 20px; margin: 2%; background-color: #AAA; border-radius: 20px;\">";
    htmlOut += "<input type=\"text\" id=\" textIn \"> <button onclick=\" addition(RES) \" type=\" button \">+</button>";
    htmlOut += "<div><span id=\" ARR \"></span><br><span id=\" RES \"></span></div>";
    htmlOut += "</div></div>";



    htmlOut += "<div style=\" background-color: #CCC; border-radius: 5px; padding: 15px; margin: 3%; font-size: 18px; \"><span style=\" font-size:24px; font-weight: bold; \">Поиск в массиве</span><br>важность: 3<br><br>Создайте функцию, которая ищет в массиве значение и возвращает его номер, если найдено, или -1, если не найдено.";
    htmlOut += "<div style=\" padding: 20px; margin: 2%; background-color: #AAA; border-radius: 20px;\">";
    let arr = ["test", 2, 1.5, false];
    htmlOut += "["+arr+"]";
    htmlOut += "<br>"+find(arr, "test");
    htmlOut += "<br>"+find(arr, 2);
    htmlOut += "<br>"+find(arr, 1.5);
    htmlOut += "<br><br>"+find(arr, 0);
    htmlOut += "</div></div>";



    htmlOut += "<div style=\" background-color: #CCC; border-radius: 5px; padding: 15px; margin: 3%; font-size: 18px; \"><span style=\" font-size:24px; font-weight: bold; \">Фильтр диапазона</span><br>важность: 3<br><br>Создайте функцию, которая принимает массив чисел и возвращает новый массив, который содержит только числа из диапазона от a до b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять массив."
    htmlOut += "<div style=\" padding: 20px; margin: 2%; background-color: #AAA; border-radius: 20px;\">";
    let arra = [5, 4, 3, 8, 0];
    htmlOut += "["+arra+"]";
    htmlOut += "<br>"+"filterRange(array,3,5)";
    let filtered = filterRange(arra,3,5);
    htmlOut += "<br>"+filtered;
    htmlOut += "</div></div>";



     htmlOut += "<div style=\" background-color: #CCC; border-radius: 5px; padding: 15px; margin: 3%; font-size: 18px; \"><span style=\" font-size:24px; font-weight: bold; \">Перевести текст вида border-left-width в borderLeftWidth</span><br>важность: 3<br><br>Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».<br><br>То есть, дефисы удаляются, а все слова после них получают заглавную букву."
    htmlOut += "<div style=\" padding: 20px; margin: 2%; background-color: #AAA; border-radius: 20px;\">";
    htmlOut += "camelize(\"background-color\") == "+camelize("background-color");
    htmlOut += "<br>camelize(\"list-style-image\") == "+camelize("list-style-image");
    htmlOut += "<br>camelize(\"-webkit-transition\") == "+camelize("-webkit-transition");
    htmlOut += "</div></div>";



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
function filterRange(array,a,b) {
    let rrr = [];
    if (a > b){
        let c = a;
        a = b;
        b = c;
    }
    for (let i = 0; i <= array.length;i++){
        for(let j = a;j <= b;j++){
            if (array[i] == j) {
                rrr.push(array[i]);
            }
        }
    }
    return(rrr);
}

function second() {
    let htmlOut = "";
    htmlOut += "<div style=\" background-color: #CCC; border-radius: 5px; padding: 15px; margin: 3%; font-size: 18px; \"><span style=\" font-size:24px; font-weight: bold; \">Given an array of integers, return a new array with each value doubled.</span>"
    htmlOut += "<div style=\" padding: 20px; margin: 2%; background-color: #AAA; border-radius: 20px;\">";
    let array = [];
    let aRray = [];
    k = random(5) + 3;
    for (let i = 0;i < k;i++){ array[i] = random(10); }
    htmlOut += "["+array+"]";
    for (let i = 0;i < k;i++){ aRray[i] = array[i] * 2; }
    htmlOut += "<br>["+aRray+"]";
    htmlOut += "</div></div>";



    htmlOut += "<div style=\" background-color: #CCC; border-radius: 5px; padding: 15px; margin: 3%; font-size: 18px; \"><span style=\" font-size:24px; font-weight: bold; \">You get an array of numbers, return the sum of all of the positives ones.</span>"
    htmlOut += "<div style=\" padding: 20px; margin: 2%; background-color: #AAA; border-radius: 20px;\">";
    array = [];
    let Sum = 0;
    k = random(5) + 2;
    for (let i = 0;i < k;i++){ array[i] = random(10) - 5; }
    htmlOut += "["+array+"]";
    for (let i = 0;i < k;i++){ if(array[i] > 0){Sum += array[i]}  }
    htmlOut += "<br>"+Sum;
    htmlOut += "</div></div>";



    htmlOut += "<div style=\" background-color: #CCC; border-radius: 5px; padding: 15px; margin: 3%; font-size: 18px; \"><span style=\" font-size:24px; font-weight: bold; \">Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.</span>"
    htmlOut += "<div style=\" padding: 20px; margin: 2%; background-color: #AAA; border-radius: 20px;\">";
    array = [];
    aRray = [];
    k = random(5) + 4;
    for (let i = 0;i < k;i++){ array[i] = random(10); }
    htmlOut += "["+array+"]";
    for (let i = 0;i < k;i++){if(array[i] < 5){aRray[i] = 0}else{aRray[i] = 1}  }
    htmlOut += "<br>["+aRray+"]";
    htmlOut += "</div></div>";



    htmlOut += "<div style=\" background-color: #CCC; border-radius: 5px; padding: 15px; margin: 3%; font-size: 18px; \"><span style=\" font-size:24px; font-weight: bold; \">Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.</span><br><br>The output should be two capital letters with a dot seperating them."
    htmlOut += "<div style=\" padding: 20px; margin: 2%; background-color: #AAA; border-radius: 20px;\">";
    array = ["Sam Harris","Patrick Feeney"];
    htmlOut +=array[0]+"=>"+convert(array[0]);
    htmlOut +="<br>"+array[1]+"=>"+convert(array[1]);
    htmlOut += "</div></div>";




    htmlOut += "<div style=\" background-color: #CCC; border-radius: 5px; padding: 15px; margin: 3%; font-size: 18px; \"><span style=\" font-size:24px; font-weight: bold; \">Return the average of the given array rounded down to its nearest integer.</span><br><br>The array will never be empty."
    htmlOut += "<div style=\" padding: 20px; margin: 2%; background-color: #AAA; border-radius: 20px;\">";
    array = [];
    Sum = 0;
    let Avr = 0;
    k = random(5) + 2;
    for (let i = 0;i < k;i++){ array[i] = random(13) * 0.98; }
    htmlOut += "["+array+"]";
    for (let i = 0;i < k;i++){ array[i] = Math.floor(array[i]); Sum += array[i] }
    Avr = Math.floor(Sum / array.length);
    htmlOut += "<br>Avergage: "+Avr;
    htmlOut += "</div></div>";




    document.getElementById("main").innerHTML=htmlOut;
}
function convert(full) {
    let Names = full.split(" ");
    let FirstName = Names[0].split("");
    let SecondName = Names[1].split("");
    let result =FirstName[0]+"."+SecondName[0]; 
    return(result);
}
function third() {
    let htmlOut = "<div style=\" position: absolute; font-size: 50px; color: #F00; right: 10%; top: 20%; margin-left: -192px; border: 3px solid; border-radius: 10px; padding: 15px; border-color: #E00; transform: rotate(15deg); \">Ещё не сделал</div>";
    document.getElementById("main").innerHTML=htmlOut;
}