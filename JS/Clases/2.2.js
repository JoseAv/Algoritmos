// Clase Producto y Carrito
// Crea una clase Producto con nombre, precio y cantidad.
//     Luego, una clase Carrito que pueda agregar productos(agregarProducto(producto)), calcular el total() y listar los productos.


class Producto {
    constructor({ nombre, precio, cantidad } = {}) {
        if (nombre === undefined || precio === undefined || cantidad === undefined) {
            throw new Error("Faltan parámetros obligatorios: nombre, precio y cantidad son requeridos");
        }
        if (typeof precio !== 'number' || precio <= 0) {
            throw new Error("El precio debe ser un número mayor a 0");
        }
        if (!Number.isInteger(cantidad) || cantidad < 0) {
            throw new Error("La cantidad debe ser un entero positivo");
        }
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }
}

class Carrito {
    Prodctos = []

    AgregarProductos({ nombre, precio, cantidad }) {
        try {
            this.Prodctos.push(new Producto({ nombre, precio, cantidad }));
        } catch {
            console.log('No se creo el producto')
        }

    }


}
