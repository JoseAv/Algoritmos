function fetchData() {
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
}


async function newFecthApi() {
    try {
        const response = await fetch('https://api.example.com/data')
        const data = response.json()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}