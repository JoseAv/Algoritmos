-- SQL Functions

-- Basic Function Creation
--1
create or replace function age_students(ages date)
    returns  char(2)
    as $$
        DECLARE intAges int;

        begin
            select date_part('year', age(ages)) into intAges;
        return intAges;
        end;
    $$ language plpgsql;


select  age_students(TO_DATE('20/09/2018','DD,MM,YYYY') );

--2
create or replace function aprobate_Students(note int)
    returns varchar(20)
as $$
    begin
        if (note >= 60 ) then
            RETURN  'Aprobado';
        else
            return  'Reprobado';
        end if;
    end;

$$ language plpgsql;


select  aprobate_Students(30);


--3
create or replace function convert_dolar_to_queztal(cant float)
    returns float
    as $$
    begin
        return cant * 7.8;

    end

    $$ language plpgsql;


select convert_dolar_to_queztal(2);


--4
create or replace function fullName(name varchar(20), lastName varchar(20))
returns  varchar(40)
as $$
    begin
        return name || ' ' || lastName;
    end;

$$ language plpgsql;

select fullName('jose','arana');


-- Parameters and return types;

--1
create or replace function Student_gpa(es_id int)
returns  numeric(10,2)
as $$
    declare
        prom numeric(10,2);

    begin
        select promedio into prom  from estudiantes where es_id = estudiantes.id;

        return prom;
    end;

    $$ language plpgsql

select Student_gpa(11);


--2


create or replace function count_inscripcion(cu_code int)
returns int2
as $$
    declare
        coun_enrollment int2;

    begin
        select count(*) into coun_enrollment from inscripciones where curso_codigo = cu_code;
            return coun_enrollment;
    end;

    $$ language plpgsql

select * from cursos

select count_inscripcion(105);

--3

create or replace function profesores_cursos_ensenados(pr_id int4)
returns int4
as $$
    declare
         total int4;
    begin
        select count(*) into total from cursos where profesor_id = pr_id;
        return  total;
    end;

    $$ language plpgsql;

select * from profesores;

select profesores_cursos_ensenados(11)


--4
create or replace function show_grade_current(note numeric(5,2))
returns char(1)
as $$
    begin
        if (note >90) then
            return 'A';
        else if ( note > 70) then
            return 'B';
        else if (note >60) then
            return 'C';
        else
            return 'F';
        end if;
        end if;
        end if;
    end;
    $$ language plpgsql



select show_grade_current(70);