const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548'
];

let intervalId = null

const refs = {
    startBtnEL: document.querySelector('[data-action="start"]'),
    stopBtnEl: document.querySelector('[data-action="stop"]'),
    bodyEl: document.querySelector('body')
}


const createRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

refs.startBtnEL.addEventListener('click', () => {
    refs.startBtnEL.setAttribute('disabled', true)

    intervalId = setInterval(() => {
        const randomNumber = createRandomNumber(0, colors.length - 1)
        refs.bodyEl.style.background = colors[randomNumber]
    }, 1000)
})

refs.stopBtnEl.addEventListener('click', () => {
    refs.startBtnEL.removeAttribute('disabled')

    clearInterval(intervalId)
})


