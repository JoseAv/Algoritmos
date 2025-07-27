const sumArray = (array) => {
    // return array.reduce((acc, current) => acc + current)
    let TotalArray = 0
    for (let i = 0; i < array.length; i++) {
        TotalArray += array[i]
    }
    return TotalArray
}

console.log(sumArray([1, 2, 3]))