const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let newArray = numeros.filter((ele) => ele % 2 === 0)
console.log(newArray);

let SevenArray = numeros.filter((ele) => ele > 7)
console.log(SevenArray);

let ImparArray = numeros.filter((ele) => (ele < 8 && ele % 2 !== 0))
console.log(ImparArray);



