import onload from 'onload';
const simularCarga = (url) => {

    setTimeout(() => {

        if (!url) {
            onerror((error) => console.log(`error ${error}, Url: ${url} no es valida`))
            return
        }
        onload((message) => console.log(`Este es un mensaje, ${message}`))


    }, 2000);
}

simularCarga(
    "https://api.ejemplo.com");





// Ejercicio 2.1:
// Crea una función simularCarga(URL, onLoad, onError) que:
// Si la "URL" es válida(ej: "https://api.ejemplo.com"), después de 2 segundos llama a onLoad con un mensaje de éxito.
// Si no es válida(ej: ""), llama a onError con "Error: URL inválida".