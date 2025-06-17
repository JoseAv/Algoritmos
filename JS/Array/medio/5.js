const palabras = ['javascript', 'python', 'java', 'html', 'css', 'react', 'node'];

const filterMoreFourLetters = ({ palabras }) => {
    return palabras.filter((ele) => ele.length >= 4)
}

const UpperCaseLetters = ({ palabras }) => {
    return palabras.map((ele) => ele.toUpperCase())
}





console.log(filterMoreFourLetters({ palabras }));
console.log(UpperCaseLetters({ palabras }))

