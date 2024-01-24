//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del numero secreto.';


//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10.';

let numeroSecreto = 0; //generarNumeroSecreto(10);
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

console.log("numero secreto: " + numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    //alert('Click desde el boton'); //muestra un mensaje que indica que se hizo click en el botn
    //let numeroDeUsuario = document.querySelector('input');//es una forma de traer desde el input la informacion proporcionada, en este caso funciona por que solo tiene un input
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);//esta es una funcion que se utiliza para que el programa encuentre un input especifico segun su numbre (id)
    // console.log(typeof(numeroDeUsuario));//estamos indicando que tipo de variable estamos recibiendo
    //console.log("numero secreto: " + numeroSecreto);//imprime en la consola el numero que se genera aleatoriamente
    // console.log(typeof(numeroSecreto));//estamos indicando que tipo de variable estamos recibiendo
    // console.log(numeroDeUsuario);//imprime en la consala el numero que ingreso el usuario
    // console.log(numeroDeUsuario === numeroSecreto);//revisa si los valores son iguales en valor y en typo, devolviendo una variable buleana
    //console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez.' : 'veces.'}`);//se cambia el texto del parrafo por uno nuevo
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor')
        } else {
             asignarTextoElemento('p', 'El numero secreto es mayor')
            }
        intentos++
        limpiarCaja();
    }
    return;
}

function limpiarCaja (){
    //let valorCaja = document.querySelector('#valorUsuario');//cuando se pone el # antes del nombre usando queryselector el busca por ID como si usuaramos getelementbyid
    // valorCaja.value = '';
    document.querySelector('#valorUsuario').value = '';
    return;
}

function generarNumeroSecreto(numMax){
    let numeroGenerado = Math.floor(Math.random() * numMax ) + 1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    //Verificar si ya sorteamos todos los numeros
    if (listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles.');
    } else {
        //Si el numero generado esta incluido en la lista 
        if (listaNumeroSorteado.includes(numeroGenerado)){
           return generarNumeroSecreto(numMax);//la utilizacion de una funcion dentro de si misma se llama recursividad, esto lo que hace es ejecutar la misma funcion hasta cumplir una condicion especifica en este caso es repetir la generacion de numero hasta que no este en la lista, la idea de esto es reutilizar la funcion ya realizada para no limitar la necesidad
            //en la solucion solo llamando a la funcion con recursividad se genera un bucle infinito el cual se debe arreglar
            //se puede manejar de diferentes maneras, 1. se puede poner un numero de intentos fijo, 2. se agregan todos los numeros posibles en la lista y con el ultimo sale

         } else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto!.');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}.`);
    numeroSecreto = generarNumeroSecreto(numeroMaximo);
    intentos = 1;

    return;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //reinicar intentos
    condicionesIniciales();
    //deshabilitar de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    return;
}
condicionesIniciales();