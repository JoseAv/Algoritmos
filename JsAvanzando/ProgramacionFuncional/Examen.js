
// ? Ejercicio 1
const user = { name: "Ana", age: 30 };
// Tu código aquí:
const updatedUser = { ...user, age: 31, country: 'Spain' }
console.log(updatedUser)


// ? Ejercicio 2

const numbers = [1, 2, 3, 4, 5];
// Tu código aquí:
const evenNumbers = numbers.filter(n => n % 2 === 0)
console.log(evenNumbers);



// ? Ejercicio 3


const state = {
    user: {
        name: "Carlos",
        address: { city: "Madrid", country: "Spain" }
    }
};
// Tu código aquí (sin Immer):
const newState = { ...state, user: { ...state.user, address: { ...state.user.address } } }
console.log(newState);

// or

const newState2 = structuredClone(state)
console.log(newState2);

// ? Ejercicio 4

const addOne = (x) => x + 1;
const square = (x) => x * x;

// pipe debe devolver el resultado de aplicar addOne y luego square.
const pipe = (func1, func2) => (value) => func2(func1(value));

const result = pipe(addOne, square)(2); // Debe retornar 9 ( (2+1)² )

console.log(result);

// ? Ejercicio 5

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// Tu código aquí:
const fruitCount = fruits.reduce((acc, current) => {
    console.log(current)
    if (!acc[current]) {
        acc[current] = 1
    } else {
        acc[current] += 1
    }

    return acc
}, {})

console.log(fruitCount)
// Resultado esperado: { apple: 3, banana: 2, orange: 1 }