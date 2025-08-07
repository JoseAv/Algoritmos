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
    let indexLeft = 0
    let indexRigth = 0

    while (indexLeft <= left.length - 1 && indexRigth <= rigth.length - 1) {
        if (left[indexLeft] > rigth[indexRigth]) {
            newArray.push(rigth[indexRigth])
            indexRigth++
        } else {
            newArray.push(left[indexLeft])
            indexLeft++
        }
    }

    while (indexLeft <= left.length - 1) {
        newArray.push(left[indexLeft])
        indexLeft++
    }
    while (indexRigth <= rigth.length - 1) {
        newArray.push(rigth[indexRigth])
        indexRigth++
    }
    return newArray
}



console.log(
    MergeSort([41, 48, 44, 4, 0, 29, 38, 46, 31, 13, 1, 2, 3, 4, 5, 12, 100, 13])
    // MergeSort([41, 48, 44])

)
