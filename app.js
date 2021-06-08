
const button = document.getElementById('button')


const changeBackgroundColour = (color) => {
    document.body.style.background = color
        console.log('sdfsdfsdfsd')
}

button.addEventListener('click', (color) => {
    changeBackgroundColour(color)
})
