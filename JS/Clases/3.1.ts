// 1. Clase FiguraGeometrica(Herencia)
// Objetivo:
// Crea una clase abstracta FiguraGeometrica con un método abstracto calcularArea().
// Implementa subclases Circulo y Triangulo que hereden de ella.

abstract class figuraGeometrica {
    abstract calcularArea(): void
}


class circulo extends figuraGeometrica {
    radio = 1;
    pi = 3.1416
    constructor(radio: number) {
        super()
        this.radio = radio
    }
    calcularArea(): void {
        console.log('La base del circulo es:', (this.radio * this.radio) * this.pi)
    }
}

class triangulo extends figuraGeometrica {
    base = 1;
    altura = 1;

    constructor(base: number, altura: number) {
        super()
        this.base = base
        this.altura = altura
    }
    calcularArea(): void {
        console.log('La base del Triangulo es:', (this.base * this.altura) / 2)
    }
}


let Circulo = new circulo(2)
let Triangulo = new triangulo(4, 2)

Circulo.calcularArea()
Triangulo.calcularArea()

