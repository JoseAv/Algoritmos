const sumArray = (array, target) => {
    const rest = {}
    for (let number in array) {
        rest[number] = target - array[number]
    }

    for (let [key, value] of Object.entries(rest)) {
        let index = array.indexOf(+value)
        if (index > 0) {
            return [+key, index]
        }
    }
}

console.log(
    sumArray([2, 7, 1, 8], 9)
)