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

<<<<<<< HEAD

=======
>>>>>>> 34542e83d262909df1c88e595cc6a6e01e8e35f6
module.exports = person