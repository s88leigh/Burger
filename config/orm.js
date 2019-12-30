//import(require) connection.js into orm.js
const connection = require('./connection');

//In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

module.exports = {
    findAll: async function (table, callback) {
        try {
            var str = "SELECT * FROM ??";
            var result = await connection.query(str, [table])
            callback(result)
        } catch (error) {
            console.log(error)
        }
    },
    findByCondition: async function (table, condition, callback) {
        try {
            var str = "SELECT * FROM ?? WHERE " + condition;
            var result = await connection.query(str, [table])
            callback(result)
        } catch (error) {
            console.log(error)
        }
    }

};