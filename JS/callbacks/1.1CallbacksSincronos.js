function esPar(num) {
    return num % 2 === 0;
}


const filtrarArray = (numeros, callback) => {

    const newArray = []
    for (let i = 0; i <= numeros.length - 1; i++) {
        callback(numeros[i]) ? newArray.push(numeros[i]) : null
    }
    return newArray
}

const numeros = [1, 2, 3, 4, 5];
console.log(filtrarArray(numeros, esPar)) // Debe retornar [2, 4]


// Ejercicio 1.1:
// Crea una función filtrarArray(array, callback) que acepte un array y un callback.
// El callback debe devolver true o false para cada elemento,
// y filtrarArray retornará un nuevo array con los elementos que pasen el test.

