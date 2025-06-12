// Clase Pila(Estructura de Datos)
// Objetivo:
// Implementa una clase Pila(stack) con:
// push(elemento): Añade un elemento al tope.
//     pop(): Remueve y devuelve el elemento del tope.
//         peek(): Devuelve el elemento del tope sin removerlo.
//             estaVacia(): Retorna true si la pila está vacía.


class Pila {
    #DataPila = []

    push(elemento) {
        this.#DataPila.push(elemento)
        console.log(this.#DataPila)
    }


    pop() {
        if (!this.#DataPila.length) {
            console.log('No hay datos en la pila');
            return
        }
        return this.#DataPila.pop()
    }

    peek() {
        if (!this.#DataPila.length) {
            console.log('No hay datos en la pila');
            return
        }

        return this.#DataPila[this.#DataPila.length - 1]

    }


    estaVacia() {
        if (!this.#DataPila.length) return true
        return false
    }

}

const newPila = new Pila()
newPila.push('Hola')
newPila.push('Adios')
newPila.push('Hola de nuevo')
console.log(newPila.peek());

console.log(newPila.pop())
console.log(newPila.peek());

console.log(newPila.pop())
console.log(newPila.peek());

console.log(newPila.pop())
console.log(newPila.peek());


console.log(newPila.estaVacia())