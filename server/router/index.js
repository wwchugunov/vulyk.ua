const Router = require('express')
const router = new Router()
// ПОдключить другие роуты не забыть!
const userRouter = require('./userRouter')


router.use('/user', userRouter)


module.exports = router

