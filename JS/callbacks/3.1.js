const DivisionNumero = (error, a, b) => {
    if (error) throw new error(console.log('No se puede devidir por 0'))
    return a / b
}

const ResultDivision = (a, b, callback) => {

    if (b === 0) return callback(error, a, b)
    return callback(null, a, b)
}

console.log(ResultDivision(1, 10, DivisionNumero));




// Crea una función dividir(a, b, callback) que:

// Si b no es 0, llama al callback con null(error) y el resultado.

// Si b es 0, llama al callback con "Error: división por cero".