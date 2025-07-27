const powArray = (array) => {
    let newArray = []

    for (let ele of array) {
        newArray.push(ele * ele)
    }
    console.log(newArray)
}

powArray([1, 2, 3])