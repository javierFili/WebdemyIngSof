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

--
-- Base de datos: `practicadb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso`
--

CREATE TABLE `curso` (
  `id_curso` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `inscritos` int(11) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `requisitos` varchar(255) NOT NULL,
  `duracion` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `fechaCreacion` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `curso`
--

INSERT INTO `curso` (`id_curso`, `nombre`, `imagen`, `inscritos`, `descripcion`, `requisitos`, `duracion`, `created_at`, `updated_at`, `fechaCreacion`) VALUES
(5110, 'aprende PHP', 'php.jpg', 9, 'en este curso aprendera todo lo basico para dominar este lenguaje de programacion ', 'nececitas conocer lo basico en programacion', 33, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2021-04-29'),
(5111, 'Curso Maestro de Python', 'python.jpg', 45, 'Este es el curso en español más completo y exhaustivo que encontrarás sobre Python en wdemy. Perfectamente estructurado y balanceado, introduce todos los temas de forma sencilla, gradual y 100% práctica. Todos los temas han sido cuidadosamente preparados ', 'no nececitas tener conocimento en programacion para tomar este curso', 24, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2020-08-25'),
(5112, 'Docker, de principiante a experto', 'docker.png', 39, '¿Cansado de querer aprender Docker? ¿Te resulta muy difícil? ¿Lo has oído pero no sabes de qué trata? Todo eso llegó a su fin, al finalizar este curso serás un experto!\r\n\r\nNo hay mejor manera de aprender que con la práctica, así que este curso te ofrece muchísimos ejercicios donde podrás aprender a crear tus propias aplicaciones en Docker. Aprenderás a crear contenedores MySQL, Postgres, Jenkins, WordPress, PrestaShop, Saleor, Mongo, Nginx, Apache, SSL, Tomcat, Guacamole, Drupal y muchas más!', 'para este curso necesitas tener nocion basica sobre linux\r\n', 35, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2021-10-20'),
(5113, 'GIT y GITHUB desde cero!', 'git.png', 10, 'Aprendé sobre los repositorios más utilizados a nivel mundial y lleva tus conocimientos a otro nivel.\r\nVerás como manejar un repositorio local (GIT) a través del uso de la terminal y como manejar el repositorio remoto a través de la plataforma Github. Aprenderás a mantener tus proyectos organizados para que tu trabajo en equipo sea eficiente y también verás que interfaces de usuarios podrías utilizar en reemplazo de la terminal.', 'no necesitas conocimiento previo para este curso', 4, '2021-10-23 01:30:23', '2021-10-23 01:30:23', '2021-11-02'),
(5114, 'Fotomontajes con Photoshop', 'photoshop.jpg', 218, 'En este curso aprenderás a dominar la creación de selecciones y máscaras para poder realizar montajes y composiciones en Photoshop. La idea es explicar los fundamentos que hay detrás de los procesos, así que encontrarás algo de la teoría de la imagen digital, de esta manera no tendrás que memorizar comandos ni pasos para conseguir el resultado que deseas al momento de realizar fotomontajes realistas en Photoshop.', 'no nececitas conocimentos previos para tomar este curso', 20, '2021-10-24 14:05:31', '2021-10-24 14:05:31', '2021-06-16'),
(5115, 'micro conferencias de negocios', 'charla.jpg', 19, '¿Qué pasa cuando las ventas bajan en tu empresa? o ¿No sabes ni como armar un mejor producto que la competencia?  Todos te dicen que debes de vender y vender y vender, cuando tus ventas bajan comienzas a tomar todos los cursos de ventas y tal vez eso no es la solución, tal vez tu mercado no ve un gran valor en tu producto, tal vez no hayas desarrollado una propuesta única de valor o tal vez tu marketing está bien encausado.', 'no necesitas tener conocimientos previos para tomar este curso', 30, '2021-10-24 14:05:31', '2021-10-24 14:05:31', '2021-10-14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso_has_etiqueta`
--

CREATE TABLE `curso_has_etiqueta` (
  `CURSO_id_curso` int(11) NOT NULL,
  `ETIQUETA_id_etiqueta` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `curso_has_etiqueta`
--

INSERT INTO `curso_has_etiqueta` (`CURSO_id_curso`, `ETIQUETA_id_etiqueta`, `created_at`, `updated_at`) VALUES
(5110, 6001, '2021-10-24 14:20:05', '2021-10-24 14:20:05'),
(5110, 6007, '2021-10-24 14:20:05', '2021-10-24 14:20:05'),
(5111, 6000, '2021-10-24 13:05:29', '2021-10-24 13:05:29'),
(5111, 6001, '2021-10-24 13:05:29', '2021-10-24 13:05:29'),
(5112, 6012, '2021-10-24 14:26:52', '2021-10-24 14:26:52'),
(5112, 6013, '2021-10-24 14:26:52', '2021-10-24 14:26:52'),
(5113, 6002, '2021-10-24 13:03:07', '2021-10-24 13:03:07'),
(5113, 6003, '2021-10-24 13:03:07', '2021-10-24 13:03:07'),
(5114, 6004, '2021-10-24 14:14:27', '2021-10-24 14:14:27'),
(5114, 6005, '2021-10-24 14:14:27', '2021-10-24 14:14:27'),
(5114, 6006, '2021-10-24 14:14:27', '2021-10-24 14:14:27'),
(5115, 6009, '2021-10-24 14:22:09', '2021-10-24 14:22:09'),
(5115, 6010, '2021-10-24 14:20:58', '2021-10-24 14:20:58'),
(5115, 6011, '2021-10-24 14:20:58', '2021-10-24 14:20:58');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etiqueta`
--

CREATE TABLE `etiqueta` (
  `id_etiqueta` int(11) NOT NULL,
  `nombre` varchar(32) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `etiqueta`
--

INSERT INTO `etiqueta` (`id_etiqueta`, `nombre`, `created_at`, `updated_at`) VALUES
(6000, 'python', '2021-10-24 12:35:05', '2021-10-24 12:35:05'),
(6001, 'programacion', '2021-10-24 12:35:05', '2021-10-24 12:35:05'),
(6002, 'git', '2021-10-24 12:37:15', '2021-10-24 12:37:15'),
(6003, 'github', '2021-10-24 12:37:15', '2021-10-24 12:37:15'),
(6004, 'fotomontajes', '2021-10-24 14:09:20', '2021-10-24 14:09:20'),
(6005, 'fotografía', '2021-10-24 14:09:20', '2021-10-24 14:09:20'),
(6006, 'photoshop', '2021-10-24 14:12:12', '2021-10-24 14:12:12'),
(6007, 'php', '2021-10-24 14:16:49', '2021-10-24 14:16:49'),
(6009, 'conferencias', '2021-10-24 14:16:49', '2021-10-24 14:16:49'),
(6010, 'conceptos', '2021-10-24 14:18:15', '2021-10-24 14:18:15'),
(6011, 'negocios', '2021-10-24 14:18:15', '2021-10-24 14:18:15'),
(6012, 'docker', '2021-10-24 14:26:10', '2021-10-24 14:26:10'),
(6013, 'contenedor', '2021-10-24 14:26:10', '2021-10-24 14:26:10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modulo`
--

CREATE TABLE `modulo` (
  `id_modulo` int(11) NOT NULL,
  `CURSO_id_curso` int(11) NOT NULL,
  `nombre` varchar(64) DEFAULT NULL,
  `descripcion` varchar(2048) NOT NULL,
  `duracion` int(11) NOT NULL,
  `nota` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `modulo`
--

INSERT INTO `modulo` (`id_modulo`, `CURSO_id_curso`, `nombre`, `descripcion`, `duracion`, `nota`, `created_at`, `updated_at`) VALUES
(3000, 5110, 'introduccion a php', 'en este modulo aprenderas la sintaxis basica del lenguaje de programacion de php, ademas de ciclos y cosas esenciales del lenguaje', 1, NULL, '2021-10-23 01:34:52', '2021-10-23 01:34:52'),
(3002, 5111, 'introduccion a python', 'en este modulo aprenderas la sintaxis basica del lenguaje de programacion python', 1, NULL, '2021-10-23 01:37:42', '2021-10-23 01:37:42'),
(3004, 5113, 'presentacion del curso ', 'se hablara de forma general sobre la herramiente de git y github, y la utilidad que tiene', 1, NULL, '2021-10-23 01:44:52', '2021-10-23 01:44:52'),
(3005, 5112, 'introduccion a Docker', 'En esta seccion aprenderas los concepto basicos sobre docker y la forma en la que esta herramienta trabaja', 2, NULL, '2021-10-24 14:30:37', '2021-10-24 14:30:37'),
(5114, 5114, 'Introduccion a la heramienta de photoshop', 'En esta seccion aprenderas sobre las partes mas importantes de la herramienta de photoshop', 1, NULL, '2021-10-24 14:35:16', '2021-10-24 14:35:16'),
(5115, 5115, '¿que es un negocio?', 'En esta seccion el orador empieza a introducirnos a la vida del neciocio y como funciona', 1, NULL, '2021-10-24 14:37:25', '2021-10-24 14:37:25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tutor`
--

CREATE TABLE `tutor` (
  `id_tutor` int(11) NOT NULL,
  `grado_estudios` varchar(30) NOT NULL,
  `ex_empleo` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tutor`
--

INSERT INTO `tutor` (`id_tutor`, `grado_estudios`, `ex_empleo`, `created_at`, `updated_at`) VALUES
(4000, 'ingeniero en informatica', 'industria laboral IT', '2021-10-23 01:50:28', '2021-10-23 01:50:28'),
(4001, 'Linux System Engineer', 'ninguno', '2021-10-23 01:54:49', '2021-10-23 01:54:49');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `TUTOR_id_tutor` int(11) NOT NULL,
  `nombres` varchar(64) DEFAULT NULL,
  `apelliidos` varchar(64) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `correo` varchar(64) DEFAULT NULL,
  `contraseña` varchar(32) DEFAULT NULL,
  `fotografia` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_has_curso`
--

CREATE TABLE `usuario_has_curso` (
  `USUARIO_id_usuario` int(11) NOT NULL,
  `CURSO_id_curso` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`id_curso`);

--
-- Indices de la tabla `curso_has_etiqueta`
--
ALTER TABLE `curso_has_etiqueta`
  ADD PRIMARY KEY (`CURSO_id_curso`,`ETIQUETA_id_etiqueta`),
  ADD KEY `CURSO_has_ETIQUETA_ETIQUETA_id_fk` (`ETIQUETA_id_etiqueta`);

--
-- Indices de la tabla `etiqueta`
--
ALTER TABLE `etiqueta`
  ADD PRIMARY KEY (`id_etiqueta`);

--
-- Indices de la tabla `modulo`
--
ALTER TABLE `modulo`
  ADD PRIMARY KEY (`id_modulo`,`CURSO_id_curso`),
  ADD KEY `MODULO_CURSO_id_fk` (`CURSO_id_curso`);

--
-- Indices de la tabla `tutor`
--
ALTER TABLE `tutor`
  ADD PRIMARY KEY (`id_tutor`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `USUARIO_TUTOR_id_fk` (`TUTOR_id_tutor`);

--
-- Indices de la tabla `usuario_has_curso`
--
ALTER TABLE `usuario_has_curso`
  ADD PRIMARY KEY (`USUARIO_id_usuario`,`CURSO_id_curso`),
  ADD KEY `USUARIO_has_CURSO_CURSO_id_fk` (`CURSO_id_curso`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `curso`
--
ALTER TABLE `curso`
  MODIFY `id_curso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5116;

--
-- AUTO_INCREMENT de la tabla `etiqueta`
--
ALTER TABLE `etiqueta`
  MODIFY `id_etiqueta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6014;

--
-- AUTO_INCREMENT de la tabla `modulo`
--
ALTER TABLE `modulo`
  MODIFY `id_modulo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5116;

--
-- AUTO_INCREMENT de la tabla `tutor`
--
ALTER TABLE `tutor`
  MODIFY `id_tutor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4002;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `curso_has_etiqueta`
--
ALTER TABLE `curso_has_etiqueta`
  ADD CONSTRAINT `CURSO_has_ETIQUETA_CURSO_id_fk` FOREIGN KEY (`CURSO_id_curso`) REFERENCES `curso` (`id_curso`),
  ADD CONSTRAINT `CURSO_has_ETIQUETA_ETIQUETA_id_fk` FOREIGN KEY (`ETIQUETA_id_etiqueta`) REFERENCES `etiqueta` (`id_etiqueta`);

--
-- Filtros para la tabla `modulo`
--
ALTER TABLE `modulo`
  ADD CONSTRAINT `MODULO_CURSO_id_fk` FOREIGN KEY (`CURSO_id_curso`) REFERENCES `curso` (`id_curso`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `USUARIO_TUTOR_id_fk` FOREIGN KEY (`TUTOR_id_tutor`) REFERENCES `tutor` (`id_tutor`);

--
-- Filtros para la tabla `usuario_has_curso`
--
ALTER TABLE `usuario_has_curso`
  ADD CONSTRAINT `USUARIO_has_CURSO_CURSO_id_fk` FOREIGN KEY (`CURSO_id_curso`) REFERENCES `curso` (`id_curso`),
  ADD CONSTRAINT `USUARIO_has_CURSO_USUARIO_id_fk` FOREIGN KEY (`USUARIO_id_usuario`) REFERENCES `usuario` (`id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
