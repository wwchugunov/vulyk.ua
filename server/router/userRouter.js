const Router = require('express')
const router = new Router()
const userController = require('../controller/userController')
// подключить контроллер


router.post('/registration', userController.registration);
router.get('/login', userController.login);
router.get('/auth', userController.registration);
router.get('/profile', userController.registration);
router.get('/profile/:userid', userController.registration);



module.exports = router