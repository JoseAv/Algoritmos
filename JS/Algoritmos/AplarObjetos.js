const AplarArray = (obj, sufijo = '', newObjeto = {}) => {

    if (typeof obj !== 'object') return newObjeto[sufijo] = obj

    for (let [key, value] of Object.entries(obj)) {
        let newSufijo = sufijo === '' ? `${key}` : sufijo + `.${key}`
        AplarArray(value, newSufijo, newObjeto)
    }
    return newObjeto
}

const variable = { a: 1, b: { c: 2, d: { e: 3 } } }
console.log(AplarArray(variable));

// salida -> { a: 1, "b.c": 2, "b.d.e": 3 }

