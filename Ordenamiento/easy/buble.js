const BubleArray = [37, 1, 27, 7, 15, 11, 18, 9, 15, 11]


const orderBuble = (BubleArray) => {

    // ciclo la primera ves y tomo el primer elemento
    for (let i = 0; i < BubleArray.length; i++) {
        // ahora ciclo nuevamente para comparar ese valor
        for (let j = 0; j < BubleArray.length - 1; j++) {
            // si el actual es mayor al siguiente entonces los intercambio
            if (BubleArray[j] > BubleArray[j + 1]) {
                let temp = BubleArray[j]
                BubleArray[j] = BubleArray[j + 1]
                BubleArray[j + 1] = temp
            }
        }
    }
    return BubleArray
}


console.log(
    orderBuble(BubleArray)
)

