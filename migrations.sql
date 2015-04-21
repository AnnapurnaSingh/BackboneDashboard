psql

CREATE DATABASE coolcardapp;
\c coolcardapp;

CREATE TABLE cards (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  message VARCHAR(255),
);

-- REMEMBER TO BUNDLE!!!!
