const sequelize = require('../config/database')
const {Sequelize, DataTypes} = require('sequelize')



const user = sequelize.degine('user', {
    mail:{type: DataTypes.STRING, autoIncrement: true, allowNull: false},
    pasword: {type: DataTypes.STRING, autoIncrement: false, allowNull: false},
    activateLink: {type: DataTypes.STRING, allowNull: false},
    photo: {type: DataTypes.STRING, allowNull: false},
    nikname: {type: DataTypes.STRING, allowNull: false},
    dataregister: {type: DataTypes.STRING, allowNull: false},
    dataonline: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: 'user'}
})




module.exports = {
    user
}