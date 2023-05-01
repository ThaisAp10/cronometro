const cronometro = document.querySelector('#cronometro');
const iniciar = document.querySelector('#iniciar');
const parar = document.querySelector('#parar');
const pausar = document.querySelector('#pausar');

let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;

function atualizaCronometro() {
    segundos++;

    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }

    if (minutos === 60) {
        minutos = 0;
        horas++;
    }

    let horasTexto = horas < 10 ? '0' + horas : horas;
    let minutosTexto = minutos < 10 ? '0' + minutos : minutos;
    let segundosTexto = segundos < 10 ? '0' + segundos : segundos;

    cronometro.textContent = `${horasTexto}:${minutosTexto}:${segundosTexto}`;
}

iniciar.addEventListener('click', function() {
    intervalo = setInterval(atualizaCronometro, 1000);    
});

pausar.addEventListener('click', function() {
    clearInterval(intervalo);
});

parar.addEventListener('click', function() {
    clearInterval(intervalo);
    segundos = 0;
    minutos = 0;
    horas = 0;
    cronometro.textContent = `00:00:00`;
});
