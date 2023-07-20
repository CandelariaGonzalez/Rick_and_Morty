const Login = require('../controllers/login')
const userRouter = require('express').Router()

userRouter.get('/login', Login)



module.exports = userRouter