-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-10-2021 a las 23:41:14
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE TABLE `USUARIO` (
  `id_usuario` INTEGER(11) NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(64) NOT NULL,
  `apellidos` VARCHAR(64) NOT NULL,
  `fecha_nacimiento` DATE DEFAULT NULL,
  `correo` VARCHAR(64) NOT NULL,
  `contrasena` VARCHAR(32) NOT NULL,
  `fotografia` VARCHAR(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY(id_usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `USUARIO` (`nombres`, `apellidos`, `correo`, `contrasena`) VALUES
('Alvaro', 'Linera', 'linerita33@gmail.com', 'sumamos1mas1'),
('Adrianita', 'Salvatierra', 'adrianapress2030@gmail.com', 'paralamento2018'),
('Javier', 'Filgrana Agreda', 'jav15porsiempre@gmail.com', 'javier2019'),
('Mauricio', 'Huayta Villanueva', 'andres30porsiempre@gmail.com', 'mauricio2019'),
('Alfredo', 'Lazaro Poma', 'alfredo18porsiiempre@gmail.com', 'alfredo2018'),
('Ivan', 'Martinez Achata', 'elviscocho@gmail.com', 'elviscocho2020'),
('Evo', 'Morales', 'evito33@gmail.com', 'sumamos5mas5'),
('Arce', 'Catocora', 'catacora2025@gmail.com', 'presidente2025'),
('Leticia', 'Blanco', 'laquenoteaprueba@gmail.com', 'algoritmosavanzados'),
('Mauricio', 'Montencinos', 'aceonepiece@gmail.com', 'mauricio1010'),
('Marcelo', 'Jaldin', 'sintarea09@gmail.com', 'tallerdebasedatos'),
('Vladimir', 'Oropeza', 'macporsiempre@gmail.com', 'programación web');

CREATE TABLE `TUTOR` (
  `id_tutor` INTEGER(11) NOT NULL AUTO_INCREMENT,
  `USUARIO_id_usuario` INTEGER(11) NOT NULL,
  `bibliografia` VARCHAR(4096) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY(id_tutor),
  CONSTRAINT TUTOR_USUARIO_id_fk FOREIGN KEY(USUARIO_id_usuario) REFERENCES USUARIO(id_usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `TUTOR` (`bibliografia`, `USUARIO_id_usuario`) VALUES
('Ingeniero en informatica de Jala, docente de la UMSS', 1),
('Linux System Engineer', 2),
('Integrante de la sociedad científica de estudiantes de la carrera de Informática', 3),
('Fundador de la empresa de software Kunza', 4),
('Director de carrera de informática de la UMSS', 5),
('Primer ejecutivo de centro de estudiantes de la carrera de informática en la UMSS', 6);

CREATE TABLE `CURSO` (
  `id_curso` INTEGER(11) NOT NULL AUTO_INCREMENT,
  `TUTOR_id_tutor`INTEGER(11) NOT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  `imagen` VARCHAR(255) NOT NULL,
  `inscritos` INTEGER(11) DEFAULT NULL,
  `descripcion` VARCHAR(4096) NOT NULL,
  `requisitos` VARCHAR(255) NOT NULL,
  `duracion` INTEGER(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY(id_curso),
  CONSTRAINT CURSO_TUTOR_id_fk FOREIGN KEY(TUTOR_id_tutor) REFERENCES TUTOR(id_tutor)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `CURSO` (`TUTOR_id_tutor`, `nombre`, `imagen`, `inscritos`, `descripcion`, `requisitos`, `duracion`) VALUES
(1, 'Aprende PHP', 'php.jpg', 9, 'En este curso aprendera lo más basico para dominar el lenguaje de programación.', 'Conocimiento básico en programación.', 33),
(2, 'Curso Maestro de Python', 'python.jpg', 45, 'Este es el curso en español más completo y exhaustivo que encontrarás sobre Python en Wdemy. Perfectamente estructurado y balanceado, introduce todos los temas de forma sencilla, gradual y 100% práctica. Todos los temas han sido cuidadosamente preparados.', 'No nececitas tener conocimento en programacion para tomar este curso.', 24),
(3, 'Docker, de principiante a experto', 'docker.png', 39, '¿Cansado de querer aprender Docker? ¿Te resulta muy difícil? ¿Lo has oído pero no sabes de qué trata? Todo eso llegó a su fin, al finalizar este curso serás un experto!\r\n\r\nNo hay mejor manera de aprender que con la práctica, así que este curso te ofrece muchísimos ejercicios donde podrás aprender a crear tus propias aplicaciones en Docker. Aprenderás a crear contenedores MySQL, Postgres, Jenkins, WordPress, PrestaShop, Saleor, Mongo, Nginx, Apache, SSL, Tomcat, Guacamole, Drupal y muchas más!.', 'Para este curso necesitas tener nocion basica sobre Linux\r\n.', 35),
(4, 'GIT y GITHUB desde cero!', 'git.png', 10, 'Aprendé sobre los repositorios más utilizados a nivel mundial y lleva tus conocimientos a otro nivel.\r\nVerás como manejar un repositorio local (GIT) a través del uso de la terminal y como manejar el repositorio remoto a través de la plataforma Github. Aprenderás a mantener tus proyectos organizados para que tu trabajo en equipo sea eficiente y también verás que interfaces de usuarios podrías utilizar en reemplazo de la terminal.', 'No necesitas conocimiento previo para este curso.', 4),
(5, 'Fotomontajes con Photoshop', 'photoshop.jpg', 218, 'En este curso aprenderás a dominar la creación de selecciones y máscaras para poder realizar montajes y composiciones en Photoshop. La idea es explicar los fundamentos que hay detrás de los procesos, así que encontrarás algo de la teoría de la imagen digital, de esta manera no tendrás que memorizar comandos ni pasos para conseguir el resultado que deseas al momento de realizar fotomontajes realistas en Photoshop.', 'no nececitas conocimentos previos para tomar este curso.', 20),
(6, 'Micro conferencias de negocios', 'charla.jpg', 19, '¿Qué pasa cuando las ventas bajan en tu empresa? o ¿No sabes ni como armar un mejor producto que la competencia?  Todos te dicen que debes de vender y vender y seguir vendiendo, cuando tus ventas bajan comienzas a tomar todos los cursos de ventas y tal vez eso no es la solución, tal vez tu mercado no ve un gran valor en tu producto, tal vez no hayas desarrollado una propuesta única de valor o tal vez tu marketing está bien encausado.', 'No necesitas tener conocimientos previos para tomar este curso.', 30);


CREATE TABLE `ETIQUETA` (
  `id_etiqueta` INTEGER(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(64) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY(id_etiqueta)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `ETIQUETA` (`nombre`) VALUES
('python'),
('programacion'),
('git'),
('github'),
('fotomontajes'),
('fotografía'),
('photoshop'),
('php'),
('conferencias'),
('conceptos'),
('negocios'),
('docker'),
('contenedor');

CREATE TABLE `CURSO_has_ETIQUETA` (
  `CURSO_id_curso` INTEGER(11) NOT NULL,
  `ETIQUETA_id_etiqueta` INTEGER(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
PRIMARY KEY(CURSO_id_curso, ETIQUETA_id_etiqueta),
CONSTRAINT CURSO_has_ETIQUETA_CURSO_id_fk FOREIGN KEY(CURSO_id_curso) REFERENCES CURSO(id_curso),
CONSTRAINT CURSO_has_ETIQUETA_ETIQUETA_id_fk FOREIGN KEY(ETIQUETA_id_etiqueta) REFERENCES ETIQUETA(id_etiqueta)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `CURSO_has_ETIQUETA` (`CURSO_id_curso`, `ETIQUETA_id_etiqueta`) VALUES
(1, 2),
(1, 8),
(2, 1),
(2, 2),
(3, 13),
(3, 9),
(4, 3),
(4, 4),
(5, 5),
(5, 6),
(5, 7),
(6, 10),
(6, 11),
(6, 12);

CREATE TABLE `MODULO` (
  `id_modulo` INTEGER(11) NOT NULL AUTO_INCREMENT,
  `CURSO_id_curso` INTEGER(11) NOT NULL,
  `nombre` VARCHAR(64) NOT NULL,
  `descripcion` VARCHAR(4096) NOT NULL,
  `duracion` INTEGER(11) NOT NULL,
  `nota` INTEGER(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY(id_modulo, CURSO_id_curso),
  CONSTRAINT MODULO_CURSO_id_fk FOREIGN KEY(CURSO_id_curso) REFERENCES CURSO(id_curso)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `modulo` (`CURSO_id_curso`, `nombre`, `descripcion`, `duracion`) VALUES
(1, 'introduccion a php', 'en este modulo aprenderas la sintaxis basica del lenguaje de programacion de php, ademas de ciclos y cosas esenciales del lenguaje', 1),
(2, 'introduccion a python', 'en este modulo aprenderas la sintaxis basica del lenguaje de programacion python', 1),
(4, 'presentacion del curso ', 'se hablara de forma general sobre la herramiente de git y github, y la utilidad que tiene', 1),
(3, 'introduccion a Docker', 'En esta seccion aprenderas los concepto basicos sobre docker y la forma en la que esta herramienta trabaja', 2),
(5, 'Introduccion a la heramienta de photoshop', 'En esta seccion aprenderas sobre las partes mas importantes de la herramienta de photoshop', 1),
(6, '¿que es un negocio?', 'En esta seccion el orador empieza a introducirnos a la vida del neciocio y como funciona', 1);

CREATE TABLE `USUARIO_has_CURSO` (
  `USUARIO_id_usuario` int(11) NOT NULL,
  `CURSO_id_curso` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY(USUARIO_id_usuario, CURSO_id_curso),
  CONSTRAINT USUARIO_has_CURSO_USUARIO_id_fk FOREIGN KEY(USUARIO_id_usuario) REFERENCES USUARIO(id_usuario),
  CONSTRAINT USUARIO_has_CURSO_CURSO_id_fk FOREIGN KEY(CURSO_id_curso) REFERENCES CURSO(id_curso)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `USUARIO_has_CURSO` (`USUARIO_id_usuario`, `CURSO_id_curso`) VALUES
(7, 1),
(8, 2),
(9, 3),
(10, 4),
(11, 5),
(12, 6);
