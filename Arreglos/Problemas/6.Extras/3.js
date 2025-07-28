const sumDiagonal = (array) => {
    let principal = 0
    let secundaria = 0
    let reverseIndex = array.length - 1
    for (let i = 0; i < array.length; i++) {
        principal += array[i][i]
        secundaria += array[reverseIndex][i]
        reverseIndex--
    }
}


sumDiagonal(
    [
        [1, 2, 1], //index 0,2
        [4, 1, 6], // index 1,1
        [1, 8, 2] // index 3,0
    ]

)