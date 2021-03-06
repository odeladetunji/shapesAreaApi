CREATE TABLE public.shapes
(
    shapeid integer NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    email text COLLATE pg_catalog."default",
    payload text COLLATE pg_catalog."default",
    shapetype text COLLATE pg_catalog."default",
    area double precision,
    "createdAt" time without time zone,
    "updatedAt" time without time zone,
    CONSTRAINT shapes_pkey PRIMARY KEY (shapeid)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.shapes
    OWNER to postgres;