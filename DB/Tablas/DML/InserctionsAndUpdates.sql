--Insercion de Datos

--Insert Basico

insert into estudiantes
    (nombre, apellido, edad, carrera)
values('Roberto', 'Gonzales', 22, 'Arquitectura');

select * from  estudiantes where nombre = 'Roberto';

insert into profesores
    (nombre, apellido, departament, salario)
values('Ana', 'Morales', 'Física', 9500);

INSERT into cursos
    (codigo, nombre_curso, creditos, costo)
values(999, 'Diseño Gráfico', 3, 1200)

insert into estudiantes
    (nombre, apellido)
values('Carmen', 'Ruiz');

insert  into profesores
    (nombre, apellido, departament, salario)
values('Luis', 'Hernández', 'Química', 1200);

--Insert Multiple

INSERT into estudiantes
    (nombre, apellido, edad, carrera)
values
    ('Pedro', 'Sánchez', 19, 'Medicina'),
    ('Laura', 'Torres', 21, 'Derecho'),
    ('Diego', 'Vargas', 20, 'Psicología');

Insert into  cursos
    (codigo, nombre_curso)
values
    (801, 'Teologia'),
    (802, 'Fotball'),
    (803, 'Algoritm '),
    (804, 'Lenaguaje');

select * from inscripciones;

insert into inscripciones
    (estudiante_id, curso_codigo)
values
    (2, 101),
    (2, 102),
    (2, 103);

select * from cursos;


insert into cursos
    (codigo, profesor_id, costo)
values
    (150, 1, 1500),
    (151, 1, 1800),
    (153, 1, 2000);

insert into profesores
    (departament, salario)
values
    ('Matemáticas', 8500),
    ('Matemáticas', 9000),
    ('Matemáticas', 9500);

insert into estudiantes
    (carrera, ciudad)
values('Ingeniería Civil', 'Quetzaltenango'),
    ('Ingeniería Civil', 'Escuintla');


--Insert with subqueries

select id from profesores
order by profesores.salario desc
limit 1;

select * from cursos;

insert into cursos
    (codigo, profesor_id)
values(333, (
    select id from profesores
order by profesores.salario desc
limit 1)  );

select id from estudiantes
order by fecha_ingreso asc
limit 1;

select * from inscripciones;

insert into inscripciones
    (estudiante_id, curso_codigo)
values
    (
        (
            select id from estudiantes
            order by fecha_ingreso asc
            limit 1
    ),
    333
    );

select avg(salario) from profesores where departament = 'Matemáticas';

insert into profesores
    (nombre, apellido, salario)
values('Jose', 'Arana',
    (select avg(salario) from profesores where departament = 'Matemáticas')
            );


select * from estudiantes where carrera = 'Medicina' and promedio > 0
order by promedio desc
limit 1;

insert into estudiantes
    (nombre, apellido, promedio)
values
    ('Jose', 'Manuel', (
        select promedio from estudiantes where carrera = 'Medicina' and promedio > 0
order by promedio desc
limit 1
    )
)
;

select * from estudiantes;

select round(avg(costo), 2) from cursos;

insert into cursos
    (codigo, nombre_curso, costo)
values
    (309, 'Tipografia', (select round(avg(costo), 2) from cursos));

select * from cursos;

--4.14 on Conflict
select * from estudiantes;

insert into estudiantes
    (id, nombre, promedio)
values
    (30, 'Jose', 200)
    on conflict(id)
do update set ciudad = 'New City';

insert into cursos
    (codigo, nombre_curso)
values(301, 'Curso Extra')
    on conflict(codigo)
do update set costo = 300.300;

select * from cursos where codigo = 301;

--i don't have email in professors
select * from profesores;

select * from inscripciones;


--This query not working because conflic need a field unique or mix unique
insert into inscripciones
    (curso_codigo, estudiante_id)
values(1, 103)
    on conflict(curso_codigo, estudiante_id)
do update  set nota = 100;


select * from estudiantes;
insert into estudiantes
    (id, nombre)
values(1, 'jose')
on conflict(id)
do update set promedio = 60, carrera = 'Literatura';

insert into cursos
    (codigo, nombre_curso)
values(303, 'Socialismo II')
    on conflict(codigo)
do update set nombre_curso = 'Economia', creditos = 4;

select * from cursos;

