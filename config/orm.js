//import(require) connection.js into orm.js
const connection = require('./connection');

//In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

orm = {
    selectAll: async function (table, callback) {
        try {
            var str = "SELECT * FROM ??";
            var result = await connection.query(str, [table])
            callback(result)
        } catch (error) {
            console.log(error)
        }
    
    },
    insertOne: async function (table, callback) {
        try {
            var str = "INSERT INTO BURGERS (burger_name)";
            var result = await connection.query(str, [table])
            callback(result)
        } catch (error) {
            console.log(error)
        }
    }, 
    updateOne: 

};

module.exports = orm