const frecuencyArray = (array) => {
    return array.reduce((acc, current) => {
        if (!acc[current]) {
            acc[current] = 1
            return acc
        }
        acc[current] += 1
        return acc

    }, {})
}

console.log(
    frecuencyArray(["a", "b", "a", "C"])
);
