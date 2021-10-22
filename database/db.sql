
<<<<<<< HEAD
use DataBase practicadb;
CREATE TABLE TUTOR (
    id_tutor INTEGER NOT NULL auto_increment,
    grado_estudios VARCHAR(30) NOT NULL,
    ex_empleo VARCHAR(255) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY(id_tutor)
);


CREATE TABLE USUARIO (
    id_usuario INTEGER NOT NULL auto_increment,
    TUTOR_id_tutor INTEGER NOT NULL,
    nombres VARCHAR(64),
    apelliidos VARCHAR(64),
    fecha_nacimiento DATE,
    correo VARCHAR(64),
    contraseña VARCHAR(32),
    fotografia VARCHAR(255),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY(id_usuario),
    CONSTRAINT USUARIO_TUTOR_id_fk FOREIGN KEY(TUTOR_id_tutor) REFERENCES TUTOR(id_tutor)
);


CREATE TABLE CURSO (
    id_curso INTEGER NOT NULL auto_increment,
    nombre VARCHAR(255) NOT NULL,
    imagen VARCHAR(255) NOT NULL,
    inscritos VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    requisitos VARCHAR(255) NOT NULL,
    duracion INTEGER NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY(id_curso)
);


CREATE TABLE USUARIO_has_CURSO (
    USUARIO_id_usuario INTEGER NOT NULL,
    CURSO_id_curso INTEGER NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY(USUARIO_id_usuario, CURSO_id_curso),
    CONSTRAINT USUARIO_has_CURSO_USUARIO_id_fk FOREIGN KEY(USUARIO_id_usuario) REFERENCES USUARIO(id_usuario),
    CONSTRAINT USUARIO_has_CURSO_CURSO_id_fk FOREIGN KEY(CURSO_id_curso) REFERENCES CURSO(id_curso)
);


CREATE TABLE ETIQUETA (
    id_etiqueta INTEGER NOT NULL auto_increment,
    nombre VARCHAR(32) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY(id_etiqueta)
);


CREATE TABLE CURSO_has_ETIQUETA (
    CURSO_id_curso INTEGER NOT NULL,
    ETIQUETA_id_etiqueta INTEGER NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY(CURSO_id_curso, ETIQUETA_id_etiqueta),
    CONSTRAINT CURSO_has_ETIQUETA_CURSO_id_fk FOREIGN KEY(CURSO_id_curso) REFERENCES CURSO(id_curso),
    CONSTRAINT CURSO_has_ETIQUETA_ETIQUETA_id_fk FOREIGN KEY(ETIQUETA_id_etiqueta) REFERENCES ETIQUETA(id_etiqueta)
);

--Tabla Module
CREATE TABLE MODULO (
    id_modulo INTEGER NOT NULL auto_increment,
    CURSO_id_curso INTEGER NOT NULL,
    nombre VARCHAR(64),
    descripcion VARCHAR(2048) NOT NULL,
    duracion INTEGER NOT NULL,
    nota INTEGER,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY(id_modulo, CURSO_id_curso),
    CONSTRAINT MODULO_CURSO_id_fk FOREIGN KEY(CURSO_id_curso) REFERENCES CURSO(id_curso)
);
=======
USE practicadb;

create Table `Tutor`;

create Table `Usuario`;

DROP TABLE IF EXISTS `Curso`;

CREATE TABLE `Curso` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `id_curso` varchar(4),
  `nombreCurso` TEXT default NULL,
  `text` TEXT default NULL,
  `requisitos` TEXT default NULL,
  `list` varchar(255) default NULL,
  `duracion` mediumint default NULL,
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

INSERT INTO `Curso` (`id_curso`,`nombreCurso`,`text`,`requisitos`,`list`,`duracion`)
VALUES
  (3858,"ac","orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean","ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem","inactivo",3),
  (5527,"sollicitudin","amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt","mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla","creado",4),
  (4440,"molestie","blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer","amet, risus. Donec nibh enim, gravida sit amet, dapibus id,","creado",3),
  (3782,"Sed","elit elit fermentum risus, at fringilla purus mauris a nunc.","semper egestas, urna justo faucibus lectus, a sollicitudin orci sem","inactivo",3),
  (3490,"faucibus.","et, rutrum eu, ultrices sit amet, risus. Donec nibh enim,","diam. Pellentesque habitant morbi tristique senectus et netus et malesuada","activo",5),
  (9727,"Donec","a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque","risus. Duis a mi fringilla mi lacinia mattis. Integer eu","inactivo",8),
  (2790,"Proin","enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris","elit erat vitae risus. Duis a mi fringilla mi lacinia","inactivo",7),
  (3947,"parturient","lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed","in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu","activo",5),
  (6732,"ornare","dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec","risus. Duis a mi fringilla mi lacinia mattis. Integer eu","activo",3),
  (4289,"aliquet","sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam","faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor","inactivo",5);

create TABLE `TAREA`{
    `idTarea` integer(5),
    `nombreTarea` varchar(80),
    `descripcionTarea`  varchar(100),
    `calificacion`    varchar(100),
    `direccionTarea`  varchar(40) 
}

create Table `Material`{
    `id_material` integer(5),
    `nombreMaterial` varchar(98),
    `descripcionMaterial`   varchar(255),
    `direccionMaterial` varchar()
}
>>>>>>> 4c998760071b0b116653989001084ebc239ff3c8
