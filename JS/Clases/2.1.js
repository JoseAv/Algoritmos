// Ejercicios Intermedios
// Clase CuentaBancaria
// Crea una clase CuentaBancaria con propiedades titular y saldo(inicializado en 0).
// Añade métodos depositar(cantidad) y retirar(cantidad).
// Si el saldo es insuficiente al retirar, muestra un mensaje de error.

class CuentaBancaria {
    saldo = 0
    constructor(titular) {

        this.titular = titular
    }

    depositar(cantidad) {
        if (cantidad <= 0 || typeof cantidad !== 'number') return
        this.saldo += cantidad
        return `Nueva Cantidad es: ${this.saldo}`
    }


    retirar(cantidad) {
        if (cantidad <= 0 || typeof cantidad !== 'number') return
        if (cantidad > this.saldo) return 'No se tiene el dinero suficiente'
        this.saldo -= cantidad
        return `Nueva Cantidad es: ${this.saldo}`

    }
}



let newCuenta = new CuentaBancaria('Jose')
console.log(newCuenta.depositar(2000))

console.log(newCuenta.retirar(1000))

console.log(newCuenta.retirar(20001))

