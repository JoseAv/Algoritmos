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