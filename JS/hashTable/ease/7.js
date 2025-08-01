const permutable = (text1, text2) => {
    if (text1.length !== text2.length)
        return 'NO valido'

    let count = {}
    for (let letter of text1) {
        if (count[letter]) {
            count[letter] += 1
        } else {
            count[letter] = 1
        }
    }

    for (let letter of text2) {
        if (count[letter]) {
            count[letter] -= 1
        } else {
            return false

        }
    }
    return true

}


console.log(permutable("aaabb", "aabbb"))