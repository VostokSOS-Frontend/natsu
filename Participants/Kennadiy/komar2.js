'strict mode';

const imgArray = [
    {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Aedes_aegypti_biting_human.jpg/1200px-Aedes_aegypti_biting_human.jpg',
        title: 'Комар 1.0'
    },
    {
        src: 'https://klop03.com/wp-content/uploads/2016/11/Komar_1_13145230.jpg',
        title: 'Комар v2.0'
    },
    {
        src: 'https://tv.ua/img/article/1040/14_main.jpg',
        title: 'Комар v3.0',
    },
];
const sliderElement = document.getElementById('img-slider');

function addImageToElement(imgObj, element) {
    const img = document.createElement('img');
    img.src = imgObj.src;
    img.alt = imgObj.title;
    img.className = 'img-small';
    img.onclick = function() {
        const bigImage = document.getElementById('img-big');
        bigImage.src = imgObj.src;
        bigImage.title = imgObj.title;
        document.getElementById('img-title').innerText = imgObj.title;
    };
    element.appendChild(img);
}

function addBigImageToElement(element) {
    const bigImage = document.createElement('img');
    bigImage.src = imgArray[0].src;
    bigImage.alt = imgArray[0].title;
    bigImage.className = 'img-big';
    bigImage.id = 'img-big';
    bigImage.onclick = ShowPopupImage;
    element.appendChild(bigImage);
}

function ShowPopupImage () {
    popup = document.createElement('div');
    popup.className = 'popup-wrapper';
    popup.onclick = HidePopup;
    const popupImg = bigImage.cloneNode(true);
    popup.appendChild(popupImg);
    document.body.appendChild(popup);
}

function HidePopup () {
    document.body.removeChild(popup);
}


function addTitleToElement(element) {
    const titleElement = document.createElement('h2');
    titleElement.innerText = imgArray[0].title;
    titleElement.className = 'img-title';
    titleElement.id = 'img-title';
    element.appendChild(titleElement);
}

function init() {
    addBigImageToElement(sliderElement);
    addTitleToElement(sliderElement);

    imgArray.forEach(function(imgObj) {
        addImageToElement(imgObj, sliderElement);
    });
}

init();

