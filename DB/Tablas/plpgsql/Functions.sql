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
