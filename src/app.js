function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

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