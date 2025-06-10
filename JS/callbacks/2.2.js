const delay = (callback, time) => {
    setTimeout(() => {
        callback()
    }, time);
}


delay(() => console.log("Hola después de 2 segundos"), 2000);