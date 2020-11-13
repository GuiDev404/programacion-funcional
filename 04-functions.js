/**
    Funciones Declaradas
    el ID o identificador de las funciones declaras es su NOMBRE
*/ 

// funcionDeclarada(); // defino o llamo a la funcion, antes de declarla

//declaracion de funcion
function funcionDeclarada (){ 
    console.log('Declarada');
}

// funcionDeclarada(); // defino o llamo a la funcion, despues de declarla

// ---------------------------------------------------------------------

/**
    Expresiones Funcionales O functions expression
    - Una expresion, una expresión es una combinación de constantes, variables o funciones y operadores
    - Pueden ser o no anonimas
    - Se pueden usar en metodos como forEach,map,filter,etc.
    - IIFF -> Expresion funcional inmediatamente invocada (o llamada), es un expresion funcional
*/ 

// expresionFuncional(); // ERROR!

const expresionFuncional = function (){
    console.log('Expresion');
}

// expresionFuncional();

(function () {
    console.log('IIFE')  
})();

/*
// anfn → funciones anonimas 
// nfn → expresion funcional con nombre

El interprete de javascript lo que hace es alzar o hoisting, en la linea cero del codigo
a la declaracion de la funcion. Ejemplos:

Funcion declarada

function funcion(){
 //hacer algo
}

En las expresiones funcionales, la funcion esta en la asignacion NO EN LA DECLARACION.
Al intentar ejecutar la funcion, lanza un typeerror diciendo que nombreDeLaFuncion is not a fn

Declaracion de las expresiones funcionales
const expresionFuncional = undefined; 

*/