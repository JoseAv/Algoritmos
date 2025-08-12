const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]


const Kadane = (array) => {

    console.log(array)
    let max_total = array[0]
    let max_current = array[0]

    for (let i = 1; i < array.length; i++) {

        // -2, -2+1:-1 -> -1
        // -3,(-1-3):-4 -> -1
        // 4, (-1 +4) -> 4
        // -1,(4-1)-> 3
        //2, (3+2)->5
        //1, (5+1)->6
        //-5, (6-5)->1
        //-5, (1+4)-> 5 

        // hay que verificar el mayor entre el numero actual y la suma del currect mas el numero actual y el mayor es el que se queda, entonces o empieza en un numero inice o continua
        max_current = Math.max(array[i], (max_current + array[i]))
        if (max_current > max_total) {
            max_total = max_current
            console.log(max_total)

        }
    }
    return max_total
}

console.log(Kadane(array))