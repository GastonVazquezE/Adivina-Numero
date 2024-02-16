// Generar numero aleatorio del 1 al 100
let numeroAleatorio = Math.floor(Math.random()*100)+1;

//Obtener elementos del DOM
let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let boton = document.getElementById('button')

// Funcion que chequea si el numero ingresado es el correcto
function chequearResultado(){
    let numeroIngresado = parseInt(numeroEntrada.value);

    if(numeroEntrada.disabled == true){
        numeroAleatorio = Math.floor(Math.random()*100)+1;
        numeroEntrada.disabled = false;
        boton.textContent = 'Comprobar';
        boton.style = 'background-Color:green';
        mensaje.textContent = '';
        return
    }

    if(isNaN(numeroIngresado)|| numeroIngresado < 1 || numeroIngresado > 100){
        mensaje.textContent = 'Por favor ingresar un numero del 1 al 100!';
        return;
    }

    if(numeroIngresado == numeroAleatorio){
        numeroEntrada.disabled = true;
        mensaje.textContent='¡Felicidades! ¡Adivinaeste el numero!';
        mensaje.style = 'color:green';
        boton.textContent = 'Volver a jugar';
        boton.style = 'background-Color:red';

    }
    else if(numeroIngresado < numeroAleatorio){
        mensaje.textContent='El numero a adivinar es mayor, intenta otra vez!';
        mensaje.style = 'color:red';
    }
    else{
        mensaje.textContent='El numero a adivinar es menor, intenta otra vez!';
        mensaje.style = 'color:red';
    }
}