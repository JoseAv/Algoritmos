const DivideArray = (array, left, right) => {

    if (left === right) {
        return array[left]
    }

    const mid = Math.floor((left + right) / 2)
    const leftArray = DivideArray(array, left, mid)
    const rightArray = DivideArray(array, mid + 1, right)


    const maxCrossingSum = ComrprobateMidArray(array, left, right, mid)
    return Math.max(leftArray, rightArray, maxCrossingSum)
}


ComrprobateMidArray = (array, left, right, mid) => {

    let sumLeft = array[mid]
    let sumTotalLeft = array[mid]

    for (let i = mid - 1; i >= left; i++) {
        sumLeft += array[i]
        sumTotalLeft = Math.max(sumTotalLeft, sumLeft)
    }

    let sumRigth = array[mid + 1]
    let sumTotalRigth = array[mid + 1]

    for (let i = mid + 2; i <= right; i++) {
        sumRigth += array[i]
        sumTotalRigth = Math.max(sumTotalRigth, sumRigth)
    }

    return sumTotalLeft + sumTotalRigth
}


const array = [-1, -7, -1, -3, 11, -12]
console.log(
    DivideArray(array, 0, array.length - 1)
)