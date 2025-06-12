// Clase Libro
// Crea una clase Libro con propiedades titulo, autor y añoPublicacion.
// Añade un método info() que muestre: "El libro [titulo] fue escrito por [autor] en el año [añoPublicacion].".


class Libro {

    constructor({ titulo = 'Sin Titulo', autor = 'Sin Autor', year = 'Desconocido' } = {}) {
        this.titulo = titulo
        this.autor = autor
        this.year = year
    }

    info() {
        return `El libro ${this.titulo} fue escrito por ${this.autor} en el año ${this.year}.`
    }

}

let nuevoLibro = new Libro({ titulo: 'Jose y 2 mas', autor: 'Yo mero', year: '1999' })
nuevoLibro.info()