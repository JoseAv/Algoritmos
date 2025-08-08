let arrayBinary = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const SearchBinary = (array, tarjet) => {

    let left = 0
    let right = array.length - 1
    // Lado Inicial y final del Array

    // ciclamos la condicion es para que left si no se encuentra al sumar entonces siempre sera mas grande que rigth al final de la iteracion si no se encuentra
    while (left <= right) {
        // sacamos mitad y floor para siempre redondear para abajo
        let mitad = Math.floor((left + right) / 2)
        // si el valor que tenemos actual es el indicado
        if (array[mitad] === tarjet) {
            return true
        }
        // si el valor es menor -> entonces usamos la parte mayor
        if (array[mitad] < tarjet) {
            left = mitad + 1

        }
        // si el valor es mayor -> entonces usamos la parte menor
        if (array[mitad] > tarjet) {
            right = mitad - 1
        }
    }

    // si no existe
    return false

}

console.log(
    SearchBinary(arrayBinary, 11)
)
