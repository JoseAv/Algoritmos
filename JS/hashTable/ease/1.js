const frecuencyObject = (value) => {
    let counted = {}
    for (let letter of value) {
        if (!counted[letter]) {
            counted[letter] = 1
        } else {
            counted[letter] += 1
        }
    }

    console.log(counted)

}


frecuencyObject("hello")