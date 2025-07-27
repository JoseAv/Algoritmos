const A = [1, 2, 2, 3, 4, 4, 4, 5]

const DeleteDuplicate = (array) => {

    // debo de hacer un for de 0 hasta .legth 
    for (let i = 0; i <= array.length; i++) {
        // verificar si el indice altual es igual al siguiente
        if ((array[i + 1]) && (array[i] === array[i + 1])) {
            // si lo es entonces sacar el elemento siguiente pasando el indice
            newSlice(array, i)
            return DeleteDuplicate(array)
        }
    }
    return array

}



//funcion slice
const newSlice = (array, current) => {
    // validamos que sea un index valido
    if (current >= array.length)
        return array

    //indicador para saber si ya lo encontramos
    let indicate = false

    // hacer un for
    for (let i = 0; i < array.length; i++) {
        console.log(i)
        // en el for encontrar el indice pasado
        if (i === current) {
            // ahora vamos a marcar ese como null y lo vamos a mover hasta el ultimo elemento
            array[i] = null
            indicate = true
        }
        // validamos si ya encontramos un numero y si el siguiente es un valor valido
        if (indicate && array[i + 1]) {
            array[i] = array[i + 1]
            array[i + 1] = null
        }
    }
    // luego camos a arra.length quitarle un 1 
    array.length = array.length - 1
    return array
}



console.log(newSlice(A, A.length))

console.log(DeleteDuplicate(A))

//Formas mas util


// const A = [1, 2, 2, 3, 4, 4, 4, 5];

// const compressDuplicates = (array) => {
//     if (array.length === 0) return 0;

//     let uniqueIndex = 0; // Puntero para la posición de elementos únicos

//     for (let i = 1; i < array.length; i++) {
//         if (array[i] !== array[uniqueIndex]) {
//             uniqueIndex++;
//             array[uniqueIndex] = array[i];
//         }
//     }

//     // Reducir la longitud del array
//     array.length = uniqueIndex + 1;
//     return uniqueIndex + 1;
// };

// console.log("Array original:", A);
// const newLength = compressDuplicates(A);
// console.log("Array modificado:", A);
// console.log("Nueva longitud:", newLength);