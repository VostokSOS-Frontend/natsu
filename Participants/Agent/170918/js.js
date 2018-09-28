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
        const image = document.createElement("img");
        const main = document.getElementById("slider");
        image.id = "zoomImage";
        image.src = document.getElementById("img-big").src;
        image.className = "zoomedImage";
        image.onclick = "removeImage(zoomImage)";
        main.appendChild(image);
    }
    element.appendChild(bigImage);
};
function removeImage(id){
    const element = documnet.getElementById(id);
    document.removeChild(element);
}
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
    let index = img_array.findIndex(element => element.src == src);
    if (index == img_array.length - 1) {
        image.src = img_array[0].src;
    }
    else {
        image.src = img_array[index + 1].src;
    }
}
function prevImg() {
    const image = document.getElementById("img-big");
    const src = image.src;
    let index = img_array.findIndex(element => element.src == src);
    if (index == 0) {
        image.src = img_array[img_array.length - 1].src;
    }
    else {
        image.src = img_array[index - 1].src;
    }
}
init();