const productos = [
    { nombre: 'Laptop', precio: 800, categoria: 'tecnologia' },
    { nombre: 'Camisa', precio: 900, categoria: 'ropa' },
    { nombre: 'Teléfono', precio: 500, categoria: 'tecnologia' },
    { nombre: 'Zapatos', precio: 80, categoria: 'ropa' },
    { nombre: 'Tablet', precio: 1500, categoria: 'tecnologia' }
]


const FilterHighPrice = ({ productos }) => {

    let highprice = { precio: 0 }

    for (let index = 0; index < productos.length; index++) {
        if (typeof productos[index]?.precio === "number") {
            productos[index].precio > highprice.precio ? highprice = productos[index] : null
        }
    }
    return highprice
}


const FilterProductsTecnology = ({ productos }) => {

    let ArrTecnology = []

    for (let index = 0; index < productos.length; index++) {
        if (productos[index]?.categoria.toLocaleLowerCase() === "tecnologia") {
            ArrTecnology.push(productos[index])
        }
    }
    return ArrTecnology
}




const FilterProductsName = ({ productos }) => {

    let ArrProductsName = []

    for (let index = 0; index < productos.length; index++) {
        ArrProductsName.push(productos[index].nombre)
    }
    return ArrProductsName
}

const CalculatePrice = ({ productos }) => {

    let CalculatePrice = 0

    for (let index = 0; index < productos.length; index++) {
        CalculatePrice += productos[index].precio
    }
    return CalculatePrice
}



console.log(FilterHighPrice({ productos }));

console.log(FilterProductsTecnology({ productos }));
console.log(FilterProductsName({ productos }));
console.log(CalculatePrice({ productos }));
