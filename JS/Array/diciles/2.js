const estudiantes = [
    { nombre: 'Ana', edad: 20, carrera: 'Ingeniería' },
    { nombre: 'Carlos', edad: 22, carrera: 'Medicina' },
    { nombre: 'María', edad: 19, carrera: 'Ingeniería' },
    { nombre: 'Luis', edad: 21, carrera: 'Medicina' },
    { nombre: 'Sofia', edad: 20, carrera: 'Arte' }
];


const NewEstudiantes = ({ estudiantes }) => {
    let ArrEstudiantes = {}

    for (let newOrder of estudiantes) {
        if (ArrEstudiantes[newOrder.carrera]) {
            ArrEstudiantes[newOrder.carrera].push(newOrder)
        } else {
            ArrEstudiantes[newOrder.carrera] = [newOrder]
        }

    }
    return ArrEstudiantes
}

console.log(NewEstudiantes({ estudiantes }));
