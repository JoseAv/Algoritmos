const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let num1 = numeros.slice(2, 6)
console.log(num1);

let num2 = [...numeros].splice(-3)
console.log(num2);

let num3 = [...numeros].splice(0, 4)
console.log(num3);


console.log(numeros);



