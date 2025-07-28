// const TrasMatrix = (array) => {
// // variable nuevo array
// let newArray = []
// // for de for 
//     for(let indexArray=0; indexArray<array.length; indexArray++){
//         let currentArray = array[indexArray]
//         for (let indexElement = 0; indexElement < currentArray.length; indexElement++){
//             if(!newArray[indexElement]){
//                 newArray[indexElement] = [currentArray[indexElement]]
//             }else{
//                 newArray[indexElement].push(currentArray[indexElement])
//             }

//         }
//     }

//     console.log(newArray)

// }

const TrasMatrix = (array, arrayFinal = []) => {
    // variable nuevo array
    for (let index = 0; index < array.length; index++) {
        if (Array.isArray(array[index])) {
            TrasMatrix(array[index], arrayFinal)
        } else {
            if (!arrayFinal[index]) {
                arrayFinal[index] = [array[index]]
            } else {
                arrayFinal[index].push(array[index])
            }
        }
    }
    return arrayFinal
}



console.log(
    TrasMatrix(
        [[1, 2], [3, 4]]
    )
)