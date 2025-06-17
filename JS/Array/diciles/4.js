const empleados = [
    { nombre: 'Juan', salario: 3000, antiguedad: 5 },
    { nombre: 'María', salario: 3500, antiguedad: 3 },
    { nombre: 'Pedro', salario: 2800, antiguedad: 7 },
    { nombre: 'Ana', salario: 4000, antiguedad: 2 }
];


const orderEmployees = ({ empleados }) => {
    return empleados.sort((a, b) => {

        return b.salario - a.salario
    })

}

const orderEmployeesOld = ({ empleados }) => {
    return empleados.sort((a, b) => {
        return b.antiguedad - a.antiguedad
    })

}

const orderEmployeesPrices = ({ empleados }) => {
    return empleados.filter((ele) => ele.salario > 3000).sort((a, b) => a.nombre.localeCompare(b.nombre))

}
console.log(orderEmployeesPrices({ empleados }));
console.log('OLD', orderEmployeesOld({ empleados }));
console.log(orderEmployees({ empleados }));
