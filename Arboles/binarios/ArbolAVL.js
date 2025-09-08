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
            this.balanceTree(temp)
            this.updateHeightsUpward(temp)
            return
        }

        if (value < temp.value && !temp.left) {
            temp.left = new this.nodo(value, temp)
            this.balanceTree(temp)
            this.updateHeightsUpward(temp)
            return
        }

        if (value > temp.value) {
            this.runAndAddNewNodo(value, temp.rigth)
            this.balanceTree(temp)
            this.updateHeightsUpward(temp)
            return

        } else {
            this.runAndAddNewNodo(value, temp.left)
            this.balanceTree(temp)
            this.updateHeightsUpward(temp)
            return
        }

    }


    caculatehigth(nodo) {
        return 1 + Math.max(this.knowHigth(nodo.rigth), this.knowHigth(nodo.left))
    }


    knowHigth(nodo) {
        return nodo ? nodo.height : 0
    }

    calculateBalance(nodo) {
        if (!nodo)
            return
        return this.knowHigth(nodo.rigth) - this.knowHigth(nodo.left)
    }


    balanceTree(nodo) {
        const balance = this.calculateBalance(nodo)

        if (balance === 2) {
            const balanceSoon = this.calculateBalance(nodo.rigth)
            if (balanceSoon && balanceSoon > 0) {
                this.simpleBalanceLeft(nodo)
            }
        }

        if (balance === -2) {
            const balanceSoon = this.calculateBalance(nodo.left)
            if (balanceSoon && balanceSoon < 0) {
                this.simpleBalanceRigth(nodo)
            }
        }

        if (balance === -2) {
            const balanceSoon = this.calculateBalance(nodo.left)
            if (balanceSoon && balanceSoon > 0) {
                this.balanceRLR(nodo)
            }
        }
    }

    simpleBalanceRigth(nodo) {

        if (nodo === this.root) {
            this.root = nodo.left
        }

        const childrenrigth = nodo.left.rigth
        const parensOrigintal = nodo.parents
        const nodoLeft = nodo.left

        if (parensOrigintal && parensOrigintal.left === nodo) {
            parensOrigintal.left = nodoLeft
        } else if (parensOrigintal && parensOrigintal.rigth === nodo) {
            parensOrigintal.rigth = nodoLeft
        }

        // update padres
        childrenrigth ? childrenrigth.parents = nodo : null
        nodo.parents = nodoLeft
        nodoLeft.parents = parensOrigintal

        // update links
        nodoLeft.rigth = nodo
        nodo.left = childrenrigth
    }




    simpleBalanceLeft(nodo) {
        if (nodo === this.root) {
            this.root = nodo.rigth
        }

        const temp = nodo.rigth.left ?? null

        // Change childrens of parents
        if (nodo.parents && nodo.parents.left === nodo) {
            nodo.parents.left = nodo.rigth
        } else if (nodo.parents && nodo.parents.rigth === nodo) {
            nodo.parents.rigth = nodo.rigth
        }

        // Change Fathers
        nodo.rigth.parents = nodo.parents
        nodo.parents = nodo.rigth
        temp ? temp.parents = nodo : null

        //  change values
        nodo.rigth.left = nodo
        nodo.rigth = temp

    }



    balanceRLR(nodo) {
        if (nodo === this.root) {
            this.root = nodo.left.rigth
        }

        const newRoot = nodo.left.rigth
        const LeftNewRoot = newRoot.left
        const rigthNewRoot = newRoot.rigth
        const originalParents = nodo.parents
        // update parents

        newRoot.parents = nodo.parents
        nodo.left.parents = newRoot
        nodo.parents = newRoot

        // update childrens of parent original
        if (originalParents && originalParents.left === nodo) {
            originalParents.left = newRoot
        } else if (originalParents && originalParents.rigth === nodo) {
            originalParents.rigth = newRoot
        }


        // update Values

        newRoot.left = nodo.left
        newRoot.rigth = nodo

        nodo.left.rigth = LeftNewRoot
        LeftNewRoot.parents = nodo

        nodo.left = rigthNewRoot
        rigthNewRoot.parens = nodo


    }

    updateHeightsUpward(nodo) {
        let current = nodo;
        while (current) {
            current.height = this.caculatehigth(current);
            current = current.parents;
        }
    }

    runNodos(nodo = this.root) {
        if (!nodo)
            return
        this.runNodos(nodo.left)
        console.log(`Value: ${nodo.value}, ALtura: ${nodo.height}`)
        console.log(this.calculateBalance(nodo))
        this.runNodos(nodo.rigth)
    }

}


const ArbolAvl = new arbol(nodo)
ArbolAvl.addNodo(5)
ArbolAvl.addNodo(6)
ArbolAvl.addNodo(7)

ArbolAvl.addNodo(4)
ArbolAvl.addNodo(3)
ArbolAvl.addNodo(2)
ArbolAvl.addNodo(1)


ArbolAvl.runNodos()
