CREATE TABLE employees
(
    id SERIAL,
    name text,
    title text,
    CONSTRAINT employees_pkey PRIMARY KEY (id)
);

INSERT INTO employees(name, title) VALUES
 ('Jerry Seinfeild', 'Head of Operations'),
 ('George', 'DevRel'),
 ('Elaine', 'Marketing Guru');