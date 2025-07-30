

export class Nodo {

    constructor(value, position) {
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

    AddNodoInAnyOne(value) {
        if (!this.head)
            return 'No hay datos'

        let current = this.head
        let count = 1
        while (current !== null) {
            if (count === value) {
                let temp = current.next
                current.next = new Nodo(value)
                current.next.back = current
                current.next.next = temp
                temp.back = current.next
                return
            }
            count++
            current = current.next
        }

    }


    DeleteAll(value) {
        if (!this.head)
            return 'No hay datos'

        if (this.head.value === value) {
            this.head = this.head.next
            return this.DeleteAll(value)
        }


        let current = this.head
        while (current !== null) {
            if (current.value === value) {
                let temp = current.back
                console.log(temp.value)
                console.log(current.value)

                if (temp.next.next) {
                    temp.next = temp.next.next
                    temp.next.back = temp
                } else {
                    temp.next = null
                }
            }
            current = current.next
        }

    }



    ViewNodo() {
        if (!this.head)
            return 'No hay datos'

        let current = this.head
        while (current !== null) {
            console.log('No', current.value)
            current = current.next
        }

        // while (current !== null) {
        //     console.log(current.value)
        //     current = current.back
        // }

    }

}


const NewList = new DoubleList()
NewList.AddNodo(1)
NewList.AddNodo(2)
NewList.AddNodo(3)
NewList.AddNodo(4)
NewList.AddNodo(5)
NewList.AddNodo(6)
NewList.AddNodoInAnyOne(4)
NewList.AddNodoInAnyOne(4)

NewList.AddNodoInAnyOne(4)




NewList.DeleteAll(4)


NewList.ViewNodo()



