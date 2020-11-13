/**
RETURN:
- Lo recomendable es que la funcion retorne algo
- Una funcion con return permite almacenar el valor devuelto en una variable
- Permite detener/finalizar una ejecucion
*/

function toMayus (text) {
    return text.toUpperCase();
}

// console.log(toMayus('Pepe')) // PEPE

// Almaceno el valor retornado en una constante
const nombreEnMayuscula = toMayus('maria');
// console.log(nombreEnMayuscula); // MARIA

// ------------------------------------------------------------------------------

// Sin el return, retorna undefined

function toMayusWithoutReturn (text) {
    text.toUpperCase();
}

// console.log(toMayusWithoutReturn('Pepe')) // undefined

// ------------------------------------------------------------------------------
// Return para detener/finalizar la ejecucion

function validarEdad (edad) {
    if(edad >= 18){
        console.log('es mayor')
        return;
    }

    console.log('es menor');
    return;
}

validarEdad(18);
validarEdad(17);
