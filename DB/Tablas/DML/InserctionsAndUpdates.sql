-- Insercion de Datos

-- Insert Basico

insert into estudiantes
    (nombre,apellido,edad,carrera)
    values ('Roberto','Gonzales',22,'Arquitectura');

select * from  estudiantes where nombre = 'Roberto';

insert into profesores
    (nombre, apellido, departament, salario)
    values ('Ana','Morales','Física', 9500);

INSERT into cursos
    (codigo, nombre_curso,creditos,costo)
    values (999,'Diseño Gráfico',3,1200);

insert into estudiantes
    (nombre,apellido)
    values ('Carmen','Ruiz');

insert  into profesores
    (nombre,apellido,departament,salario)
    values ('Luis','Hernández','Química',1200);

-- Insert Multiple

INSERT into estudiantes
    (nombre,apellido,edad,carrera)
    values
        ('Pedro','Sánchez',19,'Medicina'),
        ('Laura','Torres',21,'Derecho'),
        ('Diego','Vargas',20,'Psicología');

Insert into  cursos
    (codigo, nombre_curso)
    values
        (801,'Teologia'),
        (802,'Fotball'),
        (803,'Algoritm '),
        (804,'Lenaguaje');

select * from inscripciones;

insert into inscripciones
 (estudiante_id,curso_codigo)
    values
        (2,101),
        (2,102),
        (2,103);

select * from cursos;


insert into cursos
    ( codigo,profesor_id , costo)
    values
    (150,1,1500),
    (151,1,1800),
    (153,1,2000);

insert into profesores
  (departament, salario)
  values
    ('Matemáticas', 8500),
    ('Matemáticas', 9000),
    ('Matemáticas', 9500);

insert into estudiantes
    (carrera,ciudad)
    values ('Ingeniería Civil','Quetzaltenango'),
     ('Ingeniería Civil','Escuintla');


-- Insert with subqueries

select id from profesores
order by profesores.salario desc
limit 1;

select * from cursos;

insert into cursos
    (codigo,profesor_id)
    values (333, (
        select id from profesores
order by profesores.salario desc
limit 1)  );

select id from estudiantes
order by fecha_ingreso asc
limit 1;

select * from inscripciones;

insert into inscripciones
    (estudiante_id,curso_codigo)
    values
    (
       (
           select id from estudiantes
            order by fecha_ingreso asc
            limit 1
       ),
    333
    );

select avg(salario) from profesores where departament='Matemáticas';

insert into profesores
    (nombre,apellido,salario)
    values ('Jose', 'Arana',
                (select avg(salario) from profesores where departament='Matemáticas')
            );


select * from estudiantes where carrera='Medicina' and promedio > 0
order by promedio desc
limit 1;

insert into estudiantes
    (nombre,apellido,promedio)
values
('Jose', 'Manuel', (
select promedio from estudiantes where carrera='Medicina' and promedio > 0
order by promedio desc
limit 1
    )
)
;

select * from estudiantes;

select round(avg(costo),2) from cursos;

insert into cursos
    (codigo,nombre_curso,costo)
values
(309,'Tipografia', (select round(avg(costo),2) from cursos));

select * from cursos;

-- 4.14 on Conflict
select * from estudiantes;

insert into estudiantes
    (id,nombre,promedio)
    values
    (30,'Jose', 200)
    on conflict (id)
    do update set ciudad='New City';

insert into cursos
    (codigo,nombre_curso)
    values (301,'Curso Extra')
    on conflict (codigo)
    do update set costo=300.300;

select * from cursos where codigo = 301;

-- i don't have email in professors
select * from profesores;

select * from inscripciones;


-- This query not working because conflic need a field unique or mix unique
insert into inscripciones
    (curso_codigo,estudiante_id)
    values (1,103)
    on conflict (curso_codigo,estudiante_id)
    do update  set nota=100;


select * from estudiantes;
insert into estudiantes
    (id,nombre)
values (1,'jose')
on conflict (id)
do update set promedio=60, carrera='Literatura';

insert into cursos
    (codigo,nombre_curso)
    values (303,'Socialismo II')
    on conflict(codigo)
    do update set nombre_curso='Economia',creditos=4;

select * from cursos;

-- $>@ DATA IPDATES

select * from profesores;

update  profesores
set salario = salario + 500;

select * from inscripciones;

update inscripciones
set id=85.5 where id = 1;


select * from estudiantes where id=3;
update estudiantes
set carrera='Ingeniería Industrial' where id=3;

select * from cursos where creditos=4;

update cursos
set costo = costo+200 where creditos=4;

select * from profesores where id=2;
update profesores
set departament='Administración' where id = 2;

select * from estudiantes where edad=23;
update estudiantes
set promedio=75 where edad=23;

-- Update With Subqueries

select profesor_id  from cursos
where profesor_id is not null
group by  profesor_id
order by count(*) desc
limit 1;

update profesores
set salario = salario + 1000 where id = (
select profesor_id  from cursos
where profesor_id is not null
group by  profesor_id
order by count(*) desc
limit 1);

select * from profesores where id=1;


select * from estudiantes;

select avg(nota) from inscripciones where estudiante_id =7;


select estudiante_id, count(*) as conteo from inscripciones
group by estudiante_id
order by  count(*) desc;


select * from estudiantes where id=22;

update estudiantes
set promedio = (
        select avg(nota)
         from inscripciones
         where estudiante_id = (select estudiante_id
                from inscripciones
                group by estudiante_id
                order by count(*) desc
                limit 1)
     )
where id = (
select estudiante_id from inscripciones
group by estudiante_id
order by  count(*) desc
limit 1
);


select curso_codigo, count(*) as total from inscripciones
    group by curso_codigo
    order by count(*) asc
    limit   1;

select * from cursos where codigo=604;

update cursos
set costo = costo-300
where codigo = (
    select curso_codigo from inscripciones
    group by curso_codigo
    order by count(*) asc
    limit   1
    );

select estudiante_id, min(nota) from inscripciones
    where nota is not null
    group by estudiante_id
    order by min(nota);



update inscripciones
set nota = 70
where estudiante_id = (
select estudiante_id from inscripciones
    where nota is not null
    group by estudiante_id
    order by min(nota)
    limit 1
    );

select   departament from profesores
    where fecha_contratacion is not null
    group by  departament;