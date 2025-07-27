const duplicateArray = (array) => {
    let duplicate = []
    for (let ele of array) {
        duplicate.push(ele)
        duplicate.push(ele)
    }
    return duplicate
}


duplicateArray([1, 2, 3])