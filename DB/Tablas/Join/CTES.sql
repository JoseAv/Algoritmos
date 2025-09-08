


-- CTES

--1
with performing as (
        select * from estudiantes where promedio > 80
)
select * from inscripciones
   join performing
    on performing.id = inscripciones.estudiante_id;

--2
with professors as (
    select * from profesores where date_part('year', fecha_contratacion) < 2021
)
select * from inscripciones
    join cursos
    on cursos.codigo = inscripciones.curso_codigo
    join professors
    on professors.id = cursos.profesor_id;
