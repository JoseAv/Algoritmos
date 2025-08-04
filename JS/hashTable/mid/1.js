const subArray = (array) => {
    let total = 0         // 0
    const saveResult = {} // {}
    let init, end = null  // null

    for (let i = 0; i < array.length; i++) {
        total += array[i] //4 +2 = 6 + (-3) +1 +6
        if (saveResult[total] === undefined) {
            saveResult[total] = i
        } else {
            init = saveResult[total] + 1
            end = i
        }
    }
    console.log(saveResult)


    return array.slice(init, end + 1)
}

console.log(
    subArray([1, 4, 2, -3, 1, 6])
)
