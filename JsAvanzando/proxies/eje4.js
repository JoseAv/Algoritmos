function TrackedObject(initialObj) {
    // Almacenar el historial de cada propiedad
    this._history = {};

    // Inicializar el historial para cada propiedad del objeto inicial
    for (const key in initialObj) {
        this._history[key] = []; // Guarda el valor inicial
    }

    // Crear el Proxy
    const proxy = new Proxy(initialObj, {
        set: (target, prop, value) => {
            // Guardar el valor anterior en el historial
            if (!this._history[prop]) {
                this._history[prop] = [...(target[prop] !== undefined ? [target[prop]] : [])];
            } else {
                this._history[prop].push(target[prop]);
            }

            // Asignar el nuevo valor
            target[prop] = value;
            return true;
        }
    });

    // Añadir acceso al historial desde el Proxy
    proxy._history = this._history;
    return proxy;
}

const obj = new TrackedObject({ count: 0 });
obj.count = 1;
obj.count = 2;

console.log(obj._history.count); // [0, 1] (historial previo)
console.log(obj.count); // 2 (valor actual)