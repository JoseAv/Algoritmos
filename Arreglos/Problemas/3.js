const avgArray = (array) => {
    // return array.reduce((acc,current,index)=>{
    //     let indexCurrent = index + 1
    //     return indexCurrent !== array.length ? acc + current : (acc + current) / indexCurrent
    // })

    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total / array.length
}

console.log(
    avgArray([10, 20, 30])
)