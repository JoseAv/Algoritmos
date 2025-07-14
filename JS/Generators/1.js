let cuentaRegresiva = {
    initialNum: 5,
    [Symbol.iterator]() {
        return {
            initialNum: this.initialNum,
            next() {
                if (this.initialNum >= 0) {
                    return { value: this.initialNum--, done: false }
                }
                return { done: true }
            }
        }
    }


}


for (const num of cuentaRegresiva) {
    console.log(num); // Debe imprimir: 5, 4, 3, 2, 1, 0
}