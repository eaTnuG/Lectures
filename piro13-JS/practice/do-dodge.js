let task;

const grids = document.getElementsByClassName('cell')

const startButton = document.getElementById('start')
const endButton = document.getElementById('end')

function pickRandomNumber() {
    return Math.floor(Math.random() * (9-0) + 0)
}

function addDododge() {
    const randomIndex = pickRandomNumber();
    const chosenElement = grids[randomIndex];
    const img = document.createElement("img");
    img.src = "do-dodge.png";
    img.style = "width: 100%; height: 100%;";
    chosenElement.appendChild(img)
    return chosenElement
}

function removeDododge(element){
    element.removeChild(element.firstChild)
}

function doDodgeGame() {
    const chosenElement = addDododge()
    setTimeout(() => {
        removeDododge(chosenElement)
    }, 800)
}

function start() {
    if(task) return console.log('이미 게임이 진행중입니다.')
    task = setInterval(doDodgeGame, 1500)
    console.log('게임이 시작되었습니다.')
}

function end() {
    if(!task) return console.log('진행중인 게임이 없습니다.')
    clearInterval(task)
    task = undefined
    console.log('게임이 종료되었습니다.')
}

startButton.addEventListener('click', (event) => {
    event.stopPropagation();
    start();
})
endButton.addEventListener('click', event => {
    event.stopPropagation();
    end();
})

document.addEventListener('click', event => {
    if(event.target.tagName === "IMG") {
        console.log('두더지를 잡았습니다.')
    } else if (event.target.className === 'cell') {
        console.log('두더지를 놓쳤습니다.')
    } else {
        console.log('경기장이 아닙니다.')
    }
})