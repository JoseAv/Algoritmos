const celsius = [0, 10, 20, 30, 40];

const fahrenheit = celsius.map((ele) => Math.trunc(((ele * 9 / 5) + 32)))
console.log(fahrenheit);
