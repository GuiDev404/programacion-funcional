/*
   Ámbito de las variables o Scope
   {} -> son bloques de codigo que crean ambitos locales.
   - puedo acceder a una variable declarada en el ambito global desde un ambito local, *1
   - NO puedo acceder a una variable declarada en el ambito local desde un ambito global *2

   ACLARACION
   var existe en el ambito global y alcance global -> window.variable
   let declara una variable de alcance local con ámbito de bloque(block scope), la cual, opcionalmente, puede ser inicializada con algún valor.
*/

// *1 desde dentro (ambito local) hacia afuera (ambito global)

let nombre = 'Pepe'; // declarada en el ambito global

function showName (){
    // ambito local
    console.log(nombre); 
}

// showName()

function showNameTwo (){
    let nombre = 'Carlos'; //Primero busca en el ambito local, si existe esa variable. FINALIZA.

    console.log(nombre); 
}

// showNameTwo()

// *2

function exampleThree () {
    let variableLocal = 'Hello World!'; // local
    // variableLocal = 'Hello World!'; // global (no recomendado)

    console.log(variableLocal);
}

exampleThree();
// console.log(variableLocal); // ReferenceError: variableLocal is not defined

let userName = 'Pepit00';

function exampleFour (){
    // let userName = 'Nina2020';

    function localFn (){
        console.log('result :', userName);
    }

    localFn();
}

exampleFour()
