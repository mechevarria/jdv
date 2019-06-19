create sequence hibernate_seq increment by 1;

CREATE TABLE itemmodel
(
    id BIGINT PRIMARY KEY NOT NULL DEFAULT nextval('hibernate_seq'::regclass),
    make VARCHAR(255),
    model VARCHAR(255),
    year VARCHAR(255),
    createdate DATE,
    lastupdatedate DATE,
    status VARCHAR(255)
);
