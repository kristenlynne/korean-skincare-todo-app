const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')
const { ensureAuth } = require('../middleware/auth')

router.get('/morningTodos', ensureAuth, todosController.getMorningTodos)

router.get('/nightTodos', ensureAuth, todosController.getNightTodos)

router.post('/createMorningTodo', todosController.createMorningTodo)

router.post('/createNightTodo', todosController.createNightTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.put('/resetTodo', todosController.resetTodo)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router