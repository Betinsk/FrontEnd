const Sequelize = require('sequelize')
const connection = require('./database')

const Imate = connection.define('imate', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    securityNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },

    adress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    comitedCrime: {
        type: Sequelize.TEXT,
        allowNull: false
    }, 

    dataOfRelease: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


Imate.sync({force:false}).then(() => {})

module.exports = Imate
