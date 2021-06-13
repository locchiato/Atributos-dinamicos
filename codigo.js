window.addEventListener('load', () => {

    let tarjeta = document.querySelector('#tarjeta')
    tarjeta.setAttribute('class', 'card')

    let imagen = document.querySelector('#logo')
    imagen.setAttribute('src', "https://www.youtube.com/img/desktop/yt_1200.png")

    let titulo = document.querySelector('h1')
    titulo.removeAttribute('class')

    function random(number) {
        return Math.floor(Math.random() * (number + 1));
    }

    imagen.onclick = function() {
        const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        document.querySelector('body').style.backgroundColor = rndCol;
    }
})