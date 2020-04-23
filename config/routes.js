const express = require('express')
const router = express.Router()
const articlesController = require('../controllers/articles.controller')
const usersController = require('../controllers/users.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.get('/articles', articlesController.list)
router.post('/articles', authMiddleware.isAuthenticated, articlesController.create)
router.get('/articles/:id', articlesController.get)
router.patch('/articles/:id', authMiddleware.isAuthenticated, articlesController.update)
router.delete('/articles/:id', authMiddleware.isAuthenticated, articlesController.delete)
router.post('/articles/:id/comments', authMiddleware.isAuthenticated, articlesController.addComment)

router.get('/users', authMiddleware.isAuthenticated, usersController.list)
router.post('/users', authMiddleware.isNotAuthenticated, usersController.create)
router.get('/users/:username', authMiddleware.isAuthenticated, articlesController.profile)
router.patch('/users/:id', authMiddleware.isAuthenticated, usersController.update)
router.delete('/users/:id', authMiddleware.isAuthenticated, usersController.delete)

router.post('/login', authMiddleware.isNotAuthenticated, usersController.login)
router.post('/logout', authMiddleware.isAuthenticated, usersController.logout)



module.exports = router

