const MergeSort = (array) => {
    if (array.length <= 1) {
        return array
    }
    let div = Math.ceil(array.length / 2)
    const left = array.slice(0, div)
    const right = array.slice(div, array.length)
    const arrayLeft = MergeSort(left)
    const arrayRigth = MergeSort(right)
    return MergeArray(arrayLeft, arrayRigth)
}

const MergeArray = (left, rigth) => {
    const newArray = []

    while (left.length > 0 && rigth.length > 0) {
        if (left[0] > rigth[0]) {
            newArray.push(rigth[0])
            rigth.shift()
        } else {
            newArray.push(left[0])
            left.shift()
        }
    }

    while (left.length > 0) {
        newArray.push(left[0])
        left.shift()
    }
    while (rigth.length > 0) {
        newArray.push(rigth[0])
        rigth.shift()
    }
    return newArray
}



console.log(
    MergeSort([41, 48, 44, 4, 0, 29, 38, 46, 31, 13, 1, 2, 3, 4, 5, 12, 100, 13])
)
