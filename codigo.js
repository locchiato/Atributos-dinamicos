window.addEventListener('load', () => {

    //1- Agregar a la tarjeta, el atributo "class" con el valor "card"
    // let tarjeta = document.getElementById('tarjeta')
    let tarjeta = document.querySelector('#tarjeta')
        // tarjeta.classList.toggle("class")
    tarjeta.setAttribute('class', 'card')
    console.log("despues: " + tarjeta.getAttribute('class'))

    //2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"
    // let tarjeta = document.getElementById('logo')
    let imagen = document.querySelector('#logo')
    imagen.setAttribute('src', "https://www.youtube.com/img/desktop/yt_1200.png")

    //3- Quitarle al titulo la clase que le está dando un formato feo
    let titulo = document.querySelector('h1')
    titulo.removeAttribute('class')

    //4- Chequear si el link a youtube posee o no el atributo href
    let link = document.querySelector('#link_youtube')
    console.log("el link a youtube " + (link.hasAttribute('href') ? "" : "NO ") + "posee href.");
    let href = link.getAttribute('href')
    link.removeAttribute('href')
    console.log("el link a youtube " + (link.hasAttribute('href') ? "" : "NO ") + "posee href.");
    console.log("el href es: " + href);
    link.setAttribute('href', href)
    console.log("el link a youtube " + (link.hasAttribute('href') ? "" : "NO ") + "posee href.");
    console.log("el href es: " + link.getAttribute('href'));

    //5- Obtener el href del link a wikipedia y mostrarlo por consola
    link = document.querySelector('#link_wikipedia')
    href = link.getAttribute('href');
    console.log("el link a wikipedia es: " + href)


    const logo = document.querySelector('#logo');

    function random(number) {
        return Math.floor(Math.random() * (number + 1));
    }

    logo.onclick = function() {
        const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        document.querySelector('body').style.backgroundColor = rndCol;
    }
})