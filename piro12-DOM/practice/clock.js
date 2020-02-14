var regiester = document.getElementById('register')

var setName = function () {
    var userInput = prompt('이름을 입력하세요')
    document.getElementById('name').innerHTML = userInput
}

regiester.addEventListener('click', setName)



var hour = document.getElementById('hour')
var minute = document.getElementById('minute')
var second = document.getElementById('second')
var on = document.getElementById('on')
var off = document.getElementById('off')

var intervalId = false

var setClock = function () {
    var now = new Date()

    hour.innerHTML = now.getHours()
    minute.innerHTML = now.getMinutes()
    second.innerHTML = now.getSeconds()
}

var startClock = function () {
    intervalId = setInterval(setClock, 1000)
}

var stopClock = function () {
    clearInterval(intervalId)

    hour.innerHTML = "--"
    minute.innerHTML = "--"
    second.innerHTML = "--"
}

on.addEventListener('click', startClock)
off.addEventListener('click', stopClock)

