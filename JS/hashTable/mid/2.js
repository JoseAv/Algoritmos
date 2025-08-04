const order = (array) => {
    let orderArray = {}
    for (let orderLetters of array) {
        let result = orderLetters.split('').sort((a, b) => a.localeCompare(b)).join('')
        if (!orderArray[result]) {
            orderArray[result] = [orderLetters]
        } else {
            orderArray[result].push(orderLetters)
        }
    }
    return Object.values(orderArray)
}

console.log(order(["eat", "tea", "tan", "ate", "nat", "bat"]))