# 1. Operaciones Básicas:
1. Suma de elementos: Dado un arreglo de números, devuelve la suma total.
    Ejemplo: [1, 2, 3] → 6.

2. Encontrar el máximo/mínimo: Devuelve el número mayor o menor de un arreglo.
    Ejemplo: [5, 2, 9, 1] → 9 (max) o 1 (min).

3. Promedio: Calcula el promedio de los números en un arreglo.
    Ejemplo: [10, 20, 30] → 20.

# 2. Modificación de Arreglos:
1. Invertir un arreglo: Devuelve el arreglo en orden inverso sin usar reverse().
    Ejemplo: [1, 2, 3] → [3, 2, 1].

2. Mover ceros al final: Mueve todos los 0 al final manteniendo el orden del resto.
    Ejemplo: [0, 1, 0, 3, 12] → [1, 3, 12, 0, 0].

3. Duplicar elementos: Crea un nuevo arreglo donde cada elemento esté duplicado.
    Ejemplo: [1, 2, 3] → [1, 1, 2, 2, 3, 3].

# 3. Búsqueda y Filtrado:
1. Contar elementos mayores a X: Dado un número X, cuenta cuántos elementos son mayores.
    Ejemplo: [1, 5, 3, 7], X=4 → 2 (5 y 7).

2. Buscar un elemento: Devuelve true si un elemento existe en el arreglo, false si no.
    Ejemplo: ["a", "b", "c"], "b" → true.

3. Filtrar números pares: Devuelve un nuevo arreglo solo con los números pares.
Ejemplo: [1, 2, 3, 4] → [2, 4].

# 4. Transformación:
1. Elevar al cuadrado: Crea un nuevo arreglo con cada elemento elevado al cuadrado.
    Ejemplo: [1, 2, 3] → [1, 4, 9].

2. Convertir a strings: Transforma un arreglo de números a strings.
    Ejemplo: [1, 2, 3] → ["1", "2", "3"].

3. Concatenar arreglos: Combina dos arreglos en uno solo.
    Ejemplo: [1, 2] y [3, 4] → [1, 2, 3, 4].

# 5. Algoritmos Clásicos:
1. Ordenamiento básico (Bubble Sort): Ordena un arreglo de menor a mayor sin usar sort().
    Ejemplo: [3, 1, 4, 2] → [1, 2, 3, 4].

2. Buscar duplicados: Devuelve true si hay elementos duplicados.
    Ejemplo: [1, 2, 2, 3] → true.

3. Eliminar duplicados: Devuelve un nuevo arreglo sin elementos repetidos.
    Ejemplo: [1, 2, 2, 3] → [1, 2, 3].

# 6. Retos Adicionales:
1. Rotar arreglo: Rota los elementos n posiciones a la izquierda.
    Ejemplo: [1, 2, 3, 4], n=1 → [2, 3, 4, 1].

2. Matriz transpuesta: Dada una matriz (arreglo 2D), transpón sus filas y columnas.
    Ejemplo: [
        [1, 2], 
        [3, 4]
              ] →
              
               [
                [1, 3], 
                [2, 4]
               ].

3. Suma de diagonales: En una matriz cuadrada, suma las diagonales principal y secundaria.
    Ejemplo: [
        [1, 2, 3], //index 0,2
        [4, 5, 6], // index 1,1
        [7, 8, 9] // index 3,0
        ] → Diagonal principal: 1 + 4 = 5, secundaria: 2 + 3 = 5.

4. Frecuencia de elementos: Devuelve un objeto con la frecuencia de cada elemento.
    Ejemplo: ["a", "b", "a", "c"] → { a: 2, b: 1, c: 1 }.

5. Palíndromo en arreglo: Verifica si un arreglo es palíndromo (se lee igual al revés).
    Ejemplo: [1, 2, 2, 1] → true.

