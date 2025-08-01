const countElemets = (array) => {

    const count = {}

    for (let ele of array) {
        if (count[ele]) {
            count[ele] += 1
        } else {
            count[ele] = 1
        }
    }

    let condition = array.length / 2

    for (let [key, value] of Object.entries(count)) {
        if (value > condition)
            return +key
    }

}


console.log(
    countElemets([3, 2, 3])
)