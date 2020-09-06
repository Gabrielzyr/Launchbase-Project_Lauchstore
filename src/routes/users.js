const express = require('express')
const routes = express.Router()

const SessionController = require('../app/controllers/SessionController')
const UserController = require('../app/controllers/UserController')

const Validator = require('../app/validators/user')

// login/logout UserController

// routes.get('/login', SessionController.loginForm)
// routes.post('/login', SessionController.login)
// routes.post('/logout', SessionController.logout)

// // reset password / forgot

// routes.get('/forgot-password', SessionController.forgotForm)
// routes.get('/password-reset', SessionController.logout)
// routes.post('/forgot-password', SessionController.forgot)
// routes.post('/password-reset', SessionController.reset)

// // user register UserController

routes.get('/register', UserController.registerForm)
routes.post('/register', Validator.post, UserController.post)

// routes.get('/', UserController.show)
// routes.put('/', UserController.put)
// routes.delete('/', UserController.delete)


module.exports = routes