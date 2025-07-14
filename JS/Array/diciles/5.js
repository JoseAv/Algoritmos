const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let newMatriz = matriz.flatMap((ele) => ele)
let VAlor = newMatriz.reduce((acc, cur) => acc + cur, 0)
let Mayor = newMatriz.reduce((acc, cur) => cur > acc ? cur : acc, 0)
console.log(newMatriz);

const Traspuestas = ({ matriz }) => {
    let newMatriz = []
    for (let elementes of matriz) {
        for (let numbers in elementes) {
            if (!newMatriz[numbers]) {
                newMatriz[numbers] = [elementes[numbers]]
            } else {
                newMatriz[numbers].push(elementes[numbers])
            }
        }
    }
    console.log(newMatriz);
}

Traspuestas({ matriz })


