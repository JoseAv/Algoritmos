const findRepeatArray = (array) => {

    let count = {}
    for (let number of array) {
        if (!count[number]) {
            count[number] = 1
        } else {
            count[number] += 1
        }
    }

    for (let [key, value] of Object.entries(count)) {
        if (value === 1) {
            return key
        }
    }
}


console.log(findRepeatArray([4, 1, 2, 1, 2]))