function duplicar(num) {
    return num * 2;
}

const mapPersonalizado = (array, callback) => {

    const newArray = []
    for (let number of array) {
        newArray.push(duplicar(number))
    }
    return newArray
}


console.log(mapPersonalizado([1, 2, 3], duplicar))
    ; // [2, 4, 6]


// Ejercicio 1.2:
// Implementa un mapPersonalizado(array, callback) que aplique el callback a cada elemento y retorne un nuevo array con los resultados.