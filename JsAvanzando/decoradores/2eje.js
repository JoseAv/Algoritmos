const delay = (time) => {  // primero se recibe el argumento
    return (fun) => {      // Se retorna la funcion del cual el delay envuelve
        return function (...args) { // se retorna una nueca que es la que se ejecutara cuando se llame el metodo
            setTimeout(() => {
                fun(...args);
            }, time);
        };
    };
};

class MyClass {
    @delay(10)
    countNumber() {
        for (let index = 0; index < 200; index++) {
            index++;
        }
        console.log("Función ejecutada después del delay");
    }
}
