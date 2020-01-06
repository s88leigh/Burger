//import(require) connection.js into orm.js
const connection = require('../config/connection');

//In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. 
//These are the methods you will need to use in order to retrieve and store data in your database.

const orm = {
    findAll: async function (table, callback) {
        try {
            var str = "SELECT * FROM ??";
            var result = await connection.query(str, [table])
            callback(result)
        } catch (error) {
            console.log(error)
        }

    },
    insertBurger: async function (table, columns, values, callback) {
        try {
            var str = "INSERT INTO BURGERS (burger_name)  values('??');";
            var result = await connection.query(str, [table, columns, values])
            callback(result)
        } catch (error) {
            console.log(error)
        }
    },

    updateBurger: async function (table, id, columns, values, callback) {
        try {
            var str = "UPDATE burgers SET devoured=1 WHERE id='??';";
            var result = await connection.query(str, table, id, columns, values)
            callback(result);
        } catch (error) {
            console.log(error)
        }
    },
   
};


module.exports = orm;