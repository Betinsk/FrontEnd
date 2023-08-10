const Sequelize = require('sequelize')

/*const connection = new Sequelize('federalBureauPrison', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})*/

//const connection = new Sequelize('postgres://3JHyFzxhtt:WI1xwE0y7ZRCyi72fSUdckys@SharedPostgreSQL01A.back4app.com:5433/7dca7222494c4cffa0e7cc4c71792c81') // Example for postgres

const connection = new Sequelize('postgresql://postgres:Tkrj63Snrkw7IMlB7vBr@containers-us-west-110.railway.app:8047/railway', {
  dialect: 'postgres',
  protocol: 'postgres',
});

module.exports = connection
