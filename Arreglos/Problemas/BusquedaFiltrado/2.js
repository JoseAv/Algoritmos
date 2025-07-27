const findElement = (array, element) => {

    for (let ele of array) {
        if (ele === element) {
            return true
        }
    }
    return false

}

console.log(findElement(["a", "b", "c"], ""));
