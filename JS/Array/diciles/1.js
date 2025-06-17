const numeros = [1, 2, 2, 3, 4, 4, 5, 1, 3, 6, 7, 7, 8];




const FilterNum = ({ numeros }) => {
    console.log(numeros)
    let newNumeros = numeros.reduce((acc, cur) => {
        if (!acc.includes(cur)) {
            acc.push(cur)
        }
        return acc
    }, [])
    console.log(newNumeros)
}

FilterNum({ numeros })
