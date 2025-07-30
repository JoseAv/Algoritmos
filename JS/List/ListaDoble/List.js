
export class Nodo {

    constructor(value) {
        this.back = null
        this.next = null
        this.value = value
    }

}

class DoubleList {
    head;

    AddNodo(value) {
        if (!this.head) {
            this.head = new Nodo(value)
            return
        }

        let current = this.head
        while (current !== null) {
            if (!current.next) {
                current.next = new Nodo(value)
                current.next.back = current
                return
            }
            current = current.next
        }
    }

    ViewNodo() {
        if (!this.head)
            return 'No hay datos'

        let current = this.head
        while (current.next !== null) {
            current = current.next
        }

        while (current !== null) {
            console.log(current.value)
            current = current.back
        }

    }

}


const NewList = new DoubleList()
NewList.AddNodo(1)
NewList.AddNodo(2)
NewList.AddNodo(3)

NewList.ViewNodo()



