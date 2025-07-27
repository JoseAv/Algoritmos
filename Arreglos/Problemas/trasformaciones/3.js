const concatArray = (arr1, arr2) => {
    let newArray = []

    for (let ele of arr1) {
        newArray.push(ele)
    }
    for (let ele of arr2) {
        newArray.push(ele)
    }
    console.log(newArray)
}


concatArray([1, 2], [3, 4])