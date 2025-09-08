-- Subqueris

--1
select nombre,apellido,id,promedio from estudiantes where promedio > (
select avg(promedio) from estudiantes);

--2
select avg(costo) from cursos;
select * from cursos;

select * from cursos where costo > (
select avg(costo) from cursos);

--3
select avg(profesores.salario) from profesores;

select * from profesores where salario > (
    select avg(profesores.salario) from profesores
    );

--4
select avg(edad) from estudiantes;

select * from estudiantes where edad > (
select avg(edad) from estudiantes
    );

--5
select avg(creditos) from cursos;

select * from cursos where creditos > (
select avg(creditos) from cursos
    );

--6
select avg(age(profesores.fecha_contratacion)) from profesores;

select * from profesores where age(fecha_contratacion) > (
select avg(age(profesores.fecha_contratacion)) from profesores
    );


-- EXISTS / NOT EXIST
--1
select * from estudiantes
where exists(
    select 1 from inscripciones
        where estudiante_id = estudiantes.id
);

--2
select *
from cursos
where not exists(select 1
                 from inscripciones
                 where curso_codigo = cursos.codigo);

--3

select *
from estudiantes
where not exists(select 1 from inscripciones where inscripciones.estudiante_id = estudiantes.id)

--4

select * from cursos
where exists(
select 1 from inscripciones
         where inscripciones.curso_codigo = curso_codigo
         and exists(
             select 1 from estudiantes
                      where inscripciones.estudiante_id = estudiantes.id
         )
);

--5
select * from profesores
where exists(
    select * from cursos
            where profesores.id = cursos.profesor_id
)


-- Any, All, Some

--1
select * from estudiantes
    where promedio > some (select promedio from profesores );
--2
select * from cursos
    where costo >= all (select costo from cursos)

--3
select * from profesores;
select * from profesores
    where salario > some(select salario from profesores where departament='Psicología')

--4

select * from estudiantes
where edad >= all (select edad from estudiantes where edad is not null)

--5

select * from cursos
where creditos > some(select creditos from cursos where profesor_id = 8 )