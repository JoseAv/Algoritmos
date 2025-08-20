class Nodo {
    constructor(value) {
        this.value = value
        this.left = null
        this.rigth = null
    }
}

class Arbol {
    raiz = null

    InsertNodo(value) {

        if (!this.raiz) {
            this.raiz = new Nodo(value)
            return
        }

        let temp = this.raiz
        return this.Comprobate(temp, value)
    }

    Comprobate = (nodo, value) => {
        if (value === nodo.value)
            return

        if (value > nodo.value) {
            return nodo.rigth === null ? nodo.rigth = new Nodo(value) : this.Comprobate(nodo.rigth, value)
        }
        return nodo.left === null ? nodo.left = new Nodo(value) : this.Comprobate(nodo.left, value)
    }

    RunNodo(nodo = this.raiz) {
        if (!nodo)
            return
        console.log('Value', nodo.value)
        this.RunNodo(nodo.left)
        this.RunNodo(nodo.rigth)
        return
    }

    // findValue(target, nodo = this.raiz, nivel = 0) {
    //     if (!nodo)
    //         return

    //     return this.recursivefind(target, nodo, nivel)

    // }

    // recursivefind(target, nodo, nivel) {
    //     if (nodo.value === target) {
    //         return nivel
    //     }

    //     if (target > nodo.value) {
    //         return nodo.rigth === null ? 'No Existe' : this.recursivefind(target, nodo.rigth, ++nivel)
    //     }
    //     return nodo.left === null ? 'No Existe' : this.recursivefind(target, nodo.left, ++nivel)
    // }

    findValue = (nodo = this.raiz, nivel = 0) => (target) => {
        if (!nodo)
            return

        if (nodo.value === target) {
            return nivel
        }

        if (target > nodo.value) {
            if (nodo.rigth === null) {
                return 'no Existe'
            }
            return this.findValue(nodo.rigth, ++nivel)(target)

        }

        if (nodo.left === null) {
            return 'no Existe'
        }
        return returnthis.findValue(nodo.left, ++nivel)(target)
    }

    MinMax(nodo = this.raiz, values = { min: this.raiz.value, max: this.raiz.value }) {
        if (!nodo)
            return

        if (nodo.value > values.max) {
            values.max = nodo.value
        }
        if (nodo.value < values.min) {
            values.min = nodo.value
        }

        this.MinMax(nodo.left, values)
        this.MinMax(nodo.rigth, values)
        return values
    }
}




const ArbolBinary = new Arbol()

ArbolBinary.InsertNodo(0)
ArbolBinary.InsertNodo(-1)
ArbolBinary.InsertNodo(1)
ArbolBinary.InsertNodo(-2)
ArbolBinary.InsertNodo(2)
ArbolBinary.InsertNodo(3)
ArbolBinary.InsertNodo(-4)
ArbolBinary.InsertNodo(5)
ArbolBinary.InsertNodo(0)

ArbolBinary.RunNodo()
const SaveArbol = ArbolBinary.findValue()
console.log(
    SaveArbol(1)
)

console.log(
    ArbolBinary.MinMax()
)

// console.log(
//     ArbolBinary.findValue(5)
// )
