








const A = [1, 2, 3, 4, 5, 6, 7]

const RotateArray = (array, k, m) => {
    if (m === 0 || k < 0)
        return array

    //Subtraer la parte del arreglo
    const [subArray, InitialArray] = getSubArray(array, k)

    // girar izquierda o derecha
    let RotateSubArray = null
    if (m > 0) {
        RotateSubArray = RotateRight([...subArray], m)
    } else {
        RotateSubArray = RotateLeft([...subArray], m)
    }

    // concatenar el resultado

    return concatArray(InitialArray, RotateSubArray)

}


const RotateRight = (subArray, m) => {
    if (m === 0) {
        return subArray
    }
    const lastElement = subArray.pop()
    subArray.unshift(lastElement)
    return RotateRight(subArray, (m - 1))
}

const RotateLeft = (subArray, m) => {
    if (m === 0) {
        return subArray
    }
    const firsElement = subArray.shift()
    subArray.push(firsElement)
    return RotateLeft(subArray, (m + 1))
}


const getSubArray = (array, k) => {
    let subArray = []
    let InitialArray = []
    for (let i = k; i < array.length; i++) {
        subArray.push(array[i])
    }
    for (let i = 0; i < k; i++) {
        InitialArray.push(array[i])
    }
    return [subArray, InitialArray]
}



const concatArray = (arr1, arr2) => {
    let newArray = []
    for (let element of arr1) {
        newArray.push(element)
    }
    for (let element of arr2) {
        newArray.push(element)
    }
    return newArray
}

console.log(RotateArray(A, 2, 3))


