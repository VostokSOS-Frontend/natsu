function createTarget(gameZone) {
   const target = document.createElement('div');
   target.classList.add('target');
   target.classList.add('active');
   target.addEventListener('click', targetClickHandler, false);
   target.style.top = -sizeOfTargetPx - 5 + 'px';
   target.style.left = Math.round(Math.random() * (window.innerWidth - sizeOfTargetPx)) + 'px';
   target.style.width = target.style.height = sizeOfTargetPx + 'px';
   target.dataset.increment = Math.round(Math.random() * 30 + 10);
   gameZone.appendChild(target);
   return target;
}

function targetClickHandler (event) {
    //event.stopPropagation(); Ловить клики(один хендлер на виндоу, а не на отдельных элементах)
    score++;
    gameZone.removeChild(event.target);
    event.target.classList.remove('active');
    outputGameData();
    if (score === numberOfTargets) {
        stopGame();
    }
}

function outputGameData() {
    scoreElement.innerText = score;
}

function startGame() {
    gameTimerId = setInterval(animateTarget, 100);
}

function stopGame() {
    clearInterval(gameTimerId);
    messageElement.classList.remove('hidden');
}

function animateTarget() {
    target.forEach(target => {
        if (target.classList.contains('active')) {
            const top = parseInt(target.style.top, 10);
            if (top < window.innerHeight) {
                target.style.top = top + target.dataset.increment + 'px';}
            else {
                target.style.top = -sizeOfTargetPx - 5 + 'px';
            }
            }
        });
}

const gameZone = document.body;
const messageElement = document.getElementById('message');
const scoreElement = document.getElementById('score');
let score = 0;
const target = [];
const sizeOfTargetPx = 80;
const numberOfTargets = 5;
let gameTimerId;

function init() {
    for (let i=0;
    i<numberOfTargets;
i++) {
    target.push(createTarget(gameZone));
     }
    outputGameData();
    startGame();
}

init();