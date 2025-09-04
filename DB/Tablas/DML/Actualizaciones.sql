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


select departament from profesores
    where fecha_contratacion is not null
    group by  departament;



-- CTE -> Creamos una sub tabla y la llamamos departament_profesores
with departament_profesores as (
    -- campos a tener esta tabla
    select nombre,
           fecha_contratacion,
           id,
           departament,
           -- Row_Number -> Crea un conteo independiente, podriamos decir que crea minitablas sobre que?
           -- Over -> es Sobre que vamos a aplicar la numeracion
           -- partition by -> Esto divide la tabla en mini tablas y con el row_number a cada uno se le crea una numeracion
           -- y por ultimo podemos ordenarlas, en este caso la fecha por el mas antiguo
           -- a este campo lo llamo conteo
           row_number() over (partition by departament order by age(fecha_contratacion) desc ) as conteo
    from profesores
    where departament is not null and fecha_contratacion is not null
)
-- ahora la tabla que creamos al inicio la llamamos, podemos tambien llamar a los campos, y podemos usar conteo para liminar cuantos
-- datos queremos ver en esta tabla
select * from departament_profesores
where conteo = 1;
-- where  conteo =1;


with departament_profesores as (
    select nombre,
           fecha_contratacion,
           id,
           departament,
           row_number() over (partition by departament order by age(fecha_contratacion) desc ) as conteo
    from profesores
    where departament is not null and fecha_contratacion is not null
)
select * from departament_profesores;



-- ids a afectarse
-- 2
-- 5
-- 8
-- 1
-- 6
-- 4
select * from profesores where id=2;
update  profesores
    set salario=100 where id = 2;


update profesores
set salario = salario + ((salario * 15)/100)
where id in (
    with departament_profesores as (
    select nombre,
           fecha_contratacion,
           id,
           departament,
           row_number() over (partition by departament order by age(fecha_contratacion) desc ) as conteo
    from profesores
    where departament is not null and fecha_contratacion is not null
)
select departament_profesores.id from departament_profesores
where conteo = 1
);


with estudiates_promedio as(
    select nombre,
           carrera,
           promedio,
           row_number() over (partition by carrera order by carrera) as conteo
           from estudiantes
)
select avg(promedio), carrera from estudiates_promedio
where promedio is not null and carrera is not null
group by carrera;



WITH estudiantes_promedio AS (
    SELECT carrera,
           AVG(promedio) as promedioCarrera,
           ROW_NUMBER() OVER (PARTITION BY carrera ORDER BY carrera) as conteo
    FROM estudiantes
    WHERE promedio IS NOT NULL AND carrera IS NOT NULL
    GROUP BY carrera
),
estudiantes_menorPromedio AS (
    SELECT es.carrera,
           es.id,
           es.nombre,
           es.promedio
    FROM estudiantes as es
    WHERE es.carrera IN (SELECT carrera FROM estudiantes_promedio)
    AND es.promedio < (
        SELECT promedioCarrera
        FROM estudiantes_promedio
        WHERE estudiantes_promedio.carrera = es.carrera
    )
)
SELECT * FROM estudiantes_menorPromedio;

select * from estudiantes where nombre='Carlos';

WITH estudiantes_promedio AS (
    SELECT carrera,
           AVG(promedio) as promedioCarrera,
           ROW_NUMBER() OVER (PARTITION BY carrera ORDER BY carrera) as conteo
    FROM estudiantes
    WHERE promedio IS NOT NULL AND carrera IS NOT NULL
    GROUP BY carrera
),
estudiantes_menorPromedio AS (
    SELECT es.carrera,
           es.id,
           es.nombre,
           es.promedio
    FROM estudiantes as es
    WHERE es.carrera IN (SELECT carrera FROM estudiantes_promedio)
    AND es.promedio < (
        SELECT promedioCarrera
        FROM estudiantes_promedio
        WHERE estudiantes_promedio.carrera = es.carrera
    )
)
update  estudiantes
set promedio = (select promedioCarrera from estudiantes_promedio where estudiantes_promedio.carrera = estudiantes.carrera)
where id in (select id from estudiantes_menorPromedio);


select * from profesores
where date_part('year', fecha_contratacion) > 3;



-- Extract usado con tipo y de donde sacmos la fecha, se puede usar tanto para consultar como para filtrar
select * from profesores
where extract(year from fecha_contratacion)>3;

select extract(year from profesores.fecha_contratacion) from profesores;


update profesores
set salario = salario + (salario/100)*10
where id in (
    select id from profesores
where extract(year from fecha_contratacion)>3
    );

-- 39


update cursos
set costo = costo + case
    when profesor_id is null then -100
    else 200
    end;

select * from   cursos where profesor_id is null;

select * from inscripciones;



-- 41

select * from profesores where salario > 20919935;

update profesores
set departament = 'Sin Asignar'
where salario > 20919935

-- 42

select * from estudiantes where ciudad='Guatemala42';
update estudiantes
set ciudad = 'Guatemala42'
where ciudad is null;



