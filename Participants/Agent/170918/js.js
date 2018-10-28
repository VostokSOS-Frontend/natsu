"strict mode"
const img_array = [ 
{src:"http://kartiny.ucoz.ru/_ph/756/2/748064271.jpg?1535976057"},
{src:"http://www.rzhunemogu.ru/foto/48366.jpg"},
{src:"http://gifotkritki.ru/_ph/13/2/223958460.gif"},
{src:"http://fotokniga-s.org.ua/images/podborka_652_37.jpg"},
{src:"data:image/jpeg;base64,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"},
{src:"https://peka2.tv/images/news/a0d01fccbc5f5fb3ec960884ce4645ac/8060e526-3d5c-4497-a19b-27ff5313900f.jpg"}
];
const slider_element = document.getElementById("slider");
function addBigImageToElement (element) {
    const bigImage = document.createElement("img");
    bigImage.src = img_array[0].src;
    bigImage.className = "img-big";
    bigImage.id = "img-big";
    bigImage.onclick = function () {
        const image = document.createElement("img");
        const main = document.createElement("div");
        main.className = "main";
        main.id = "main";
        image.id = "zoomImage";
        image.src = document.getElementById("img-big").src;
        image.className = "zoomedImage";
        image.onclick = function(){
            const element = document.getElementById("main");
            element.remove();
        }
        main.appendChild(image);
        document.body.insertBefore(main,slider_element);
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
function createScroll(element){
    block = document.createElement("div");
    block.className = "scroll";
    block.id = "scroll";
    element.appendChild(block);
    return(block);
}
/*function setScrollWidth(scroll) {
    let width = 0;
    scroll.forEach(element => width += element.width);
    return(width);
}*/
function init() {
    addBigImageToElement(slider_element);
    const scroll = createScroll(slider_element);
    img_array.forEach(function(imgObj){
        addSmallImageToElement(imgObj, scroll);
    });
    /*scroll.width = setScrollWidth(scroll)+"px";*/
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
let position = 0;
function scrolling(move) {
    const scroll = document.getElementById("scroll");
    const imgCoount = scroll.childElementCount;
    const ScrollFirstChild = scroll.firstChild;
    const width = ScrollFirstChild.width;
    let test = position + move;

    if(test <= 0 & test > -((imgCoount-2) * width)){
    position += move;
    ScrollFirstChild.style.marginLeft =position +"px";
    }
}

init();