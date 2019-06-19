create sequence us_parks_id_seq increment by 1;

CREATE TABLE public.us_parks (
  id INTEGER PRIMARY KEY NOT NULL DEFAULT nextval('us_parks_id_seq'::regclass),
  name TEXT,
  state TEXT,
  rating INTEGER
);
CREATE UNIQUE INDEX us_parks_id_uindex ON us_parks USING BTREE (id);
