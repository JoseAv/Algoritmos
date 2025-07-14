const testJS = { age: 3, email: 'jose@' }

const handelProxy = {
    // obj: El objeto completo
    // prop valor que se esta accediendo
    // valor que se mando
    //set: porque estamos modificando el arreglo
    set(obj, prop, value) {
        if (!Object.keys(obj).includes(prop)) {
            throw new Error('No se puede asignar esta propiedad')
        }

        if (prop === 'age') {
            return value > 0 ? obj[prop] = value : obj
        }

        if (prop === 'email') {
            return value.includes('@') ? obj[prop] = value : obj
        }

        return obj
    }

}

const proxyTest = new Proxy(testJS, handelProxy)
proxyTest.cel = 10
proxyTest.age = 10
proxyTest.email = 'nuevoJose@'

console.log(proxyTest);

