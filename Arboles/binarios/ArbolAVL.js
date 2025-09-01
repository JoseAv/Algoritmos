class nodo {

    constructor(value, parents = null) {
        this.value = value
        this.parents = parents
        this.rigth = null
        this.left = null
        this.height = 1
    }
}


class arbol {

    constructor(nodo) {
        this.nodo = nodo
        this.root = null
    }

    addNodo(value) {
        if (!this.root) {
            this.root = new this.nodo(value)
        }

        let temp = this.root
        return this.runAndAddNewNodo(value, temp)

    }

    runAndAddNewNodo(value, temp) {
        if (value === temp.value)
            return

        console.log(value)
        console.log(temp.value)
        if (value > temp.value && !temp.rigth) {
            return temp.rigth = new this.nodo(value)
        }

        if (value < temp.value && !temp.left) {
            return temp.left = new this.nodo(value)
        }
        return value > temp.value ? this.runAndAddNewNodo(value, temp.rigth) : this.runAndAddNewNodo(value, temp.left)
    }

    runNodos() {
        console.log("Raiz:", this.root.value)
        let tempRigth = this.root.rigth
        while (tempRigth !== null) {
            console.log("Rigth:", tempRigth.value)
            console.log(tempRigth)
            tempRigth = tempRigth.rigth
        }

        let tempLeft = this.root.left
        while (tempLeft !== null) {
            console.log("Left:", tempLeft.value)
            tempLeft = tempLeft.left
        }


    }


}


const ArbolAvl = new arbol(nodo)
ArbolAvl.addNodo(5)
ArbolAvl.addNodo(6)
ArbolAvl.addNodo(3)
ArbolAvl.addNodo(4)




ArbolAvl.runNodos()

