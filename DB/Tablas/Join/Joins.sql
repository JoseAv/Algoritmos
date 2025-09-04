-- Join
--1
select i.id,es.nombre,i.fecha_inscripcion from estudiantes as es
join inscripciones as i
         on i.estudiante_id = es.id;

--2
select nombre from profesores as pr
join cursos as cu
    on pr.id = cu.profesor_id;

-- 3
select es.nombre,cr.nombre_curso, i.nota from inscripciones as i
join estudiantes as es
on es.id = i.estudiante_id
join cursos as cr
    on cr.codigo = i.curso_codigo;
;

-- 4
select pr.nombre from profesores as pr
join cursos as cr
    on cr.profesor_id = pr.id
;

--5
select nombre,cr.nombre_curso, fecha_inscripcion from estudiantes
    join inscripciones as ins
    on ins.estudiante_id = estudiantes.id
    join cursos as cr
        on cr.codigo = ins.curso_codigo;

-- 6

select profesores.nombre, cursos.nombre_curso, profesores.salario from cursos
join profesores
 on cursos.profesor_id = profesores.id;

-- 7

select estudiantes.nombre, cursos.nombre_curso, inscripciones.fecha_inscripcion from inscripciones
join estudiantes
    on estudiantes.id = inscripciones.estudiante_id
join cursos
    on cursos.codigo = inscripciones.curso_codigo;

-- Left/ Rigth Join

-- 1
select * from inscripciones where id=21;

select * from estudiantes where id not in (
    select estudiante_id from inscripciones
    );

select * from estudiantes
left join inscripciones
    on inscripciones.estudiante_id = estudiantes.id

--2
insert into cursos
    (codigo, nombre_curso, creditos, profesor_id, costo, fecha_inicio)
    values (321,'Arte',5,null,3000,now());

select * from profesores;

select * from cursos
left join profesores
    on cursos.profesor_id = profesores.id;

-- 3
select * from cursos
right join profesores
    on cursos.profesor_id = profesores.id;

--4
select nombre,fecha_inscripcion, nota from estudiantes
left join inscripciones
    on estudiantes.id = inscripciones.estudiante_id;

-- 5
with conteoCursos as (
    select
        curso_codigo,
        row_number() over (partition by curso_codigo)
    from inscripciones
)
select * from conteoCursos;


select * from cursos
left join inscripciones
    on cursos.codigo = inscripciones.curso_codigo
group by codigo, inscripciones.id;

