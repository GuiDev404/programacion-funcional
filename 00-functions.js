/*
 ¿Que es una funcion?
 Es un "subprograma" que puede ser llamado por código externo (o interno en caso de recursión) a la función. Al igual que el programa en sí mismo, una función se compone de una secuencia de declaraciones, que conforman el llamado cuerpo de la función. 
    - Se pueden pasar valores a una función
    - La función puede devolver un valor. 
    - Esta puede ser invocada o llamada cuantas veces se quiera.
    - Debe cumplir o hacer una sola accion, simple y sencillo.
*/

function mostrarNombre () {
    let nombre = 'Guido';
    console.log('Nombre :', nombre);
}

// mostrarNombre(); // () -> invocan la funcion

function reyFranco (nombreCompleto, cargo){ //recibo el parametro
    console.log('Hola :', nombreCompleto);
    console.log('Cargo :', cargo);
}

reyFranco('Carlomanco','Carlomanco fue rey de los francos desde 768'); // envio o paso el parametro
