// Nivel 1: Básico
// Ejercicio 1:
// Crea una función multiplicarAsync(a, b) que devuelva una promesa:

// Resuelve la multiplicación de a y b después de 1 segundo.

// Rechaza si algún valor no es numérico.



const multiplicarAsync = async (a, b) => {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('No es un valor valido')
        }
        setTimeout(() => {
            resolve(a * b)
        }, 1000);
    })
}

console.log(await multiplicarAsync(1, 2))



// Ejercicio 2 y 5:
// Simula este flujo con promesas encadenadas:
// Obtener un usuario por ID.
// Obtener sus órdenes usando el userID.
// Obtener los detalles de la primera orden.

// Funciones base (simuladas):
const obtenerUsuario = (id) => Promise.resolve({ id: 1, name: "Luis" });
const obtenerOrdenes = (userId) => Promise.resolve([{ id: 101, product: "Laptop" }]);
const obtenerDetallesOrden = (orderId) => Promise.resolve({ status: "Entregado" });



const resultData = async (id) => {
    try {
        const usuario = await obtenerUsuario(id)
        const orden = await obtenerOrdenes(usuario.id)
        return await obtenerDetallesOrden(orden.id)
    } catch (error) {
        console.log('Esto es un error')
    }
}

console.log(await resultData(1))


// Ejercicio 3:
// Usa Promise.all para llamar a estas 3 APIs simuladas en paralelo y mostrar todos los resultados:



const api1 = fetchSimulado("/data1", 1000, { data: "A" });
const api2 = fetchSimulado("/data2", 500, { data: "B" });
const api3 = fetchSimulado("/data3", 1500, { data: "C" });

function fetchSimulado(url, delay, data) {
    return new Promise(resolve => setTimeout(() => resolve(data), delay));
}



const AllResult = async (arr) => {
    try {
        return await Promise.all(arr)
    } catch (error) {
        console.log(error)
    }
}

console.log(await AllResult([api1, api2, api3]))



// Ejercicio 4:
// Usa Promise.race para:

// Llamar a una API(fetchSimulado como arriba, delay: 3s).

// Timeout de 2 segundos.

// Mostrar el resultado o "Operación cancelada por timeout".

const fetch1 = fetApi(2000, { a: 1 })
const fetch2 = fetApi(2000, { a: 2 })
const fetch3 = fetApi(2000, { a: 3 })

function fetApi(time, obj) {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(obj)
        }, time);
    })
}

const race = async () => {

    try {
        let resultado = await Promise.race([fetch1, fetch2, fetch3])
        console.log(resultado)

    } catch (error) {
        console.log(error)
    }
}

console.log(await race())


// Ejercicio 6

function verificarStockCallback(productoId, callback) {
    setTimeout(() => {
        if (productoId === "123") {
            callback(null, { stock: 10 });
        } else {
            callback("Producto no encontrado", null);
        }
    }, 1000);
}


const verificarStockCallback2 = async (productoId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (productoId === '123') {
                resolve({ stock: 10 })
            } else {
                reject("Producto no encontrado")
            }
        }, 1000)
    })
}

// 📌 Nivel 6: Desafío Final
// Ejercicio 7:
// Crea una función ejecutarTareasEnSerie(tareas) que:

// Acepte un array de funciones que devuelvan promesas.

// Ejecute las tareas una tras otra(no en paralelo).

// Retorne una promesa con los resultados en orden.


const tareas = [
    () => Promise.resolve("Tarea 1"),
    () => Promise.resolve("Tarea 2"),
    () => Promise.reject("Falló Tarea 3"),
];


async function ejecutarTareasEnSerie(tareas) {
    const resultados = [];
    for (const tarea of tareas) {
        try {
            resultados.push(await tarea());
        } catch (error) {
            resultados.push(error);
        }
    }
    return resultados;
}

console.log(await TareasPromise(tareas))
