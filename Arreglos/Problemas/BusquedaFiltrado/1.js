const findCondition = (array, numtoFind) => {
    let total = 0

    for (let ele of array) {
        if (ele > numtoFind) {
            total += 1
        }
    }

    return total

}
console.log(
    findCondition([1, 5, 3, 7], 4)
)