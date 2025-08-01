const sameSubArray = (array, array2) => {
    const repeat = {}

    for (let number of array) {
        if (!repeat[number]) {
            for (let numberArray2 of array2) {
                if (number === numberArray2) {
                    repeat[number] = number
                }
            }
        }
    }
    return Object.values(repeat)
}


console.log(sameSubArray([1, 2, 3], [2, 3, 4]))