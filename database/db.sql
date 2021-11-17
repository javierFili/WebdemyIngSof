set SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
start transaction;
set time_zone = "+00:00";

create table `USUARIO` (
  `id_usuario` integer(11) not null AUTO_INCREMENT,
  `nombres` varchar(25) not null,
  `apellidos` varchar(25) not null,
  `correo` varchar(50) not null,
  `contrasena` varchar(40) not null,
  `fotografia` varchar(255) default NULL,
  `created_at` timestamp not null default current_timestamp(),
  `updated_at` timestamp not null default current_timestamp(),
  primary key(id_usuario)
) ENGINE=InnoDB default CHARset=utf8mb4;

insert into `USUARIO` (`nombres`, `apellidos`, `correo`, `contrasena`) values
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

create table `TUTOR` (
  `id_tutor` integer(11) not null AUTO_INCREMENT,
  `USUARIO_id_usuario` integer(11) not null,
  `bibliografia` varchar(4096) not null,
  `created_at` timestamp not null default current_timestamp(),
  `updated_at` timestamp not null default current_timestamp(),
  primary key(id_tutor),
  constraint TUTOR_USUARIO_id_fk foreign key(USUARIO_id_usuario) references USUARIO(id_usuario)
) ENGINE=InnoDB default CHARset=utf8mb4;

insert into `TUTOR` (`bibliografia`, `USUARIO_id_usuario`) values
('Ingeniero en informatica de Jala, docente de la UMSS', 1),
('Linux System Engineer', 2),
('Integrante de la sociedad científica de estudiantes de la carrera de Informática', 3),
('Fundador de la empresa de software Kunza', 4),
('Director de carrera de informática de la UMSS', 5),
('Primer ejecutivo de centro de estudiantes de la carrera de informática en la UMSS', 6);

create table `CURSO` (
  `id_curso` integer(11) not null AUTO_INCREMENT,
  `TUTOR_id_tutor`integer(11) not null,
  `nombre` varchar(255) not null,
  `imagen` varchar(255) not null,
  `inscritos` integer(11) default NULL,
  `descripcion` varchar(4096) not null,
  
  `requisitos` varchar(255) not null,
  `duracion` integer(11) not null,
  `created_at` timestamp not null default current_timestamp(),
  `updated_at` timestamp not null default current_timestamp(),
  primary key(id_curso),
  constraint CURSO_TUTOR_id_fk foreign key(TUTOR_id_tutor) references TUTOR(id_tutor)
)ENGINE=InnoDB default CHARset=utf8mb4;

insert into `CURSO` (`TUTOR_id_tutor`, `nombre`, `imagen`, `inscritos`, `descripcion`, `requisitos`, `duracion`) values
(1, 'Aprende PHP', 'php.jpg', 9, 'En este curso aprendera lo más basico para dominar el lenguaje de programación.', 'Conocimiento básico en programación.', 33),
(2, 'Curso Maestro de Python', 'python.jpg', 45, 'Este es el curso en español más completo y exhaustivo que encontrarás sobre Python en Wdemy. Perfectamente estructurado y balanceado, introduce todos los temas de forma sencilla, gradual y 100% práctica. Todos los temas han sido cuidadosamente preparados.', 'No nececitas tener conocimento en programacion para tomar este curso.', 24),
(3, 'Docker, de principiante a experto', 'docker.png', 39, '¿Cansado de querer aprender Docker? ¿Te resulta muy difícil? ¿Lo has oído pero no sabes de qué trata? Todo eso llegó a su fin, al finalizar este curso serás un experto!\r\n\r\nNo hay mejor manera de aprender que con la práctica, así que este curso te ofrece muchísimos ejercicios donde podrás aprender a crear tus propias aplicaciones en Docker. Aprenderás a crear contenedores MySQL, Postgres, Jenkins, WordPress, PrestaShop, Saleor, Mongo, Nginx, Apache, SSL, Tomcat, Guacamole, Drupal y muchas más!.', 'Para este curso necesitas tener nocion basica sobre Linux\r\n.', 35),
(4, 'GIT y GITHUB desde cero!', 'git.png', 10, 'Aprendé sobre los repositorios más utilizados a nivel mundial y lleva tus conocimientos a otro nivel.\r\nVerás como manejar un repositorio local (GIT) a través del uso de la terminal y como manejar el repositorio remoto a través de la plataforma Github. Aprenderás a mantener tus proyectos organizados para que tu trabajo en equipo sea eficiente y también verás que interfaces de usuarios podrías utilizar en reemplazo de la terminal.', 'No necesitas conocimiento previo para este curso.', 4),
(5, 'Fotomontajes con Photoshop', 'photoshop.jpg', 218, 'En este curso aprenderás a dominar la creación de selecciones y máscaras para poder realizar montajes y composiciones en Photoshop. La idea es explicar los fundamentos que hay detrás de los procesos, así que encontrarás algo de la teoría de la imagen digital, de esta manera no tendrás que memorizar comandos ni pasos para conseguir el resultado que deseas al momento de realizar fotomontajes realistas en Photoshop.', 'no nececitas conocimentos previos para tomar este curso.', 20),
(6, 'Micro conferencias de negocios', 'charla.jpg', 19, '¿Qué pasa cuando las ventas bajan en tu empresa? o ¿No sabes ni como armar un mejor producto que la competencia?  Todos te dicen que debes de vender y vender y seguir vendiendo, cuando tus ventas bajan comienzas a tomar todos los cursos de ventas y tal vez eso no es la solución, tal vez tu mercado no ve un gran valor en tu producto, tal vez no hayas desarrollado una propuesta única de valor o tal vez tu marketing está bien encausado.', 'No necesitas tener conocimientos previos para tomar este curso.', 30);


create table `ETIQUETA` (
  `id_etiqueta` integer(11) not null AUTO_INCREMENT,
  `nombre` varchar(64) not null,
  `created_at` timestamp not null default current_timestamp(),
  `updated_at` timestamp not null default current_timestamp(),
  primary key(id_etiqueta)
) ENGINE=InnoDB default CHARset=utf8mb4;

insert into `ETIQUETA` (`nombre`) values
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

create table `CURSO_has_ETIQUETA` (
  `CURSO_id_curso` integer(11) not null,
  `ETIQUETA_id_etiqueta` integer(11) not null,
  `created_at` timestamp not null default current_timestamp(),
  `updated_at` timestamp not null default current_timestamp(),
primary key(CURSO_id_curso, ETIQUETA_id_etiqueta),
constraint CURSO_has_ETIQUETA_CURSO_id_fk foreign key(CURSO_id_curso) references CURSO(id_curso),
constraint CURSO_has_ETIQUETA_ETIQUETA_id_fk foreign key(ETIQUETA_id_etiqueta) references ETIQUETA(id_etiqueta)
) ENGINE=InnoDB default CHARset=utf8mb4;

insert into `CURSO_has_ETIQUETA` (`CURSO_id_curso`, `ETIQUETA_id_etiqueta`) values
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

create table `MODULO` (
  `id_modulo` integer(11) not null AUTO_INCREMENT,
  `CURSO_id_curso` integer(11) not null,
  `nombre` varchar(64) not null,
  `descripcion` varchar(4096) not null,
  `duracion` integer(11) not null,
  `nota` integer(11) default NULL,
  `created_at` timestamp not null default current_timestamp(),
  `updated_at` timestamp not null default current_timestamp(),
  primary key(id_modulo, CURSO_id_curso),
  constraint MODULO_CURSO_id_fk foreign key(CURSO_id_curso) references CURSO(id_curso)
) ENGINE=InnoDB default CHARset=utf8mb4;

insert into `modulo` (`CURSO_id_curso`, `nombre`, `descripcion`, `duracion`) values
(1, 'introduccion a php', 'en este modulo aprenderas la sintaxis basica del lenguaje de programacion de php, ademas de ciclos y cosas esenciales del lenguaje', 1),
(2, 'introduccion a python', 'en este modulo aprenderas la sintaxis basica del lenguaje de programacion python', 1),
(4, 'presentacion del curso ', 'se hablara de forma general sobre la herramiente de git y github, y la utilidad que tiene', 1),
(3, 'introduccion a Docker', 'En esta seccion aprenderas los concepto basicos sobre docker y la forma en la que esta herramienta trabaja', 2),
(5, 'Introduccion a la heramienta de photoshop', 'En esta seccion aprenderas sobre las partes mas importantes de la herramienta de photoshop', 1),
(6, '¿que es un negocio?', 'En esta seccion el orador empieza a introducirnos a la vida del neciocio y como funciona', 1);

create table `USUARIO_has_CURSO` (
  `USUARIO_id_usuario` int(11) not null,
  `CURSO_id_curso` int(11) not null,
  `created_at` timestamp not null default current_timestamp(),
  `updated_at` timestamp not null default current_timestamp(),
  primary key(USUARIO_id_usuario, CURSO_id_curso),
  constraint USUARIO_has_CURSO_USUARIO_id_fk foreign key(USUARIO_id_usuario) references USUARIO(id_usuario),
  constraint USUARIO_has_CURSO_CURSO_id_fk foreign key(CURSO_id_curso) references CURSO(id_curso)
) ENGINE=InnoDB default CHARset=utf8mb4;

insert into `USUARIO_has_CURSO` (`USUARIO_id_usuario`, `CURSO_id_curso`) values
(7, 1),
(8, 2),
(9, 3),
(10, 4),
(11, 5),
(12, 6);