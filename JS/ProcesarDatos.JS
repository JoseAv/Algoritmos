const ProcesarDatos = (objDatos) => {
    let NewObjetos = {
        datosProcesados: [],
        errores: []
    }
    for (let obj of objDatos) {
        let { id, ...info } = obj
        let tienesErrores = false
        let ObjectoTemp = { id }
        for (let [campo, value] of Object.entries(info)) {
            let ComrobationInfo = ValidateInfo(value)
            if (ComrobationInfo.error) {
                NewObjetos.errores.push({ id, campo, error: ComrobationInfo.error })
                tienesErrores = true
            } else {
                ObjectoTemp[campo] = ComrobationInfo;
            }
        }
        if (!tienesErrores) {
            NewObjetos.datosProcesados.push(ObjectoTemp)
        }
    }
    return NewObjetos
}

const ValidateInfo = (value) => {
    if (typeof value === 'number') {
        return value > 0 ? value * 2 : { error: 'Numero negativo' }
    } else if (typeof value === 'string') {
        return value.length > 0 ? value.toLowerCase() : { error: 'String Vacio' }
    } else if (Array.isArray(value)) {
        return ComprobateArray(value)
    }
    return { error: 'Campo Desconocido o no requerido' }
}

const ComprobateArray = (value) => {
    let NewValue = value.reduce((acc, current) => {
        return typeof current === 'number' ? acc === -1 ? current : acc + current : acc
    }, -1)
    return NewValue !== -1 ? NewValue : { error: 'Array Vacio o sin datos validos' }
}


const datos = [
    { id: 1, scores: [3, "5", true] },  // Válido → suma: 3
    { id: 2, edad: 25, scores: ["hola"] }          // Inválido → error
];



console.log(ProcesarDatos(datos));
