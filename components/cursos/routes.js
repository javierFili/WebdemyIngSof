//rutas de Cursos

const { router } = require("express");

router.getAsync('/', controller.getCurso);
router.getAsync('/', controller.getUsuario);

router.exports = router;