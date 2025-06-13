// Extiende la clase Animal a Perro y Gato, 
// añadiendo un método sonido() específico para cada uno:


class Animal {
    sonido() {
        console.log(`El Animal hace Sonidos`)
    }
}

class Perro extends Animal {
    sonido() {
        console.log(`El Perro Hace Sonidos`);
    }
}


class Gato extends Animal {
    sonido() {
        console.log(`El Gato Hace Sonidos`);
    }
}


let NewPerro = new Perro()
NewPerro.sonido()

let NewGato = new Gato()
NewGato.sonido()
