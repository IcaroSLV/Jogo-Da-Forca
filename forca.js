let palavraLista = [
    ['FRUTA', 'ABACATE', 'BANANA', 'MANGA', 'MORANGO', 'SIRIGUELA', 'ABACAXI', 'KIWI', 'LARANJA', 'AMORA'], 
    ['VERBO', 'NEGAR', 'ANDAR', 'CORRER', 'RIR', 'VOAR', 'TREINAR', 'LIMPAR', 'ROSNAR', 'PROGRAMAR', 'PULAR'], 
    ['PAÍSES', 'BRASIL', 'ALEMANHA', 'PORTUGAL', 'ARGENTINA', 'ANGOLA', 'COREIA', 'CHINA', 'RUSSIA', 'CUBA'], 
    ['CORES', 'AZUL', 'VERMELHO', 'VERDE', 'AMARELO', 'MARROM', 'ROXO', 'ROSA', 'BRANCO', 'PRETO', 'CINZA']
    ['ANIMAL', 'CASTOR', 'GATO', 'CACHORRO', 'ESQUILO', 'ARANHA', 'COBRA', 'FORMIGA', 'MACACO', 'BALEIA', 'PEIXE']

]

let TemaAleatoria = palavraLista[Math.floor(Math.random() * (palavraLista.length))]
let palavraAleatoria = TemaAleatoria[Math.floor(Math.random() * (TemaAleatoria.length) + 1)]

let palavra = document.getElementById('palavra')
let tema = document.getElementById('tema')

for(i = 0; i < palavraAleatoria.length; i++) {
    let span = document.createElement('span');
    span.classList.add('letterbox');
    span.classList.add('hide')
    span.id = 'letraDaPalavra'
    span.value = palavraAleatoria[i]
    span.textContent = palavraAleatoria[i];
    palavra.appendChild(span)
}

tema.innerHTML = `${TemaAleatoria[0]}`

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

    modal.style.height = '-10px'
    showModal = false;
    palavraAleatoria = palavraEscolhida.value.toUpperCase();

    document.getElementById("palavraEscolhida").value = ''
    indexImg = 0;
    forcaImg.setAttribute('src', forcaListImg[indexImg])
    letrasUsadas.innerHTML = ''
    verificarLetra()

    tema.innerHTML = `PALAVRA ESCOLHIDA PELO JOGADOR`

}


let listaLetrasUsadas = []
function verificarLetrasUsadas(letra){
    let letrasUsadas = document.getElementById('letrasUsadas')
    let encontrouLetraUsada = false;

    listaLetrasUsadas.forEach(listaLetras => {
        if (listaLetras == letra.toUpperCase()) {
            encontrouLetraUsada = true;
        }
    })  

    if(!encontrouLetraUsada) {
        let span = document.createElement('span');
        span.textContent = `${letra.toUpperCase()}  `
        span.id = 'letraUsada'
        letrasUsadas.appendChild(span)
    }

    listaLetrasUsadas.push(letra.toUpperCase())    

}

function verificarLetra() {
    let achouTodasAsLetras = true;
    let letraDaPalavra = document.querySelectorAll('#letraDaPalavra');
    let letra = document.getElementById("letter");

   if(!letra.value.trim() == '') {
        verificarLetrasUsadas(letra.value)
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

}

