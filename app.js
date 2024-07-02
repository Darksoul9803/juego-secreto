let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acertó
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números, esta es la condicion de salida para el "bucle"
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ("p", "Ya se han sorteado todos los numeros posibles")
    } else {
        //si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); //permite que se genere un nuevo numero que no esta en la lista y comienza un "blucle"
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "¡Juego del número secreto!");
    asignarTextoElemento("p", `Elige un número entre 1 y ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");

}

condicionesIniciales();