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

        if (value > temp.value && !temp.rigth) {
            temp.rigth = new this.nodo(value, temp)
            temp.height = this.caculatehigth(temp)
            this.balanceTree(temp)
            return
        }

        if (value < temp.value && !temp.left) {
            temp.left = new this.nodo(value, temp)
            temp.height = this.caculatehigth(temp)
            this.balanceTree(temp)
            return
        }

        if (value > temp.value) {
            this.runAndAddNewNodo(value, temp.rigth)
            temp.height = this.caculatehigth(temp)
            this.balanceTree(temp)
            return

        } else {
            this.runAndAddNewNodo(value, temp.left)
            temp.height = this.caculatehigth(temp)
            this.balanceTree(temp)
            return
        }

    }

    knowHigth(nodo) {
        return nodo ? nodo.height : 0
    }

    caculatehigth(nodo) {
        return 1 + Math.max(this.knowHigth(nodo.rigth), this.knowHigth(nodo.left))
    }

    calculateBalance(nodo) {
        return nodo.rigth ? nodo.rigth.height : 0 - nodo.left ? nodo.left.height : 0
    }

    balanceTree(nodo) {
        const balance = this.calculateBalance(nodo)

        if (balance >= 2) {
            const balanceSoon = this.calculateBalance(nodo.rigth)
            if (balanceSoon > 0) {
                this.simpleBalanceLeft(nodo)
            }
        }

    }

    simpleBalanceLeft(nodo) {
        if (nodo === this.root) {
            this.root = nodo.rigth
        }
        console.log(nodo.value)
        const temp = nodo.rigth.left ?? null

        // Change Fathers
        nodo.rigth.parents = nodo.parents
        nodo.parents = nodo.rigth
        temp ? temp.parents = nodo : null
        //  change values
        nodo.rigth.left = nodo
        nodo.rigth = temp
        nodo.height = this.caculatehigth(nodo)


    }

    runNodos(nodo = this.root) {
        if (!nodo)
            return
        this.runNodos(nodo.left)
        console.log(`Value: ${nodo.value}, ALtura: ${nodo.height}`)
        this.runNodos(nodo.rigth)
    }

}


const ArbolAvl = new arbol(nodo)
ArbolAvl.addNodo(5)
ArbolAvl.addNodo(6)
ArbolAvl.addNodo(7)

// ArbolAvl.addNodo(6)
// ArbolAvl.addNodo(7)
// ArbolAvl.addNodo(6.6)

ArbolAvl.runNodos()
