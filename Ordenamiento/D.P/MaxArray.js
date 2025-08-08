const array = [4, 17, 44, 10, 30, 25, 6]


const MaxArray = (array, iz, ri) => {

    if (iz === ri) {
        return array[iz]
    }

    let mitad = Math.floor(iz + ri) / 2

    let MaxIz = MaxArray(array, iz, mitad)
    let MaxRi = MaxArray(array, mitad + 1, ri)
    if (MaxIz < MaxRi) {
        return MaxRi
    } else {
        return MaxIz
    }


}


console.log(
    MaxArray(array, 0, array.length - 1)
)