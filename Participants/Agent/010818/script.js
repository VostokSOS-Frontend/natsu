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
let List = [];
function writeList()
{
    let message = document.getElementById("text").value;
    List.push(message);
    let htmlOut = "<ul>";
    List.forEach(function(element,index){htmlOut += "<li>" + element + "<button onclick=\"removeList("+index+")\">X</button>"+"</li>";});
    htmlOut += "</ul>";
    document.getElementById("list").innerHTML=htmlOut;
}
function removeList(index)
{
    List.splice(index,1);
}