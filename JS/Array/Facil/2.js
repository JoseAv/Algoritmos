const frutas = ['banana', 'naranja', 'manzana', 'uva', 'kiwi'];

console.log(frutas.some((ele) => ele === 'manzana'));

let index = frutas.indexOf('manzana')
console.log(index);

console.log(frutas.find((ele) => ele === 'pina') === undefined ? false : true)




