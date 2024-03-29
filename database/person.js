const Sequelize = require('sequelize')
const connection = require('./database')
const imate = require('./imate')
 
const person = connection.define('person', {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    securityNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },

    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    adress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    estate: {
        type: Sequelize.STRING,
        allowNull: false
    }, 

    foneNumber: {
        type: Sequelize.STRING,
        allowNull: false
    }

})


person.sync({force:false}).then(() => {})

module.exports = person