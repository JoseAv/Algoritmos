const array = [31, 42, 40, 31, 50, 27, 36, 33, 8, 10]

const InsertionSort = (array) => {

    // ciclo lineal
    for (let i = 0; i < array.length; i++) {
        // segundo ciclo lineal para compara
        // aqui empezaremos con el valor de i hasta que 
        // i >= 1 ya que iremos moviendo desde el ultimo \
        // de la derecha hasta donde llegue pero a la izquierda
        // entonces iremos en decendente
        for (let j = i; j >= 1; j--) {

            // aqui solo validamos si el valor a la izquierda es menor o no
            if (array[j] < array[j - 1]) {
                // aqui hacemos el cambio de valores
                let save = array[j]
                array[j] = array[j - 1]
                array[j - 1] = save
            }
        }
    }
    return array
}


console.log(
    InsertionSort(array)
)