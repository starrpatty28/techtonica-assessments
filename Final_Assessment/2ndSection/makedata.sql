-- /*Create Data Table*/

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

-- /*Animals Table*/
\c endangered
INSERT INTO animal (Name, ScientificName, EstLliving, added)
VALUES ('Bear', 'Ursidae', '2000000', NOW());

INSERT INTO animal (Name, ScientificName, EstLliving, added)
VALUES ('Lion', 'Panthera leo', '20000', NOW());

INSERT INTO animal (Name, ScientificName, EstLliving, added)
VALUES ('Cheetah', 'Acinonyx jubatus', '12000', NOW());

INSERT INTO animal (Name, ScientificName, EstLliving, added)
VALUES ('Tiger', 'PantheraTigris', '3890', NOW());

INSERT INTO animal (Name, ScientificName, EstLliving, added)
VALUES ('Giraffe', 'Giraffa', '97500', NOW());

-- /*Scientist Track Table*/

INSERT INTO scientisttrack (ScientistName, AnimalId, AnimalNickName, AnimalSpecies, added2)
VALUES ('Jerome', '001', 'Sarai', 'Alligator', NOW());

INSERT INTO scientisttrack (ScientistName, AnimalId, AnimalNickName, AnimalSpecies, added2)
VALUES ('Dante', '002', 'Jackie', 'Cheetah', NOW());

INSERT INTO scientisttrack (ScientistName, AnimalId, AnimalNickName, AnimalSpecies, added2)
VALUES ('Carol', '003', 'Long', 'Giraffe', NOW());

INSERT INTO scientisttrack (ScientistName, AnimalId, AnimalNickName, AnimalSpecies, added2)
VALUES ('Ashley', '004', 'Big John', 'Bear', NOW());

INSERT INTO scientisttrack (ScientistName, AnimalId, AnimalNickName, AnimalSpecies, added2)
VALUES ('Alicia', '005', 'Lioness', 'Lion', NOW());

INSERT INTO scientisttrack (ScientistName, AnimalId, AnimalNickName, AnimalSpecies, added2)
VALUES ('Starr', '006', 'Noi', 'Tiger', NOW());

-- /*Scientist Input Table*/
INSERT INTO scientistinput (ScientistName, Date, Time, AnimalSpecies, CountryLocation, AnimalHealth, added1)
VALUES ('Adam', 'May 8th 2019', '0800', 'Bear', 'California', 'Healthy', NOW());

INSERT INTO scientistinput (ScientistName, Date, Time, AnimalSpecies, CountryLocation, AnimalHealth, added1)
VALUES ('Joesph', 'June 4th 2017', '1330', 'Alligator', 'Florida', 'Unhealthy', NOW());

INSERT INTO scientistinput (ScientistName, Date, Time, AnimalSpecies, CountryLocation, AnimalHealth, added1)
VALUES ('LeBron', 'April 4th 2016', '1500', 'Cheetah', 'New York', 'Healthy', NOW());

INSERT INTO scientistinput (ScientistName, Date, Time, AnimalSpecies, CountryLocation, AnimalHealth, added1)
VALUES ('Sarah', 'December 12th 2015', '2000', 'Lion', 'Los Angeles', 'Healthy', NOW());

INSERT INTO scientistinput (ScientistName, Date, Time, AnimalSpecies, CountryLocation, AnimalHealth, added1)
VALUES ('Alicia', 'May 12th 2020', '1600', 'Cheetah', 'China', 'Unhealthy', NOW());

INSERT INTO scientistinput (ScientistName, Date, Time, AnimalSpecies, CountryLocation, AnimalHealth, added1)
VALUES ('Lisa', 'July 15th 2009', '1000', 'Giraffe', 'Arkansas', 'Unhealthy', NOW());