console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');

// Horden de salida

console.log('A'); // -> Esto es una tarea de call stack tiene prioridad codigo de JS
console.log('D'); // -> Igual que la primera pero si importa el orden y esta es la segunda
console.log('C'); // -> Esto es una microTarea entonces espera a que callback este vacio para ejecutarse
console.log('B'); // -> Esto es una MacroTarea es la ultima en prioridad en ejecutarse


