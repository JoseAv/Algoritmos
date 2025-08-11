const maxNveces = (array, left, rigth) => {

    if (left === rigth)
        return array[left]

    const med = Math.floor((left + rigth) / 2)
    const leftNumber = maxNveces(array, left, med)
    const righNumber = maxNveces(array, med + 1, rigth)

    if (!leftNumber && !righNumber) {
        return 'no hay dato mayor'
    }

    if (!!leftNumber && !!righNumber) {
        if (leftNumber === righNumber)
            return leftNumber
        return comprobateMaxArray(array, left, rigth, leftNumber, righNumber)
    }


    return !leftNumber ? righNumber : leftNumber


}


const comprobateMaxArray = (array, left, rigth, leftNumber, righNumber) => {
    const count = { [leftNumber]: 0, [righNumber]: 0 }
    for (let i = left; i <= rigth; i++) {
        if (count[array[i]]) {
            count[array[i]] += 1
        }
    }
    const totalElements = rigth - left + 1;
    const winner = count[righNumber] > count[leftNumber] ? righNumber : leftNumber;
    const winnerCount = count[winner];

    // Si es mayoritario
    if (winnerCount > totalElements / 2) {
        return winner;
    } else {
        return; // No hay mayoritario en este segmento
    }

}



const array = [1, 2, 2, 1, 2, 3, 1, 2, 2]

console.log(

    maxNveces(array, 0, array.length - 1)
)