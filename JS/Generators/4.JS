function* miGenerador() {
    try {
        yield 'Hola'
        console.log('Hola')
    } catch (error) {
        console.log(error)
    }

}

const gen = miGenerador();
console.log(gen.next()) // Avanza
console.log(gen.throw(new Error('ESTO ES UN ERROR')));
console.log(gen.return("Forzar fin")) // Termina el generador
