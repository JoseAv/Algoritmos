class Nodo {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class Lista {
    head

    AddNodo(value) {

        if (!this.head) {
            this.head = new Nodo(value)
            return
        }

        let current = this.head
        while (current.next !== null) {
            current = current.next
        }
        current.next = new Nodo(value)
    }

    SearchNodo(value) {
        let current = this.head
        if (!current) {
            return 'No hay datos'
        }
        while (current !== null) {
            if (value === current.value) {
                return true
            }
            current = current.next
        }
        return false

    }


    DeleteNodo(value) {
        let current = this.head

        if (current.value === value && current.next === null) {
            this.head = null
            return
        }

        let back = null
        while (current !== null) {

            if (current.value === value && current.value === this.head.value) {
                this.head = this.head.next
                return
            }

            if (current.value === value) {
                back.next = back.next.next
                return
            }
            back = current
            current = current.next
        }
    }


    ReverseNodos() {
        if (!this.head) {
            return
        }

        let current = this.head
        let atras = null

        while (current !== null) {
            let temp = current.next
            current.next = atras

            // movimiento
            atras = current
            current = temp


        }
    }

    ReverseNodos(current = this.head, atras = null) {
        if (current === null) {
            this.head = atras
            return
        }

        this.ReverseNodos(current.next, current)
        current.next = atras
    }


    ViewNodo() {
        let current = this.head
        if (!current)
            return 'No hay datos'

        while (current !== null) {
            console.log(current.value)
            current = current.next
        }
    }


}


const SimpleList = new Lista()
SimpleList.AddNodo(1)
SimpleList.AddNodo(2)
SimpleList.AddNodo(3)
SimpleList.AddNodo(4)
SimpleList.ReverseNodos()
SimpleList.ViewNodo()
