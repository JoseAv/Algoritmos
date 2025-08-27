CREATE TABLE empleados(
  id int PRIMARY KEY,
  nombre varchar(50),
  apellido varchar(50),
  email varchar(100) unique,
  telefono varchar(15) unique,
  salario decimal(10,2)
);


CREATE TABLE productos(
    codigo int primary key,
    nombre_producto varchar(100),
    precio decimal(10,2),
    stock int
);


CREATE TABLE clientes(
    cliente_id int primary key,
    nombre_completo varchar(80),
    direccion varchar(200),
    ciudad varchar(50)
);


select * from trabajadores;

select *
from productos;

select * from clientes;

-- Creacion

alter table  empleados
add column fecha_nacimiento date;

alter table productos
add column categoria varchar(30);

alter table clientes
add column categoria varchar(10);

alter table empleados
add column activo bool;



--Eliminacion

alter table empleados
drop column telefono;

alter table clientes
drop column direccion;


--Modificar tipos de datos

alter table empleados
alter column email type varchar(150);

alter table productos
alter column stock type bigint;

alter table clientes
alter column nombre_completo type varchar(120);

alter table productos
alter column precio type decimal(10,3);

-- Renombrar Elementos

ALTER table empleados
rename to trabajadores;

ALTER  TABLE productos
rename column nombre_producto to descripcion;

alter table clientes
rename column cliente_id to id;

alter table productos
rename to invetario;

select *
from clientes;

-- Anidaciones al editar
alter table trabajadores
-- add column departamente varchar(50),
add column fecha_ingreso date,
alter column salario set not null;

select * from trabajadores;

--
-- alter  table invetario
-- alter Column categoria SET Default 'General'
-- rename column codigo to productos_id;
-- -- add column fecha_vencimiento date,


-- Contrains y validaciones
select * from trabajadores;

ALTER TABLE trabajadores
add constraint salario CHECK( salario> 0);

alter table  trabajadores
add constraint co_email unique(email);

alter table invetario
add constraint co_stock check ( stock >= 0 );

alter table clientes
    add column codigo_postal varchar(10);


alter table clientes
alter column codigo_postal SET not null;

-- Cuando usamos alter table set o add constrain
-- Alter table Set se usa para modificar algo propio de la tabla, su tipo, su valor por defecto, si puede o no ser null
-- add constrain son restricciones que nosotrs lo ponemos a la columna no necesariamente hacen parte de la columnas
-- las llaves, los checks o los unique -> son condiciones a la columna y no propiedades propias 


select *
from clientes;

select *
from trabajadores;


--Revisar constrain de una tabla
SELECT con.*
       FROM pg_catalog.pg_constraint con
            INNER JOIN pg_catalog.pg_class rel
                       ON rel.oid = con.conrelid
            INNER JOIN pg_catalog.pg_namespace nsp
                       ON nsp.oid = connamespace
       WHERE nsp.nspname = 'public'
             AND rel.relname = 'clientes';



