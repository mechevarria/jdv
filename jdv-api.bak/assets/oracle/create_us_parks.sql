CREATE TABLE us_parks
(
    id NUMBER NOT NULL,
    name VARCHAR(255),
    state VARCHAR(255),
    rating NUMBER
);

ALTER TABLE us_parks ADD (
  CONSTRAINT park_pk PRIMARY KEY (id));

CREATE SEQUENCE park_seq START WITH 1;