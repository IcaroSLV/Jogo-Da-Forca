let palavraLista = ['PEIXE', 'CADEIRA', 'GAFANHOTO', 'PROGRAMAÇÃO', 'PAIS', 'PALAVRA', 'JOGO', 'FORCA', 'ARROZ', 'PUDIM', 'VIAGEM', 'ESCOLA', 'CURSO', 'SENAC', 'CARRO', 'MEDICO', 'BRASIL']

let palavraAleatoria = palavraLista[Math.floor(Math.random() * (palavraLista.length)) + 0]

let palavra = document.getElementById('palavra')

for(i = 0; i < palavraAleatoria.length; i++) {
    let span = document.createElement('span');
    span.classList.add('letterbox');
    span.classList.add('hide')
    span.id = 'letraDaPalavra'
    span.value = palavraAleatoria[i]
    span.textContent = palavraAleatoria[i];
    palavra.appendChild(span)
}

let forcaListImg = ['./image/forca.png', './image/forca1.png', './image/forca2.png', './image/forca3.png', './image/forca4.png', './image/forca5.png', './image/forca6.png']
let forcaImg = document.getElementById('forcaImg')


forcaImg.setAttribute('src', forcaListImg[0])

let indexImg = 0;

let showModal = false;
function openModal() {
    let modal = document.getElementById("modal");

    showModal = !showModal;
    if(showModal) {
        modal.style.height = '3em'
    } else {
        modal.style.height = '0px'
    }
    
}

function EscolherPalavra() {
    let palavraEscolhida = document.getElementById("palavraEscolhida")
    let modal = document.getElementById("modal");
    palavra.innerHTML = ""

    for(i = 0; i < palavraEscolhida.value.length; i++) {
        let span = document.createElement('span');
        span.classList.add('letterbox');
        span.classList.add('hide')
        span.id = 'letraDaPalavra'
        span.value = palavraEscolhida.value[i].toUpperCase();
        span.textContent = palavraEscolhida.value[i].toUpperCase();
        palavra.appendChild(span)
    }

    modal.style.height = '0px'
    showModal = false;
    palavraAleatoria = palavraEscolhida.value.toUpperCase();

    document.getElementById("palavraEscolhida").value = ''
    indexImg = 0;
    letrasUsadas.innerHTML = ''
    verificarLetra()


}

function verificarLetra() {
    let letrasUsadas = document.getElementById('letrasUsadas')
    let achouTodasAsLetras = true;
    let letraDaPalavra = document.querySelectorAll('#letraDaPalavra');
    let letra = document.getElementById("letter");

    letraDaPalavra.forEach(letras => {

        if(letras.value == letra.value.toUpperCase()) {
            letras.classList.remove('hide')
        }

        if(letras.classList.contains('hide')) {
            achouTodasAsLetras = false
            
        }
    });

    if(!palavraAleatoria.includes(letra.value.toUpperCase())) {
        indexImg ++;
    }

    let span = document.createElement('span');
    span.textContent = `${letra.value.toUpperCase()}  `
    letrasUsadas.appendChild(span)

    forcaImg.setAttribute('src', forcaListImg[indexImg])
    letra.value = ''

    if(indexImg == 6) {
        setTimeout(() => {
            confirm(`Você Perdeu! A palavra era ${palavraAleatoria}`) ? window.location.reload() : window.location.reload();
        }, 200);
    }

    if(achouTodasAsLetras) {
        setTimeout(() => {
            confirm(`VOCÊ GANHOU!`) ? window.location.reload() : '';
        }, 200);
    }

}

