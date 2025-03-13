const sequelize = require('../config/database')
const {Sequelize, DataTypes} = require('sequelize')


const post = sequelize.define('post',{
        userid: {type: DataTypes.STRING, alowNul: false},
        text: {type: DataTypes.STRING},
        photo: {type: DataTypes.STRING}
    }
)