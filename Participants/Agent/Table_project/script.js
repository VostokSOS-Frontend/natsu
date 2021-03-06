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
let Name = "";
let List=[];

function readList()
{
    let htmlOut = "<ol style=\"padding-left: 40px;\">";
    List.forEach(function(element,index){htmlOut += "<li class=\"item__load\">" + element + "<button class=\"item__load_btn_remove\" onclick=\"removeList("+index+")\">&#10008</button>"+"</li><hr>";});
    htmlOut += "</ol>";
    document.getElementById("list").innerHTML=htmlOut;
}
function writeList()
{
    let message = document.getElementById("text").value;
    if (message){
    List.push(message);
    readList();
    }
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
    let ListJoin = List.join("§");
    localStorage.setItem(Name,ListJoin);
    showMessage("Сохранено!");
}
function clearList()
{
    if (confirm("Удалить сохранение ?")){
    localStorage.removeItem(Name);
    showMessage("Удалено!");
    }
}
function loadList(atr)
{
    let chars = localStorage.getItem(Name);
    if( !chars){
        List = [];
        showMessage("Сохранений нет");
    }
    else {
    List = chars.split("§");
    if(!atr){
    showMessage("Сохранение загружено!");
    }
    readList();
    }
}
function refresh() {
    loadList(1);
    readList();
}
function setName(name) {
    Name = name;
    refresh();
}
function closeCreateSave() {
    let menu = document.getElementById("createSave");
    menu.classList.add("hidden");
    document.getElementById("SaveNameIn").value = "";
}
function openCreateSave() {
    let menu = document.getElementById("createSave");
    menu.classList.remove("hidden");
}
function createNewSave() {
    let name = document.getElementById("SaveNameIn").value;
    if (name >= 4){
    closeCreateSave();
    if(true){
    showMessage("Сохранение создано!");
    }
    else if (false) {}
    }
    else { showMessage("Введите имя минимум из 4 символов!") }
}
function showMessage(message){
    let element = document.getElementById("message");
    element.innerText = message;
    element.classList.add("showMessage");
    setTimeout(() => element.classList.remove("showMessage"),2000);
}