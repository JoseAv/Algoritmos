const repeatCaracter = (text) => {
    let repeat = {}
    for (let letter of text) {
        if (!repeat[letter]) {
            repeat[letter] = 1
        } else {
            repeat[letter] += 1
        }
    }

    return Object.entries(repeat).reduce((acc, [key, value]) => {
        if (!acc && value === 1) {
            return { [key]: value }
        }
        return acc
    }, null)
}

console.log(
    repeatCaracter("acadbbcdae")
)