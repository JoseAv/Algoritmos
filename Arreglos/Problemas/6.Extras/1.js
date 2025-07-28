// const rotateArray = (array, k) => {
//     if(k <=0){
//         return array
//     }
//     for(let i=0;i< array.length -1 ;i++){
//         let save = array[i + 1]
//         array[i + 1] = array[i]
//         array[i] = save
//     }
//     k--
//     return rotateArray(array,k)
// }

const rotateArray = (Array, k) => {
    for (let i = 0; i < k; i++) {
        let end = Array.shift()
        Array.push(end)
    }
    return Array
}

console.log(
    rotateArray([1, 2, 3, 4], 1)
)