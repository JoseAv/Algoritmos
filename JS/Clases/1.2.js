// Clase Rectángulo
// Crea una clase Rectangulo con propiedades ancho y alto.
// Añade métodos para calcular el área() y el perimetro().

class Rectangulo {

    constructor({ ancho = 1, alto = 1 } = {}) {
        this.ancho = ancho
        this.alto = alto
    }

    area() {
        return this.ancho * this.alto
    }

    perimetro() {
        return 2 * this.ancho + 2 * this.alto
    }
}