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


    ViewNodo() {
        let current = this.head
        if (!current)
            return 'No hay datos'

        while (current !== null) {
            console.log(current.value)
            current = current.next
        }
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
        if (!current)
            return 'no hay datos'

        if (current.value === value && current.next === null) {
            this.head = null
        }

        if (current.value === value && current.next !== null) {
            this.head = current.next
        }

        while (current.next !== null) {
            if (current.next.value === value) {
                current.next = current.next.next
                return
            }
            current = current.next
        }

    }
}


const SimpleList = new Lista()
SimpleList.AddNodo(1)
SimpleList.AddNodo(2)
SimpleList.AddNodo(3)
SimpleList.AddNodo(4)
SimpleList.DeleteNodo(4)
console.log(SimpleList.SearchNodo(1))
SimpleList.ViewNodo()
