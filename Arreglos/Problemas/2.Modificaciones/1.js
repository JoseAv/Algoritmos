const reverseArray = (array) => {
    let reverse = []
    for (let ele of array) {
        reverse.unshift(ele)
    }

    return array.reduce((acc, curren) => {
        acc.unshift(curren)
        return acc
    }, [])

}

reverseArray([1, 2, 3])