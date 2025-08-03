const countWord = (text) => {

    let separete = text.replace(',', " ").split(" ").filter((ele) => ele.length > 0)

    let res = separete.reduce((acc, cur) => {
        let mayusLetter = cur.toUpperCase()
        if (!acc[mayusLetter] && mayusLetter.length > 0) {
            acc[mayusLetter] = 1
        } else {
            acc[mayusLetter] += 1
        }
        return acc
    }, {})

}
