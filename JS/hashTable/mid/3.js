function longestSubstringWithoutRepeating(s) {
    let lastSeen = {};   // Guardamos todos los valores la ultima ves que los vimos    
    let left = 0;        // en donde esta empezando la cadena, esto cambia cada ves que vemos un numero repetido
    let maxLength = 0;   // Este guarda la cantidad maxima de caracteres restando derecha - izquierda
    let startMax = 0;    // Desde donde inicia, junto con max legth podemos saber cuantos caracteres son eje: 1 - 4


    // cilo para el array
    for (let right = 0; right < s.length; right++) {
        // elemento actual
        const currentChar = s[right];

        // verificamos si encontramos un elemento para actualizar la ultima ves
        // actualizamos izquierda ya que si encontramos uno, la nueva cadena empieza desde donde se parte + 1 -> es decir el sigiente
        if (currentChar in lastSeen) {
            left = lastSeen[currentChar] + 1;
        }

        // aqui actuailizamos o arreglamos, en el anterior solo actualizamos left
        lastSeen[currentChar] = right;


        // aqui hacemos una cuenta para saber si la cadena que se forma es mas alta que la que tenemos guardada
        if (right - left + 1 > maxLength) {
            // actualizamos datos
            maxLength = right - left + 1;
            startMax = left;
        }
    }
    console.log(lastSeen)

    // retonrmaos un subString desde el inicio que teniamos hasta ese inicio + la cantidad que encontramos de caracteres
    return s.substring(startMax, startMax + maxLength);
}

// Ejemplo de uso
console.log(longestSubstringWithoutRepeating("bcdebabec")); 