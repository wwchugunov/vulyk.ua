require('dotenv').config()
const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 2000
const router = require('./router/index')
const sequelize = require('./config/database')

const app = express()


app.use(cors())
app.use(express.json())
app.use('/api', router)
// импортировать ошибки первого уровня

const start = async  () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(port, () => console.log(`server api start in port ${port}`))
    }catch(err){
        console.log(`Ошибка запуска \n ${err}`)
    }
}


start()