CREATE TABLE estudiantes(
    id serial primary key,
    nombre varchar(100),
    apellido varchar(100),
    edad int2,
    carrera varchar(200),
    fecha_ingreso date,
    ciudad varchar(100),
    promedio decimal(3,2)
);

CREATE  Table  profesores(
  id serial primary key,
  nombre varchar(100),
  apellido varchar(100),
  departament varchar(100),
  salario int4,
  fecha_contratacion date,
  promedio decimal(3,2)
);


create table cursos(
    codigo int4 primary key,
    nombre_curso varchar(150),
    creditos int2,
    profesor_id int,
    costo decimal(10,2),
    fecha_inicio date
);

Create table iscripciones(
    id serial primary key,
    estudiante_id int,
    curso_codigo int,
    nota decimal(5,2),
    fecha_inscripcion date
);

insert into  estudiantes
    (nombre,apellido,edad,carrera,fecha_ingreso,ciudad,promedio)
    values('Alejandra','Arauz',20,'Ingenieria',now(), 'Guatemala', 20.00);


DO $$
DECLARE
    nombres TEXT[] := ARRAY['Ana', 'Carlos', 'María', 'José', 'Lucía', 'Diego', 'Sofía', 'Miguel', 'Valentina', 'Andrés',
                           'Isabella', 'Sebastián', 'Camila', 'Alejandro', 'Natalia', 'Ricardo', 'Gabriela', 'Fernando', 'Andrea', 'Mateo'];
    apellidos TEXT[] := ARRAY['García', 'Rodríguez', 'López', 'Martínez', 'González', 'Pérez', 'Sánchez', 'Ramírez',
                             'Cruz', 'Flores', 'Morales', 'Jiménez', 'Hernández', 'Vargas', 'Castro', 'Ortiz', 'Ruiz', 'Álvarez', 'Torres', 'Mendoza'];
    carreras TEXT[] := ARRAY['Ingeniería', 'Medicina', 'Derecho', 'Administración', 'Psicología', 'Arquitectura'];
    ciudades TEXT[] := ARRAY['Guatemala', 'Quetzaltenango', 'Escuintla', 'Mixco', 'Villa Nueva', 'Petén'];
    i INTEGER;
BEGIN
    FOR i IN 1..20 LOOP
        INSERT INTO estudiantes (nombre, apellido, edad, carrera, fecha_ingreso, ciudad, promedio)
        VALUES (
            nombres[i],
            apellidos[i],
            18 + (i % 10), -- Edades entre 18 y 27
            carreras[1 + (i % 6)], -- Rota entre las 6 carreras
            now() - INTERVAL '1 day' * (i * 10), -- Fechas escalonadas hacia atrás
            ciudades[1 + (i % 6)], -- Rota entre las 6 ciudades
            50.00 + (i * 2.5) -- Promedios entre 52.5 y 100
        );
    END LOOP;
END $$;


-- TABLA CURSOS (25 cursos)
INSERT INTO cursos (codigo, nombre_curso, creditos, profesor_id, costo, fecha_inicio)
VALUES
    (101, 'Cálculo I', 4, 1, 1500.00, '2024-01-15'),
    (102, 'Programación I', 5, 1, 1800.00, '2024-01-15'),
    (103, 'Física I', 4, 2, 1600.00, '2024-01-22'),
    (201, 'Anatomía Humana', 6, 2, 2200.00, '2024-02-01'),
    (202, 'Bioquímica', 4, 3, 1900.00, '2024-02-01'),
    (203, 'Fisiología', 5, 3, 2000.00, '2024-02-15'),
    (301, 'Derecho Civil', 4, 4, 1700.00, '2024-03-01'),
    (302, 'Derecho Penal', 4, 4, 1750.00, '2024-03-01'),
    (303, 'Derecho Constitucional', 3, 5, 1650.00, '2024-03-15'),
    (401, 'Contabilidad I', 4, 5, 1400.00, '2024-04-01'),
    (402, 'Administración General', 3, 6, 1300.00, '2024-04-01'),
    (403, 'Marketing', 4, 6, 1500.00, '2024-04-15'),
    (501, 'Psicología General', 4, 7, 1600.00, '2024-05-01'),
    (502, 'Psicología del Desarrollo', 3, 7, 1550.00, '2024-05-01'),
    (503, 'Neuropsicología', 5, 8, 1800.00, '2024-05-15'),
    (601, 'Dibujo Arquitectónico', 4, 8, 1700.00, '2024-06-01'),
    (602, 'Historia de la Arquitectura', 3, 9, 1450.00, '2024-06-01'),
    (603, 'Diseño Estructural', 5, 9, 2000.00, '2024-06-15'),
    (104, 'Cálculo II', 4, 10, 1550.00, '2024-07-01'),
    (105, 'Programación II', 5, 10, 1850.00, '2024-07-01'),
    (204, 'Microbiología', 4, 11, 1950.00, '2024-07-15'),
    (304, 'Derecho Laboral', 3, 11, 1600.00, '2024-08-01'),
    (404, 'Finanzas', 4, 12, 1650.00, '2024-08-01'),
    (504, 'Psicología Social', 3, 12, 1500.00, '2024-08-15'),
    (604, 'Urbanismo', 4, 13, 1800.00, '2024-09-01');


-- TABLA PROFESORES (20 registros)
INSERT INTO profesores (nombre, apellido, departament, salario, fecha_contratacion, promedio)
SELECT
    CASE (gs % 10) + 1
        WHEN 1 THEN 'Roberto' WHEN 2 THEN 'Carmen' WHEN 3 THEN 'Eduardo'
        WHEN 4 THEN 'Patricia' WHEN 5 THEN 'Manuel' WHEN 6 THEN 'Gloria'
        WHEN 7 THEN 'Álvaro' WHEN 8 THEN 'Rosa' WHEN 9 THEN 'Francisco'
        ELSE 'Elena'
    END as nombre,
    CASE (gs % 10) + 1
        WHEN 1 THEN 'Morales' WHEN 2 THEN 'Castillo' WHEN 3 THEN 'Herrera'
        WHEN 4 THEN 'Aguilar' WHEN 5 THEN 'Vásquez' WHEN 6 THEN 'Méndez'
        WHEN 7 THEN 'Campos' WHEN 8 THEN 'Reyes' WHEN 9 THEN 'Solano'
        ELSE 'Chávez'
    END as apellido,
    CASE (gs % 6) + 1
        WHEN 1 THEN 'Ingeniería' WHEN 2 THEN 'Ciencias Médicas'
        WHEN 3 THEN 'Ciencias Jurídicas' WHEN 4 THEN 'Administración'
        WHEN 5 THEN 'Psicología' ELSE 'Arquitectura'
    END as departament,
    8000 + (gs * 500) as salario, -- Salarios entre 8,500 y 18,000
    '2020-01-01'::date + INTERVAL '1 month' * gs as fecha_contratacion,
    4.20 + (gs * 0.04) as promedio -- Promedios entre 4.24 y 5.00
FROM generate_series(1, 20) as gs;



DO $$
DECLARE
    estudiante_actual INTEGER;
    curso_codigo_array INTEGER[] := ARRAY[101,102,103,201,202,203,301,302,303,401,402,403,501,502,503,601,602,603,104,105,204,304,404,504,604];
    total_estudiantes INTEGER := 20;
    inscripciones_por_estudiante INTEGER;
    curso_seleccionado INTEGER;
    i INTEGER;
    j INTEGER;
BEGIN
    -- Para cada estudiante (asumiendo que hay 20 estudiantes con IDs del 1 al 20)
    FOR i IN 1..total_estudiantes LOOP
        -- Cada estudiante se inscribe en 2-5 cursos aleatoriamente
        inscripciones_por_estudiante := 2 + (i % 4);

        FOR j IN 1..inscripciones_por_estudiante LOOP
            -- Selecciona un curso basado en el índice
            curso_seleccionado := curso_codigo_array[1 + ((i + j) % 25)];

            INSERT INTO iscripciones (estudiante_id, curso_codigo, nota, fecha_inscripcion)
            VALUES (
                i, -- ID del estudiante
                curso_seleccionado,
                60.00 + (((i + j) * 7) % 40), -- Notas entre 60 y 99
                '2024-01-01'::date + INTERVAL '1 week' * (i + j) -- Fechas escalonadas
            );
        END LOOP;
    END LOOP;
END $$;



alter table estudiantes
alter column promedio type decimal(5,2);


select *from estudiantes;
select * from profesores;
select * from cursos;
select * from inscripciones;

alter table iscripciones
rename to inscripciones;


-- Select Basico
select *
from estudiantes;
select nombre,apellido,salario from profesores;
select codigo, nombre_curso from cursos;
select * from iscripciones;

-- Where
select * from estudiantes where edad>20;
SELECT * from profesores where departament like 'Ci%';

select *
from cursos where costo>500;

select * from inscripciones where nota > 8.5;

select *
from estudiantes where carrera = 'Ingenieria';

select *
from profesores where salario between 10000 and 12000;

-- Order by

select *
from estudiantes
order by  edad desc ;

select *
from profesores
order by apellido asc;

select * from cursos
order by costo asc;

select * from estudiantes
order by promedio, apellido asc;

-- Limit y Offset

select * from estudiantes
order by edad asc
limit 10;

select * from cursos
order by costo desc
limit 3;

select * from profesores
limit 5
offset 5;

select *
from inscripciones
order by nota desc
limit 10;

select * from estudiantes
limit 10
offset 10;

-- Distinct

select distinct * from cursos;

select distinct estudiantes.ciudad  from estudiantes;

select distinct departament
from profesores;

-- now()-> fecha + hora
-- current-time -> hora
--current-date -> fecha
-- date_part('typo', column)
select distinct date_part('year',fecha_ingreso) from estudiantes



-- Filtros y Condiciones

    -- Comparaciones

select promedio from estudiantes;
select * from estudiantes where promedio = 20;

select *
from cursos where creditos < 5;

select * from profesores where salario=12000;

    --Like y Expreciones Regulares
select * from estudiantes where nombre like 'A%';
select *
from profesores where apellido like '%ez';

select * from cursos where nombre_curso ~ 'al';
select * from cursos;

select *
from estudiantes;

select *
from estudiantes where  carrera ~ 'ch';

select nombre
from profesores where nombre like '_____';

    -- In, Between

select *
from estudiantes where carrera in ('Medicina','Ingenieria','Derecho');

select * from estudiantes;


select * from profesores where departament in ('Psicología', 'Administración');
select departament from profesores;

select * from cursos where creditos between 2 and 4;

select * from inscripciones where nota between 20 and 100;

select *
from estudiantes where edad in (19,21,23);

-- Is null/ Is not null

select * from estudiantes where promedio is not null;

select * from profesores where fecha_contratacion is not null;

select * from cursos where profesor_id is not null;

-- And, Or , Not

select * from estudiantes where edad=22 and carrera='Derecho';

select * from profesores where departament='Psicología' or salario>10000;

select * from cursos where profesor_id !=1;

select * from estudiantes where (carrera='Medicina'or carrera='Derecho') and edad>20;

select * from profesores where salario between 8500 and 10000;

    -- Funciones Basicas
select upper(estudiantes.nombre) from estudiantes;
select lower(profesores.nombre) from profesores;
select cursos.nombre_curso from cursos where length(nombre_curso)>3;
select length(estudiantes.nombre), estudiantes.nombre from estudiantes;
select nombre from estudiantes where nombre like '_%' AND nombre ~ '^[A-Z]';
select concat(nombre,apellido) from profesores;

-- Funciones Matematicas
select round(avg(e.promedio), 1) from estudiantes as e;
select abs(nota-80) from inscripciones;
select round( sqrt(salario::numeric) ,2) AS SALARIOS from profesores;
select round(avg(costo),1) from cursos;
select pow(edad,2) from estudiantes;

-- Funciones de flecha
select date_part('year', fecha_ingreso) from estudiantes;
select date_part('month', profesores.fecha_contratacion) from profesores;
select date_part('day', cursos.fecha_inicio) from  cursos;
select date_part('year', now()) - date_part('year', profesores.fecha_contratacion)  from profesores;
select fecha_contratacion from profesores;

SELECT * FROM profesores
WHERE DATE_PART('year', AGE(CURRENT_DATE, fecha_contratacion)) >= 5;

-- Mix

SELECT * FROM estudiantes
WHERE carrera IN ('Ingeniería', 'Ingenieria') and promedio > 60
order by promedio desc
limit 1;

select * from profesores as p
where (p.nombre like 'Carmen' or p.nombre like 'Eduardo') and departament = 'Arquitectura'
order by salario desc;

select upper(nombre_curso), round(costo,2) from cursos
where costo < 1600 and creditos > 3;


