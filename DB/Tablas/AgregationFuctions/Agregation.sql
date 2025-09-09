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

-- Agregation FUNCTIONS

    -- HAVING

--1
select count(*), carrera from estudiantes
group by carrera
having count(*) > 3;

--2
select count(*), departament, avg(salario) from profesores
group by departament
having  avg(salario)> 10000

--3
select count(*), nombre,estudiantes.id from inscripciones
    join estudiantes
            on estudiantes.id = estudiante_id
    group by  nombre, estudiantes.id
    having count(*) > 2;

--4
select avg(promedio), carrera from estudiantes
where carrera is not null
group by carrera
having  avg(promedio)>75
;

---5
select count(*), profesor_id from cursos
    group by profesor_id
    having count(*) >= 2;

select count(*), nombre,id from cursos
    join profesores
            on profesor_id = profesores.id
    group by nombre,id
    having count(*) >= 2;

-- Grouping sets

--1
select carrera,ciudad,count(*) from estudiantes
where ciudad is not null and carrera is not null
group by grouping sets ((carrera), (ciudad))

--2
select date_part('year',age(fecha_contratacion)) as contration, departament, avg(salario) from profesores
where fecha_contratacion is not null
group by grouping sets ((contration), (departament))
;

--3
select count(*),cursos.nombre_curso,estudiantes.nombre from inscripciones
    join cursos
        on cursos.codigo = inscripciones.curso_codigo
    join estudiantes
         on estudiantes.id = inscripciones.estudiante_id
group by grouping sets ((cursos.nombre_curso),(estudiantes.nombre));

-- WINDOWS FUNCTIONS

 -- Row Number, Rank, Dense Rank

--1
with major_estudents as (
    select  carrera,nombre,promedio,rank() over (partition by carrera order by promedio desc ) from estudiantes
        where promedio is not null and nombre is not null

)
select * from major_estudents;

--2
with enrollments_estudents as (
    select
        inscripciones.fecha_inscripcion,
        inscripciones.estudiante_id,
        row_number() over (partition by  inscripciones.estudiante_id order by estudiante_id desc )
        from inscripciones
)
select * from enrollments_estudents;

--3
with rank_professors as (
    select
        profesores.nombre,
        profesores.departament,
        profesores.salario,
        rank() over(partition by departament order by salario desc )
    from profesores
)
select * from rank_professors;

--4
with rank_estudents as (
    select
        nombre_curso,
        costo,
        dense_rank() over(order by costo desc )
    from cursos
)
select * from rank_estudents;


