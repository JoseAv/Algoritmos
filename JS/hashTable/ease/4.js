const anagramas = (text1, text2) => {

    if (text1.length !== text2.length)
        return false


    let count = text1.length - 1
    for (let pal of text1) {
        if (pal !== text2[count]) {
            return false
        }
        count--

    }

    return true

}


console.log(anagramas('rma', "amr"))