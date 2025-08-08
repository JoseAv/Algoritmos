const SearchBinary = (array, num, init = 0, end = array.length - 1) => {
    // Caso base: si init > end, el elemento no está en el array
    if (init > end) {
        return false;
    }

    // Calcular la mitad usando los índices init y end
    let mitad = Math.trunc((init + end) / 2);

    // Si encontramos el número
    if (array[mitad] === num) {
        return true;
    }

    // Si el elemento del medio es menor, buscar en la mitad derecha
    if (array[mitad] < num) {
        return SearchBinary(array, num, mitad + 1, end);
    }

    // Si el elemento del medio es mayor, buscar en la mitad izquierda
    if (array[mitad] > num) {
        return SearchBinary(array, num, init, mitad - 1);
    }
};

let arrayBinary = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(
    SearchBinary(arrayBinary, 13, 0, arrayBinary.length - 1)
);
