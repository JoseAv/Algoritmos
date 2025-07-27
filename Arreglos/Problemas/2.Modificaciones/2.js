// Variable para saber la actual posicion vacia

// ciclo

// if(actual !== 0 )
//      array[variable] = array[i]
//      array[i] = 0
//      variable++

const MoveZero = (array) => {
    let indexFree = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[indexFree] = array[i]
            array[i] = 0
            indexFree++
        }
    }
}

MoveZero([0, 1, 0, 3, 12])