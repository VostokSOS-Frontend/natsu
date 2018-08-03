"strict mode"
/*
let list = [];
let i = 0;
while (true){
    i++;
    let message = prompt("Какие важные дела у вас есть?\nВведите пустую строку чтобы закончить список дел.");
    if(message == 0){
        break;
    }
    list.push(message);
}
i=0;
list.forEach(function(element) {
    i++;
    document.write("<p>"+i+"]"+element+"</p>");
});
*/
let List=[];
function readList()
{
    let htmlOut = "<ul>";
    List.forEach(function(element,index){htmlOut += "<li>" + element + "<button onclick=\"removeList("+index+")\">X</button>"+"</li>";});
    htmlOut += "</ul>";
    document.getElementById("list").innerHTML=htmlOut;
}
function writeList()
{
    let message = document.getElementById("text").value;
    List.push(message);
    readList();
}
function removeList(index)
{
    List.splice(index,1);
    readList();
}
function clearText()
{
    document.getElementById("text").value = "";
}
function saveList()
{
    localStorage.setItem("List",List);
    alert("Сохранено!");
}
function clearList()
{
    localStorage.removeItem("List");
    alert("Удалено!");
}
function loadList()
{
    let chars = localStorage.getItem("List");
    let j = 0;
    for (let i = 0; i < chars.length; i++)
    {
        if(chars[i] != ","){
            if(List[j] == undefined)
            {
                List[j] = chars[i];
            }
            else 
            {
                List[j] += chars[i];
            }
        }
        else {j++}
    }
    alert("Сохранение загружено!");
    readList();
}