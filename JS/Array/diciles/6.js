const ventas = [
    { producto: 'Laptop', vendedor: 'Juan', mes: 'Enero', cantidad: 5, precio: 800 },
    { producto: 'Mouse', vendedor: 'María', mes: 'Enero', cantidad: 20, precio: 15 },
    { producto: 'Laptop', vendedor: 'Pedro', mes: 'Febrero', cantidad: 3, precio: 800 },
    { producto: 'Teclado', vendedor: 'Juan', mes: 'Febrero', cantidad: 10, precio: 50 },
    { producto: 'Mouse', vendedor: 'María', mes: 'Marzo', cantidad: 15, precio: 15 }
];

const totalVentas = ({ ventas }) => {
    let ventasVendedor = {}
    for (let productos of ventas) {
        if (!ventasVendedor[productos.vendedor]) {
            ventasVendedor[productos.vendedor] = productos.cantidad * productos.precio
        } else {
            ventasVendedor[productos.vendedor] += productos.cantidad * productos.precio
        }
    }
    return ventasVendedor
}

const totalVentasMes = ({ ventas }) => {
    let ventasVendedor = {}
    for (let productos of ventas) {
        if (!ventasVendedor[productos.mes]) {
            ventasVendedor[productos.mes] = productos.cantidad * productos.precio
        } else {
            ventasVendedor[productos.mes] += productos.cantidad * productos.precio
        }
    }
    return ventasVendedor
}

const ProductoMasVendido = ({ ventas }) => {
    let ventasVendedor = {}
    for (let productos of ventas) {
        if (!ventasVendedor[productos.producto]) {
            ventasVendedor[productos.producto] = productos.cantidad
        } else {
            ventasVendedor[productos.producto] += productos.cantidad
        }
    }

    let masVendido = {}
    let actual = 0
    for (let [key, value] of Object.entries(ventasVendedor)) {
        if (value >= actual) {
            actual = value
            masVendido = { [key]: value }
        }
    }
    return masVendido
}

console.log(totalVentasMes({ ventas }));

console.log(ProductoMasVendido({ ventas }));
console.log(totalVentas({ ventas }));


