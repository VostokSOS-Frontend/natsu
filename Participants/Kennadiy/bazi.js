/*document.getElementsByName('submit') [0].onclick = () => {
    //get day
    const day = +document.getElementsByName('input-day')[0].value;
    const month = +document.getElementsByName('input-day')[0].value;
    if
} */

document.getElementsByName('output');

document.write('')

document.write('<table border="1">');
for (let i = 1; i <= 10; i++) {
    document.write('<tr>');
    for (let k = 1; k < 10; k++) {
        document.write(`<td> ${i} * ${k} = ${i*k} </td>`);
    }
    document.write('</tr>');
}
if ((i+k)%0) {document.write('<td style="background-color: green">')}
document.write('/table');