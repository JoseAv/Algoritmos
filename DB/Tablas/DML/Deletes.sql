-- DATA DELECTION
    -- Basic Delete

-- 1
select * from estudiantes where promedio < 60;
delete from estudiantes where promedio<60;

--2
select curso_codigo,fecha_inscripcion from inscripciones where curso_codigo=201;

select curso_codigo, count(*) as totalIncripciones from inscripciones
group by curso_codigo
having count(*) < 2;


BEGIN;
delete from inscripciones where curso_codigo in (
select curso_codigo from inscripciones
group by curso_codigo
having count(*) < 2
    );

delete from cursos where codigo not in (
select distinct curso_codigo from inscripciones
    );
Commit;
ROLLBACK ;

select distinct curso_codigo from inscripciones;

--3

delete from cursos where profesor_id is null;

--4
delete from estudiantes where ciudad = 'Antigua';

--5
-- id: 2,22
select * from profesores where salario < 7000;

select codigo from cursos where profesor_id in (
select id from profesores where salario < 7000
);
begin;

delete from inscripciones where curso_codigo in (
select codigo from cursos where profesor_id in (
select id from profesores where salario < 7000
) );

delete from cursos where profesor_id in (
select id from profesores where salario < 7000
);

delete from profesores where salario < 7000;
commit;
rollback;

-- 48

select * from cursos where costo>2300;

select * from cursos where costo>2300;
select * from inscripciones where curso_codigo in (
select codigo from cursos where costo>2300
    );

begin ;
delete from inscripciones where curso_codigo in (
select codigo from cursos where costo>2300
    );

delete from cursos where costo>2300;
commit ;


-- 49
select * from inscripciones where extract(year from age(fecha_inscripcion)) > 2;

-- 50


select * from inscripciones where extract(MONTH from age(fecha_inscripcion)) > 4;

select * from cursos where codigo not in (
select curso_codigo from inscripciones where extract(MONTH from age(fecha_inscripcion)) <= 4);

Begin;
delete from inscripciones where curso_codigo in (
select codigo from cursos where codigo not in (
select curso_codigo from inscripciones where extract(MONTH from age(fecha_inscripcion)) <= 4)
);

delete from cursos where codigo not in ( select inscripciones.curso_codigo from inscripciones);

commit;
rollback;



-- Ejercicios Finales

insert into estudiantes
    (nombre, apellido, edad, carrera, fecha_ingreso, ciudad, promedio)
    values ('Jose','Arana', 20,'Doctor',now(),'Guatemala',80)

select * from cursos;

insert into inscripciones
    (estudiante_id, curso_codigo, nota, fecha_inscripcion)
    values
        (31, 503,80,now()),
        (31, 603,81,now()),
        (31, 104,82,now())



select concat(upper(nombre),' ',(upper(apellido))) from estudiantes;



