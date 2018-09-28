"strict mode"
const img_array = [ 
{src:"http://kartiny.ucoz.ru/_ph/756/2/748064271.jpg?1535976057"},
{src:"http://www.rzhunemogu.ru/foto/48366.jpg"},
{src:"http://gifotkritki.ru/_ph/13/2/223958460.gif"},
{src:"http://fotokniga-s.org.ua/images/podborka_652_37.jpg"}];
const slider_element = document.getElementById("slider");
function addBigImageToElement (element) {
    const bigImage = document.createElement("img");
    bigImage.src = img_array[0].src;
    bigImage.className = "img-big";
    bigImage.id = "img-big";
    bigImage.onclick = function () {
        
    }
    element.appendChild(bigImage);
};
function addSmallImageToElement (ImgObj,element) {
    const smallImage = document.createElement("img");
    smallImage.src = ImgObj.src;
    smallImage.className = "img-small";
    smallImage.onclick = function () {
        const bigimage = document.getElementById("img-big");
        bigimage.src = ImgObj.src;
    };
    element.appendChild(smallImage);
};
function init() {
    addBigImageToElement(slider_element);
    img_array.forEach(function(imgObj){
        addSmallImageToElement(imgObj, slider_element);
    });
}
function nextImg() {
    const image = document.getElementById("img-big");
    const src = image.src;
    let index = img_array.findIndex(element => element == src);
    if (index == img_array.length - 1) {
        image.src = img_array[0];
    }
    else {
        image.src = img_array[index + 1];
    }
    document.getElementById("img-big").src = src;
}
function prevImg() {
    const image = document.getElementById("img-big");
    const src = image.src;
    let index = img_array.findIndex(element => element == src);
    if (index == 0) {
        image.src = img_array.length - 1;
    }
    else {
        image.src = img_array[index - 1];
    }
    document.getElementById("img-big").src = src;
}
init();