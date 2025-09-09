-- Agregation FUNCTIONS
    
    -- Group BY

--1
select count(*) from estudiantes;

-- 2
select sum(cursos.costo), avg(costo), min(costo), max(costo) from cursos;

-- 3
select avg(estudiantes.promedio), min(promedio), max(promedio) from estudiantes;

--Group BY

--1
select carrera,count(*) from estudiantes
group by carrera;

--2
select avg(profesores.salario), profesores.departament from profesores
where departament is not null
group by departament;

--3
select count(*) ,nombre_curso from inscripciones
join cursos
    on cursos.codigo = inscripciones.curso_codigo
group by nombre_curso;

-- 4
select avg(promedio), carrera from estudiantes
where carrera is not null and promedio is not null
group by carrera;

--5
select count(*), nombre_curso from inscripciones
    join cursos
        on cursos.codigo = curso_codigo
    group by nombre_curso;

