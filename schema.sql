CREATE DATABASE db
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Turkish_Turkey.1254'
    LC_CTYPE = 'Turkish_Turkey.1254'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
CREATE TABLE public.db
(
    request character varying COLLATE pg_catalog."default",
    response character varying COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE public.db
    OWNER to postgres;
