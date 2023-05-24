const Sequelize = require('sequelize')

/*const connection = new Sequelize('federalBureauPrison', 'root', '', {
    host: 'postgres://3JHyFzxhtt:WI1xwE0y7ZRCyi72fSUdckys@SharedPostgreSQL01A.back4app.com:5433/7dca7222494c4cffa0e7cc4c71792c81',
    dialect: 'postgres'
})*/

<<<<<<< HEAD
=======
//const connection = new Sequelize('postgres://3JHyFzxhtt:WI1xwE0y7ZRCyi72fSUdckys@SharedPostgreSQL01A.back4app.com:5433/7dca7222494c4cffa0e7cc4c71792c81') // Example for postgres

const connection = new Sequelize('postgresql://postgres:LRRtScOwvJvpwr3bp5FC@containers-us-west-127.railway.app:6190/railway', {
  dialect: 'postgres',
  protocol: 'postgres',
});


>>>>>>> 34542e83d262909df1c88e595cc6a6e01e8e35f6
module.exports = connection
