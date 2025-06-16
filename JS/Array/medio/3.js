const calificaciones = [85, 92, 78, 96, 87, 93];

let Promedio = calificaciones.reduce((acc, cur, index, arr) => {
    return index !== arr.length - 1 ? cur + acc : ((cur + acc) / arr.length)
}, 0)
console.log(Promedio);

let HighCalifation = calificaciones.reduce((acc, cur) => {
    return acc >= cur ? acc : cur
}, 0)

console.log(HighCalifation);


let mayoresPromedio = calificaciones.reduce((acc, cur) => {
    return cur >= 90 ? acc += 1 : acc
}, 0)

console.log(mayoresPromedio);
