'strict mode';

const imgArray = [
    {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Aedes_aegypti_biting_human.jpg/1200px-Aedes_aegypti_biting_human.jpg',
        title: 'Комар-1'
    },
    {
        src: 'http://www.nat-geo.ru/upload/iblock/c82/c82cdedee6b619be7edba6b943620e3b.jpg',
        title: 'Комар-2'
    },
    {
        src: 'https://tv.ua/img/article/1040/14_main.jpg',
        title: 'Комар-3',
    },
    {
        src: 'https://i0.wp.com/kumushka.com/wp-content/uploads/2009/05/komar.jpg?w=800&ssl=1',
        title: 'Комар-4'
    }
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
    element.appendChild(bigImage);
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
