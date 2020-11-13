// RECURSIVIDAD

/*
Es el acto de una función llamándose a sí misma. La recursión es utilizada para resolver problemas que contienen subproblemas más pequeños. Una función recursiva puede recibir 2 entradas: un caso base (finaliza la recursión) o un un caso recursivo (continúa la recursión).
*/


// function imprimir (numero) {
//     if ( numero > 10 ){
//         return;
//     }

//     console.log(numero);
//     return imprimir(numero + 1);
// }

// imprimir(0)

// EJEMPLO DOS

let contenedor = [];

function getAletorio (limit){

    function aleatorio (max,min) {
        if(contenedor.length > limit){
            return;
        }

        let number = Math.floor(Math.random() * ((max+1) - min)) + min;

        if(contenedor.includes(number)){
            return aleatorio(20,1);
        }

        contenedor.push(number);
        return aleatorio(20,1);
    }

    return aleatorio(20,1);
}

// getAletorio(15);

// console.log(contenedor.sort( (a,b) => a - b));

// EJEMPLO DE NUMEROS RANDOM Y INCLUDE, DE FORMA RECURSIVA

let numberContainer = [];

function contains (currentElement,idx = 0) {
    if(idx >= numberContainer.length){
        return false;
    }

    if(currentElement === numberContainer[idx]){
        return true;
    }

    return contains(currentElement,(idx + 1))
}

function numberRandom (LIMIT, min , max) {
    if(numberContainer.length >= LIMIT){
        return;
    }

    let NUMBER = Math.floor(Math.random() * ((max + 1) - min)) + min;
    
    if(contains(NUMBER)){
        return numberRandom(20, 1, 50);
    }
    
    numberContainer.push(NUMBER);
    return numberRandom(20, 1, 50);
}

numberRandom(20, 1, 50)

console.log(numberContainer.sort( (a,b) => a - b));

// EJEMPLO DE NUMEROS LOS NUMEROS DE FIBONACCI

function fib (n) {
    if(n <= 1){
        return 1;
    }
    // La sucesión comienza con los números 0 y 1, a partir de estos, cada término es la suma de los dos anteriores»,

    return fib(n-1) + fib(n -2);
}

// console.log(fib(5))

// FACTORIAL DE UN NUMERO

let sum = 1;

function factorial (num) {
    if(num <= 1){
        return num;
    }

    sum *= num;

    console.log(sum);
    
    return factorial((num-1));
}

// factorial(4);

// console.log(sum);  
