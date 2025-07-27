const bubbleSort = (array = [3, 1, 4, 2]) => {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let pivot = array[j + 1]
                array[j + 1] = array[j]
                array[j] = pivot
            }
        }
    }

    console.log(array)
}

bubbleSort()