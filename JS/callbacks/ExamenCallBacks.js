// Ejercicio #1

function duplicar(num) {
    return num * 2;
}

const aplicarOperacion = (num, callback) => {
    return callback(num)

}


console.log(aplicarOperacion(5, duplicar))
// Debe retornar 10


// Ejercicio #2

const verificarPar = (num, callback) => {
    if (num % 2 !== 0) {
        return callback('El numero no es par')
    }
    return callback(null, `El numero si es par ${num}`)


}

verificarPar(3, (error, mensaje) => {
    if (error) console.error(error);
    else console.log(mensaje); // "Es par"
});

// Ejercicio #3

const simularTimeout = (callback, time) => {

    setTimeout(() => {
        callback()
    }, time);

}

simularTimeout(() => console.log("¡Listo!"), 2000); // Debe imprimir después de 2 segundos.


// Ejercicio #4

obtenerUsuario(1, (error, usuario) => {
    if (error) return console.error("Error en usuario:", error);

    obtenerPosts(usuario.id, (error, posts) => {
        if (error) return console.error("Error en posts:", error);

        obtenerComentarios(posts[0].id, (error, comentarios) => {
            if (error) return console.error("Error en comentarios:", error);
            console.log("Comentarios:", comentarios); // ["Buen post"]
        });
    });
});


// Ejercicio #5


function cargarDatos(url, callback) {
    setTimeout(() => {
        if (url) {
            return callback("Datos cargados");
        }
        return callback("Error: URL inválida");
    }, 1000);
}

// Uso:
cargarDatos("https://api.ejemplo.com", (data) => {
    console.log(data); // ¿Qué problema hay aquí?
});


// Primero Deberia de ser Error first ya que no sabemos si fallo o no, simplemente termino el callback y entonces no hay clarira
// La funcion de cargado en si no regresa nada, entonces nunca recibira los datos
// Tampoco retorna error por si falla o algo