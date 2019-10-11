CREATE TABLE animal (
 id serial PRIMARY KEY,
 Name VARCHAR(100),
 ScientificName VARCHAR(100),
 EstLliving VARCHAR(100),
 added TIMESTAMP NOT NULL
); 

CREATE TABLE scientistTrack (
 id serial PRIMARY KEY,
 ScientistName VARCHAR(100),
 AnimalId VARCHAR(100),
 AnimalNickname VARCHAR(100),
 AnimalSpecies VARCHAR(100),
 added TIMESTAMP NOT NULL
); 

CREATE TABLE scientistInput (
 id serial PRIMARY KEY,
 ScientistName VARCHAR(100),
 Date VARCHAR(100),
 Time VARCHAR(100),
 AnimalSpecies VARCHAR(100),
 CountryLocation VARCHAR(100),
 AnimalHealth VARCHAR(100),
 added TIMESTAMP NOT NULL
);

/* Was unable to add to my tables in time, it took us days to make eventonica and to ask this in 4 hours is unaceptable./*