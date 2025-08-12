// const maxNveces = (array, left, rigth) => {

//     if (left === rigth)
//         return array[left]

//     const med = Math.floor((left + rigth) / 2)
//     const leftNumber = maxNveces(array, left, med)
//     const righNumber = maxNveces(array, med + 1, rigth)

//     if (!leftNumber && !righNumber) {
//         return 'no hay dato mayor'
//     }

//     if (!!leftNumber && !!righNumber) {
//         if (leftNumber === righNumber)
//             return leftNumber
//         return comprobateMaxArray(array, left, rigth, leftNumber, righNumber)
//     }


//     return !leftNumber ? righNumber : leftNumber


// }


// const comprobateMaxArray = (array, left, rigth, leftNumber, righNumber) => {
//     const count = { [leftNumber]: 0, [righNumber]: 0 }
//     for (let i = left; i <= rigth; i++) {
//         if (count[array[i]]) {
//             count[array[i]] += 1
//         }
//     }
//     const totalElements = rigth - left + 1;
//     const winner = count[righNumber] > count[leftNumber] ? righNumber : leftNumber;
//     const winnerCount = count[winner];

//     // Si es mayoritario
//     if (winnerCount > totalElements / 2) {
//         return winner;
//     } else {
//         return; // No hay mayoritario en este segmento
//     }

// }



// const array = [1, 2, 2, 1, 2, 3, 1, 2, 2]

// console.log(

//     maxNveces(array, 0, array.length - 1)
// )


const maxNveces = (array, left, right) => {
    // Caso base: un solo elemento siempre es mayoritario de sí mismo
    if (left === right)
        return array[left];

    const med = Math.floor((left + right) / 2);
    const leftNumber = maxNveces(array, left, med);
    const rightNumber = maxNveces(array, med + 1, right);

    // Si ambos lados no tienen mayoritario
    if (!leftNumber && !rightNumber) {
        return null;
    }

    // Si ambos lados tienen candidatos
    if (leftNumber && rightNumber) {
        if (leftNumber === rightNumber) {
            // Mismo candidato, verificar si es mayoritario en el segmento completo
            return verificarMayoritario(array, left, right, leftNumber);
        }
        // Candidatos diferentes, compararlos
        return comprobateMaxArray(array, left, right, leftNumber, rightNumber);
    }

    // Solo uno tiene candidato, verificar si es mayoritario en el segmento completo
    const candidato = leftNumber || rightNumber;
    return verificarMayoritario(array, left, right, candidato);
};

const comprobateMaxArray = (array, left, right, leftNumber, rightNumber) => {
    const count = { [leftNumber]: 0, [rightNumber]: 0 };

    // Contar ocurrencias de ambos candidatos
    for (let i = left; i <= right; i++) {
        if (count[array[i]] !== undefined) {
            count[array[i]] += 1;
        }
    }

    // 9 - 0 -> 9 +1 -> 10
    const totalElements = right - left + 1;

    // comprobar el mayor
    const winner = count[rightNumber] > count[leftNumber] ? rightNumber : leftNumber;

    // Ganador
    const winnerCount = count[winner];


    // Verificar si el ganador es realmente mayoritario
    if (winnerCount > totalElements / 2) {
        return winner;
    } else {
        return null; // No hay mayoritario en este segmento
    }
};

// verificar si el numero es mayor
const verificarMayoritario = (array, left, right, candidato) => {
    let count = 0;

    // Contar ocurrencias del candidato
    for (let i = left; i <= right; i++) {
        if (array[i] === candidato) {
            count++;
        }
    }

    // siempre contar la cantidad de elementos que vamos a revisar
    const totalElements = right - left + 1;

    // Verificar si es mayoritario
    if (count > totalElements / 2) {
        return candidato;
    } else {
        return null;
    }
};

// Casos de prueba
console.log("=== CASOS DE PRUEBA ===");

const array1 = [1, 2, 2, 1, 2, 3, 1, 2, 2];
console.log("Array:", array1);
console.log("Mayoritario:", maxNveces(array1, 0, array1.length - 1));
console.log("Esperado: 2 (aparece 5/9 veces)");
console.log("");

const array2 = [1, 2, 2, 0];
console.log("Array:", array2);
console.log("Mayoritario:", maxNveces(array2, 0, array2.length - 1));
console.log("Esperado: null (2 aparece 2/4 veces, no es > 50%)");
console.log("");

const array3 = [3, 3, 4, 2, 4, 4, 2, 4, 4];
console.log("Array:", array3);
console.log("Mayoritario:", maxNveces(array3, 0, array3.length - 1));
console.log("Esperado: 4 (aparece 5/9 veces)");
console.log("");

const array4 = [1, 1, 2, 2];
console.log("Array:", array4);
console.log("Mayoritario:", maxNveces(array4, 0, array4.length - 1));
console.log("Esperado: null (ninguno aparece > 50%)");