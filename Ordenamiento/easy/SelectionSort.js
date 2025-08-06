const array = [40, 47, 5, 36, 50, 30, 1, 20, 21, 47]

// por selecion
const SelectionSort = (array) => {
    // ciclo para itera de forma lineal
    for (let i = 0; i < array.length; i++) {
        // tomamos el primer elemento
        let minor = array[i]
        let index = i
        // segundo ciclo lineal para comparacion
        for (let j = i; j < array.length; j++) {

            // comprobamos si el valor que tenemos es menor
            // al que recorremos
            // y guardamos el indice y valor si es cierto
            if (minor < array[j]) {
                minor = array[j]
                index = j
            }
        }

        // intercambiamos los valores
        array[index] = array[i]
        array[i] = minor

    }
    return array
}

console.log(
    SelectionSort(array)


)