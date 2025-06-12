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
    Productos = []

    AgregarProductos({ nombre, precio, cantidad }) {
        try {
            this.Productos.push(new Producto({ nombre, precio, cantidad }));
        } catch {
            console.log('No se creo el producto')
        }
    }

    Total() {
        if (!this.Productos.length) {
            console.log('NO HAY PRODUCTOS');
            return
        }
        const total = [...this.Productos].reduce((acc, current) => {
            return (current.precio * current.cantidad) + acc
        }, 0)
        this.Productos.forEach(element => {
            console.log('Nombre: ', element.nombre)
            console.log('Precio: ', element.precio)
            console.log('Cantidad: ', element.cantidad)
        });
        console.log(total)
        console.log('El total Es ', total)
    }
}

let producto = { nombre: 'Limon', precio: 30, cantidad: 2 }
let producto2 = { nombre: 'Manzana', precio: 12, cantidad: 3 }
let producto3 = { nombre: 'Pera', precio: 333, cantidad: 5 }

let newCarrito = new Carrito()
newCarrito.AgregarProductos(producto)
newCarrito.AgregarProductos(producto2)
newCarrito.AgregarProductos(producto3)
newCarrito.Total()