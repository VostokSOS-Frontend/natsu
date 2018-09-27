
const imgArray = [ {src:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Aedes_aegypti_biting_human.jpg/1200px-Aedes_aegypti_biting_human.jpg', title:'Komar-1'},
{src:'https://klop03.com/wp-content/uploads/2016/11/Komar_1_13145230.jpg', title:'Komar-2.1'},
{src:'https://klop03.com/wp-content/uploads/2016/11/Komar_1_13145230.jpg', title:'Komar-2.2'}

 ];
 const sliderElement = document.getElementById("slider");

 function CreateAndAddImageToElement(src, element) {
    const img = document.createElement('img');
     img.src = src;
     img.alt = 'Komar';
     img.className = 'img-small';
     element.appendChild(img);
     img.onclick = function() {
        document.getElementsById('img-big').src = src;

     }

 }

/* imgArray.forEach(function(imgSrc) {
CreateAndAddImageToElement(imgSrc, document.body);

 });
*/
    
function addBigImgtoElement(element) {
const bigImage = document.createElement('img');
bigImage.src = imgArray[0];
bigImage.className = 'img-big';
bigImage.id = 'big'
element.appendChild(bigImage);
}

/*
 

*/

function init() {
addBigImgtoElement(slider);


    

imgArray.forEach(function(imgSrc) {
    addImagetoElementBySrc(imgSrc, sliderElement);
});

}
init();