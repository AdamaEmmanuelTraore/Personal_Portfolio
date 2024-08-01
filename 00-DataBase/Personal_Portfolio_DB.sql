/*	FOR DELETING TABLE CONTENT
DELETE FROM `Personal_Portfolio`.`fileCv` WHERE `id` = 11;
*/
/* FOR DELETING TABLE
DROP TABLE `Personal_Portfolio`.`fileCv`;

-- -----------------------------------------------------
-- Schema Personal Portfolio
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Personal_Portfolio`;

CREATE SCHEMA `Personal_Portfolio`;

USE `Personal_Portfolio` ;

SET FOREIGN_KEY_CHECKS = 0;

-- -----------------------------------------------------
-- Table `Personal_Portfolio`.`section_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Personal_Portfolio`.`section_category` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `section_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `Personal_Portfolio`.`section`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Personal_Portfolio`.`section` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) DEFAULT NULL,
  `methode` VARCHAR(255) DEFAULT NULL,
  `objective` VARCHAR(255) DEFAULT NULL,
  `description` TEXT DEFAULT NULL,
  `image_url` VARCHAR(255) DEFAULT NULL,
  `category_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_category1` (`category_id`),
  CONSTRAINT `fk_category1` FOREIGN KEY (`category_id`) REFERENCES `section_category` (`id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `Personal_Portfolio`.`portfolio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Personal_Portfolio`.`portfolio` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) DEFAULT NULL,
  `methode` VARCHAR(255) DEFAULT NULL,
  `objective` VARCHAR(255) DEFAULT NULL,
  `description` TEXT DEFAULT NULL,
  `image_url` VARCHAR(255) DEFAULT NULL,
  `section_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_section1` (`section_id`),
  CONSTRAINT `fk_section1` FOREIGN KEY (`section_id`) REFERENCES `section` (`id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `Personal_Portfolio`.`hobby`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Personal_Portfolio`.`hobby` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) DEFAULT NULL,
  `methode` VARCHAR(255) DEFAULT NULL,
  `objective` VARCHAR(255) DEFAULT NULL,
  `description` TEXT DEFAULT NULL,
  `image_url` VARCHAR(255) DEFAULT NULL,
  `section_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_section2` (`section_id`),
  CONSTRAINT `fk_section2` FOREIGN KEY (`section_id`) REFERENCES `section` (`id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `Personal_Portfolio`.`academy_experience`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Personal_Portfolio`.`academy_experience` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) DEFAULT NULL,
  `start_date` VARCHAR(255) DEFAULT NULL,
  `end_date` VARCHAR(255) DEFAULT NULL,
  `address` VARCHAR(255) DEFAULT NULL,
  `description` TEXT DEFAULT NULL,
  `section_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_section3` (`section_id`),
  CONSTRAINT `fk_section3` FOREIGN KEY (`section_id`) REFERENCES `section` (`id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `Personal_Portfolio`.`work_experience`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Personal_Portfolio`.`work_experience` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) DEFAULT NULL,
  `start_date` VARCHAR(255) DEFAULT NULL,
  `end_date` VARCHAR(255) DEFAULT NULL,
  `address` VARCHAR(255) DEFAULT NULL,
  `description` TEXT DEFAULT NULL,
  `section_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_section4` (`section_id`),
  CONSTRAINT `fk_section4` FOREIGN KEY (`section_id`) REFERENCES `section` (`id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `Personal_Portfolio`.`fileCv`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Personal_Portfolio`.`fileCv` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) DEFAULT NULL,
  `section_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_section5` (`section_id`),
  CONSTRAINT `fk_section5` FOREIGN KEY (`section_id`) REFERENCES `section` (`id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- SECTION CATEGORIES
-- -----------------------------------------------------
INSERT INTO section_category(section_name) VALUES ('HOME');
INSERT INTO section_category(section_name) VALUES ('ABOUT');
INSERT INTO section_category(section_name) VALUES ('PORTFOLIO');
INSERT INTO section_category(section_name) VALUES ('HOBBY');
INSERT INTO section_category(section_name) VALUES ('CONTACT');


-- -----------------------------------------------------
-- HOME
-- -----------------------------------------------------
INSERT INTO section(title, description, image_url, category_id) 
VALUES ('Hello, my name is', 'My motto is "if you dream it, you can do it".
Dynamic, responsible, with a strong teamwork ethic, i have always wanted to improve 
myself as a person and as a professional. I am a Junior software engineer with a few 
years of experience, and my expertise is in creating and designing websites following 
the various needs of the client, and much more...', 'assets/Photo/traore_adama_emmanuel_photo.jpeg', 1);

-- -----------------------------------------------------
-- ABOUT
-- -----------------------------------------------------
INSERT INTO section(title, description, category_id) 
VALUES ('I am Traore Adama Emmanuel and', 'I was born in Ivory Coast, more precisely in a 
city in the province of Abidjan called Abobo. At around the age of 11 or 12, my parents 
took us (my brother and me) to Italy, to Milan. For me it was a new world, a new culture, 
new school, new friends, new language...
The Italian language was really strange to me at first, but with the right support and commitment, 
today i am a native speaker.
I started school in Italy from the seventh grade class until i graduated in the fifth grade 
as an electrotechnical expert, but unfortunately, this was not my path, it did not encourage 
me and did not motivate me. I am passionate about technology at 360 degrees, so i decided to 
do an academic reconversion in IT, i opted for a specialized post-diploma course 
(alternative to university) in Java web and Android programming for industry 4.0. A path that 
fascinated me and introduced me to the vast world of Object Oriented Programming, an area that 
pushes me to improve myself day after day.', 2);

-- -----------------------------------------------------
-- ABOUT ACADEMY EXPERIENCE
-- -----------------------------------------------------
INSERT INTO academy_experience(title, start_date, end_date, address, description, section_id) 
VALUES ('Java Full stack Web and Android - Istituto Tecnico Superiore Angelo Rizzoli', 
'September 2021', 'July 2022', 'Via Benigno Crespi, 30 - 20159 - Milan, Italy',
'Specialization courses in computer programming like web and java developer for industry 4.0, 
Training offers a duration of 1000 hours divided into 600 hours of theory and practical exercises 
and 400 hours of work-study and internship in business. The main subjects covered are: 
Architecture and Systems, software development and OO programming, applied mathematical concepts 
and methods, Java application development, data and database management, Web technologies for 
user interface and backend. -end, Android mobile apps, Industry 4.0, IoT (Internet of Things), 
business lab - project work, English and communication skills, teamwork, soft skills, problem 
solving, Health and Safety at work.', 2);
INSERT INTO academy_experience(title, start_date, end_date, address, description, section_id) 
VALUES ('Higher Technician - Lombardy Higher Technical Institute of Mechatronics Foundation', 
'September 2019', 'September 2020', 'Viale Matteotti 425 -Sesto San Giovanni, Milan,
Italy', 'Advanced training in railway vehicle maintenance and roads, a journey that 
then led me to make a BIG choice in my life.', 2);
INSERT INTO academy_experience(title, start_date, end_date, address, description, section_id) 
VALUES ('High school diploma as an electrotechnical expert - ITIS Enrico Mattei', 
'September 2011', 'June 2019', 'Via Martiri Cefalonia, 46, 20097 - San Donato Milanese, Italy', 
'High school for electrician technicians, where you study the behavior of electric current 
in our systems, and the best way to wire them following ISO rules. For wiring,
sometimes complex wiring diagrams must be followed.', 2);

-- -----------------------------------------------------
-- ABOUT WORK EXPERIENCE
-- -----------------------------------------------------
INSERT INTO work_experience(title, start_date, end_date, address, description, section_id) 
VALUES ('Software engineer - Siemens', 'March 2022', 'Current', 'Via Vipiteno, 4 - 20138 Milan, Italy.', 
'I work as a Front-end developer in the "smart infrastructure" division of the multinational Siemens, 
we use the agile methodology, SCRUM. The skills acquired during this experience are the creation 
of new components and refactoring of existing code, BUG correction, Testing. The main technologies 
used are: Angular 2+, SCSS, Typescript, NPM, YARN, Git, GitGraph, Nodejs, HTML5, CSS etc...
After graduating as a Java full stack web and Android developer, outside of work i continue to 
deepen this path by continuing to study it and to delve deeper into e-learning such as Udemy or 
Pluralsight, in fact i am working on my personal projects using the majority of the technologies 
learned, for example Front-end: Angular (and all technologies linked to this framework), 
Back-end: Java / Spring boot (and all technologies linked to this framework),
Databases: MySQL Workbench. Who knows, maybe one day i will be able to become Full stack by making 
the technologies learned with commitment, perseverance and many sleepless nights available 
to society.', 2);
INSERT INTO work_experience(title, start_date, end_date, address, description, section_id) 
VALUES ('Worker - Romanino srl', 'May 2019', 'August 2021', 'Via Vincenzo Toffetti 125 
bis - 20139 Milan, Italy.', 'A seasonal job i did while studying how i taught myself the basics 
of computer science and i was also preparing myself to pass the ITS entrance test, i was 
the employee who yes he was responsible for loading and unloading goods in the food company
Romanino srl.', 2);
INSERT INTO work_experience(title, start_date, end_date, address, description, section_id) 
VALUES ('Electrician (internship) - Raineri Marco Impianti elettrici', 'January 2018', 'February 2018', 
'Milan, Italy', 'School internship of about a month, with an electrician
expert who allowed me to broaden my knowledge thanks to his expertise in the sector.', 2);

-- -----------------------------------------------------
-- ABOUT FILE CV
-- -----------------------------------------------------
INSERT INTO fileCv(name, section_id) 
VALUES ('CV in French', 2);
INSERT INTO fileCv(name, section_id) 
VALUES ('CV in Italian', 2);
INSERT INTO fileCv(name, section_id) 
VALUES ('CV in English', 2);

-- -----------------------------------------------------
-- SECTION PORTFOLIO
-- -----------------------------------------------------
INSERT INTO section(title, category_id)
VALUES ('Portfolio', 3);

-- -----------------------------------------------------
-- PORTFOLIO //
-- -----------------------------------------------------
INSERT INTO portfolio(title, methode, objective, description, image_url, section_id)
VALUES ('My personal portfolio', 'WatherFall (cascade).', 'Design a personal portfolio site using Java 
& Spring Boot for the backend, Angular for the frontend and MySql Workbench as the Database, here is a 
step by step guide to get started:', '1. Database design: I started by designing the database for the 
portfolio site. I identified the main entities, such as information on academic and work experiences, 
projects, an About section where i put all the information about myself, and so on. Create database 
tables corresponding to these entities and define the relationships between them.
2. Setting up Spring Boot project: I created a new Spring Boot project using spring initializr and 
Intelij as IDE. I made sure that i included the dependencies needed to access the database, such 
as Spring Data JPA and a driver for the database that i will be using.
3. Definition of JPA entities: I created the Java classes that represent the database entities. 
I used Spring Data JPA annotations to map these classes to database tables, making sure to include 
relationships between entities, such as @OneToMany and @ManyToOne or @OneToOne.
4. Creating the repositories: I created some repository interfaces using Spring Data JPA. These 
repositories will provide methods to perform CRUD (Create, Read, Update, Delete) operations on the 
database.
5. Creating Services: I created Spring services to handle my business logic. Services will use 
repositories to access and manipulate database data.
6. Creating the REST controllers: I created the Spring controllers to expose the REST APIs that 
will be used by the frontend. These controllers will receive HTTP requests from the client (frontend),
 call the appropriate services, and return the responses to the frontend as JSON.
7. Security configuration: To protect some parts of the portfolio site, i could configure security 
using Spring Security, but i opted to create a @Configuration class in which i prevent some actions.
8. Creating Angular Frontend: I created a new Angular project using Angular CLI. Design and create 
the pages and components of the portfolio site, such as the main page, the projects page, the skills 
page, etc... Then i use Angular routing to navigate between the different pages.
9. Calling REST APIs: I use Angular HttpClient module to make requests to the REST APIs of the 
Spring Boot backend. For example, i call the API to get data saved in a Database.
10. Data Presentation: I used Angular directives to present the data obtained from the backend in 
the frontend. For example, i can use *ngFor to iterate over a list of projects and display the 
corresponding information.', 'assets/Photo/DB_Schema.png', 3);

INSERT INTO portfolio(title, methode, objective, description, image_url, section_id)
VALUES ('My XXXXXX', 'XXXXXXXXXXXXX', 'XXXXXXXXXX', 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 
'assets/Photo/DB_Schema.png', 3);

INSERT INTO portfolio(title, methode, objective, description, image_url, section_id)
VALUES ('My YYYYYYYYYYY', 'YYYYYYYYYYYYYYYYYY', 'YYYYYYYYYYY', 
'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY', 
'assets/Photo/DB_Schema.png', 3);

-- -----------------------------------------------------
-- SECTION HOBBY
-- -----------------------------------------------------
INSERT INTO section(title, category_id)
VALUES ('Hobby', 4);

-- -----------------------------------------------------
-- HOBBY
-- -----------------------------------------------------
INSERT INTO hobby(title, description, image_url, section_id) 
VALUES ('Football', 'A sport that i have practiced for years at a competitive level, an activity 
that i greatly enjoy because it keeps me fit and makes a group of people collaborate to achieve, 
in an elaborate way, a specific end goal.', 'assets/Photo/Football.jpeg', 4);
INSERT INTO hobby(title, description, image_url, section_id) 
VALUES ('Cycling', 'I started to appreciate this discipline in 2021, during COVID-19, because in 
addition to doing physical activity, it is a good method to free the mind and feel part of nature.', 
'assets/Photo/Cycling.jpeg', 4);
INSERT INTO hobby(title, description, image_url, section_id) 
VALUES ('Gaming PC', 'I like gaming PCs, they are huge and powerful, i like to see how they are 
assembled on a hardware level and how they behave on a software level. I do activities like 
studying, programming and of course playing', 'assets/Photo/PC_gaming.jpeg', 4);
INSERT INTO hobby(title, description, image_url, section_id) 
VALUES ('The box', 'It is an activity that I have not practiced yet, but that i have always liked, 
it is a sport that allows you to maintain shape, but also makes you learn the values of self-control 
and many other values. It is probably a sport i would like to do in the future.', 
'assets/Photo/Boxing.jpeg', 4);
*/