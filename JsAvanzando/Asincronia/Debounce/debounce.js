const Prueba = (name, apellido) => {
    console.log('Soy una prueba de ', name)
    console.log('Hola soy el apellido', apellido)
}



function Debunce(callback, time) {
    let correTime = null

    return function (...args) {
        if (correTime) {
            clearTimeout(correTime)
        }


        correTime = setTimeout(() => {
            callback(...args)
        }, time);
    }
}


const newDebounce = Debunce(Prueba)
newDebounce('Joseeee', 'messi')
