//import(require) connection.js into orm.js
const connection = require('./connection');

//In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

orm = {
    findAll: async function (table, callback) {
        try {
            var str = "SELECT * FROM ??";
            var result = await connection.query(str, [table])
            callback(result)
        } catch (error) {
            console.log(error)
        }
    
    },
    insertBurger: async function (burger_name, callback) {
        try {
            var str = "INSERT INTO BURGERS (burger_name)  values('??');";
            var result = await connection.query(str, [burger_name])
            callback(result)
        } catch (error) {
            console.log(error)
        }
    }, 
    update: async function(id,  cb) {
        orm.update("burgers", id, "devoured", devoured, function(res) {
          cb(res);
        });
      },
    
};

module.exports = orm