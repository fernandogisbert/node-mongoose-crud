const express = require('express');
const pruebaController = require('../controllers/prueba.controller')

const router = express.Router();

router.get('/', pruebaController.getStudents )
router.post('/', pruebaController.addStudent )
router.delete('/', pruebaController.eraseStudent )
router.put('/', pruebaController.updateStudent)


module.exports = router;