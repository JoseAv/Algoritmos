// Versión Callback:
function leerArchivo(ruta, callback) {
    setTimeout(() => {
        if (ruta === "/archivo.txt") {
            callback(null, "Contenido del archivo");
        } else {
            callback("Archivo no encontrado", null);
        }
    }, 1000);
}

function ReesCRibirCallBack(ruta) {
    setTimeout(() => {
        return new Promise((resolve, reject) => {
            if (ruta !== "/archivo.txt") return reject('Archivo no encontrado')
            resolve('Contenido del archivo')

        })
    }, 1000)


}


// Tu tarea: Reescribir usando `new Promise`.