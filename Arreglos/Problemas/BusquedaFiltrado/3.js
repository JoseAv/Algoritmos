const evenArray = (array) => {
    let even = []

    for (let ele of array) {
        if (ele % 2 === 0) {
            even.push(ele)
        }

    }
    console.log(even)


}

evenArray([1, 2, 3, 4])