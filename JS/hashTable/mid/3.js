function longestSubstringWithoutRepeating(s) {
    let lastSeen = {};       // Guarda la última posición de cada carácter
    let left = 0;            // Inicio de la ventana actual
    let maxLength = 0;       // Longitud de la subcadena más larga
    let startMax = 0;        // Índice inicial de la subcadena más larga

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        // Si el carácter ya está en lastSeen y dentro de la ventana actual (left a right)
        console.log(currentChar in lastSeen)
        console.log(Object.hasOwn(lastSeen, currentChar))
        if (currentChar in lastSeen && lastSeen[currentChar] >= left) {
            left = lastSeen[currentChar] + 1; // Movemos left después del repetido
        }

        lastSeen[currentChar] = right; // Actualizamos la última posición del carácter

        // Verificamos si la subcadena actual es la más larga hasta ahora
        if (right - left + 1 > maxLength) {
            maxLength = right - left + 1;
            startMax = left; // Guardamos el inicio de la nueva subcadena más larga
        }
    }
    console.log(lastSeen)


    // Devolvemos la subcadena (desde startMax hasta startMax + maxLength)
    return s.substring(startMax, startMax + maxLength);
}

// Ejemplo de uso
console.log(longestSubstringWithoutRepeating("bcdebabec")); // "cdeba" (longitud 5)