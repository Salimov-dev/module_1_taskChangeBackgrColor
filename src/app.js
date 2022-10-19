import { getRandomColor } from './utils'

export default function initApp() {
    console.log('Hello world');
    const jsButtonHTML = document.createElement('button')
    jsButtonHTML.className = 'button'
    jsButtonHTML.textContent = 'Изменить цвет страницы'
    document.body.append(jsButtonHTML)

    const button = document.querySelector('.button')
    button.addEventListener('click', function() {
        document.body.style.background = getRandomColor()
    })

  }