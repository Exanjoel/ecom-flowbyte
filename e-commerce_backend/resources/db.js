const MySql = require('mySql2')

const MySql_pool = MySql.createPool({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'ecommercedb',
    port: 3306,
    ssl: false
})

module.exports = { MySql_pool };