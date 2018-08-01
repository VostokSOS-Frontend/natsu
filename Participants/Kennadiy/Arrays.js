let todoList = [];
//todoList.push('Покормить');
//todoList.push('Поиграть');

let i=0;
while (1) {
    i++;
let delo = prompt('Kakie dela', 'Kakie?');
    if (delo == 0) {
      break;}
      todoList.push(delo);
}

/* for (let i=0; i<todoList.length; i++) {document.write('<p>' + todoList[i] + '</p>')
} */

function output () {
let tag_delo = '<ul>';
todoList.forEach(function(element, index) {document.write('<li>' + element + '</li>' + '<button onclick="remove_item(' + index + '>" X </button>');
});
document.getElementById('output').innerHTML=tag_delo;
}
output();


/*function add_delo () {
let textarea = '';
document.getElementById('add_delo').innerHTML=textarea; */

function remove_item (index) {
    todoList.splice(index, 1);
    output();
}