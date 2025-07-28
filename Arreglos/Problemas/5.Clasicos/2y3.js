const duplicateArray = (array) => {
    let withoutDuplicate = {}
    for (let ele of array) {
        if (!withoutDuplicate[ele]) {
            withoutDuplicate[ele] = ele
        }
    }
    return Object.values(withoutDuplicate)
}

console.log(
    duplicateArray([1, 2, 2, 3])

)