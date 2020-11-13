// parametros 

// PARAMETROS POR DEFECTO

function getPorcent (muestra = 0) {
    return function (total = 0){
        return (muestra * 100) / total || false;
    }
}

getPorcent(12)(80); // 15

// ARGUMENTS

function showParams () {
    // arguments es un array-like (no un array como los normales, es similiar o parecido)
    // console.log(arguments);

    // for (const iterator of arguments) {
    //     console.log(iterator);
    // }

    // no se pueda usar con forEach o otros metodos de los arreglos
}

showParams('si','che');
// showParams();

// OPERADOR REST ...params --> Array

function restarValores (number,...params) {
    let result = false;

    if(params.length){
        result = params.map(num => num - number);
    }
    
    return result;
}

let values = [ 30, 3, 5, 60 ];

// console.log(restarValores(10,...values)); SPREAD OPERATOR ...values  -> 30,3,5,60 (parametros simples)

// OBJETOS COMO PARAMETROS

function infoPerson (){
    return {
        firstName: 'Guido',
        lastName: 'Rivoira',
        age: 20,
        lenguages: {
            backend: ['NodeJS','C#'],
            frontend: ['JS','HTML','CSS','Bootstrap']
        },
        getcompleteName: function (){
            return `${this.lastName}, ${this.firstName}`;
        }
    }
}

function personDescription (person){
    let { age,lenguages,status = true} = person;

    console.log(age)
    console.log(lenguages)
    console.log(status)
    console.log(person.getcompleteName());
}

personDescription(infoPerson())

//ARROW FUNCTIONS

const sumar = (num1 = 0,num2 = 0) => {
    return num1 + num2;
}

// sumar(10,2); // 12

const multiplyFowTwo = num => num * 2;

// multiplyFowTwo(2) // 4;
