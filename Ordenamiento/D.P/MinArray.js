const minArray = (array, left, rigth) => {
    if (left === rigth) return array[left]

    const med = Math.trunc((left + rigth) / 2)
    let min_left = minArray(array, left, med);

    // esto es necesario por matematica entre izquierda mas se acerca a derecha
    // va a entrar en buble ya que no podra alcanzar al numero numero
    // (6+7)/2 -> 6.5 -> esto nunca sera 7 entonces no se cumple nuestro case base
    // y sera recursividad infinito
    let min_rigth = minArray(array, med + 1, rigth);
    if (min_left > min_rigth) {
        return min_rigth
    }
    return min_left
}


//left
// [4, 17, 44, 10, 30, 25, 6, 1] iz->0 rigth -> 7
// [4, 17, 44, 10]  iz -> 0 ,  rigth -> 3
// [4,17,44] iz -> 0 -> right -> 1
// [4,17] ->   0 === 0.5
// 4 , 17 ->

//right
// [4, 17, 44, 10, 30, 25, 6, 1]  iz: 0, rigth: 7
// [30,25,6,1] iz:3+1 ,r: 7  
// [25,6,1] iz:5+1 , r:7
// [6,1] ->iz:6+1:r:7
// [1] -> iz:7 & r:7 
//

const array = [4, 17, 44, -7, 0, 10, 30, 25, 6, 1]


console.log(minArray(array, 0, array.length - 1)) // 4