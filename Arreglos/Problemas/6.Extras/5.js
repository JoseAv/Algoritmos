const palindromoArray = (array) => {
    let palindromo = true
    let indexReverse = array.length - 1
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[indexReverse]) {
            palindromo = false
        }
        indexReverse--
    }
    return palindromo
}


console.log(
    palindromoArray(
        [3, 1, 2, 2, 1, 3]
    )
)