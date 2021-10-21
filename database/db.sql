CREATE DATABASE practicadb;

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