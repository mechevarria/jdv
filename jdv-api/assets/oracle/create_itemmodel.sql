CREATE TABLE itemmodel
(
    id NUMBER NOT NULL,
    make VARCHAR(255),
    model VARCHAR(255),
    year VARCHAR(255),
    createdate DATE,
    lastupdatedate DATE,
    status VARCHAR(255)
);

ALTER TABLE itemmodel ADD (
  CONSTRAINT item_pk PRIMARY KEY (id));

CREATE SEQUENCE item_seq START WITH 1;