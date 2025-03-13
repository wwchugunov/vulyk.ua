const { json } = require("express")

class userController {
    async registration(req, res){
        const {mail, pass} = req.body
        console.log(`Логика регистрации пользователя логин:${mail}  Пароль:${pass}` )
        res.send('Логика регистрации пользователя')
    };
    async auth(req, res){
        console.log(`auth`)
        res.send('Логика авторизация пользователя')

        
    };
    async login(req, res){
        console.log(login)
        res.send('Логика логин  пользователя')
    };
}


module.exports =  new userController()