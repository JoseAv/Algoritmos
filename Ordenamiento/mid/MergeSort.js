const MergeSort = (array) => {
    if (array.length <= 1) {
        return array
    }
    let div = Math.ceil(array.length / 2)
    const left = array.slice(0, div)
    const right = array.slice(div, array.length)
    const arrayLeft = MergeSort(left)
    const arrayRight = MergeSort(right)
    return MergeArray(arrayLeft, arrayRight)
}

const MergeArray = (left, right) => {
    const newArray = []

    while (left.length > 0 && right.length > 0) {
        if (left[0] > right[0]) {
            newArray.push(right[0])
            right.shift()
        } else {
            newArray.push(left[0])
            left.shift()
        }
    }
    while (left.length > 0) {
        newArray.push(left[0])
        left.shift()
    }
    while (right.length > 0) {
        newArray.push(right[0])
        right.shift()
    }
    return newArray
}




console.log(
    MergeSort([41, 48, 44, 4, 0, 29, 38, 46, 31, 13, 1, 2, 3, 4, 5, 12, 100, 13])
)
