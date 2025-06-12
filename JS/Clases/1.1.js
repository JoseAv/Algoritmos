// Clase Persona
// Crea una clase Persona con propiedades nombre y edad.
// Añade un método saludar() que imprima: "Hola, mi nombre es [nombre] y tengo [edad] años.".


class Persona {

    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    saludar() {
        return console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`)
    }
}