let str = "строка"
for (let k =0;k<101;k++) {
    for(let i=0;i<str.length;i++) {
        document.write("<p>");
        for (j=0;j<i+1;j++) {
            document.write(str[i]);
        }
        document.write("</p>");
    }
    for(let i=0;i<str.length-1;i++) {
        document.write("<p>");
        for (let j=0;j<str.length-i-1 ;j++) {
            document.write(str[str.length-i-1]);
        }
        document.write("</p>");
    }
}