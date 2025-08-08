const MultDiv = (num, elevate) => {
    if (elevate <= 1) {
        return num
    }

    if (elevate % 2 === 0) {
        const result = MultDiv(num, (elevate / 2))
        return result * result
    }

    return num * MultDiv(num, elevate - 1)

}

// 8 ^ 8 -> (8 ^ 4) ^ 2 -> (8 ^ 2) ^ 2 -> (8 ^ 1)^2

// 8 * 8 ^ (7 - 1) -> 8 ^ 6 -> (8 ^ 3) ^ 2 -> 8 * 8 ^ (3 - 1) -> (8 ^ 1)^2 
console.log(
    MultDiv(4, 3)
)