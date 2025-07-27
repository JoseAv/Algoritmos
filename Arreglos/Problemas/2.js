const findArray = (array) => {
    // let total = array.reduce((acc,current)=>{
    //     if (acc.length <2){
    //     return [current,current]
    //     }
    //     let [min,max] = acc
    //     if(current > max){
    //         return [min, current]
    //     }
    //     if(current < min){
    //         return [current, max]
    //     }
    //     return acc
    // }, [])

    let totalArray = []

    for (let i = 0; i < array.length; i++) {
        let current = array[i]
        if (totalArray.length < 2) {
            totalArray = [current, current]
        }
        let [min, max] = totalArray
        if (current > max) {
            totalArray = [min, current]
        }
        if (current < min) {
            totalArray = [current, max]
        }
    }

    console.log(totalArray)
}

console.log(
    findArray([5, 2, 9, 1])
)