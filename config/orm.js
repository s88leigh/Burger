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
    // ("burgers", ["burger_name"], ["cheese burger"], callback)
    // INSERT INTO burgers ("burger_name") VALUES ("?") // ["cheese burger"]
    // INSERT INTO burgers ("burger_name") VALUES ("cheese burger")

    // ("burgers", ["burger_name", "devoured"], ["jalapeno burger", true], callback)
    // INSERT INTO burgers ("burger_name, devoured") VALUES ("?,?") // ["jalapeno burger", true]
    // INSERT INTO burgers ("burger_name", "devoured") VALUES ("jalapeno burger", true)
    create: async function (table, columns, values, callback) {
        try {
            // ["dog", "cat", "iguana"] -> array datatype -> [1] === "cat"
            // "dog,cat,iguana" -> datatype string -> [1] === "o"
            var str = "INSERT INTO " + table + " (" + columns.toString() + ") VALUES (" + printQ(values) + ");";
            var result = await connection.query(str, values)
            callback(result)
        } catch (error) {
            console.log(error)
        }
    },

    update: async function (table, condition, dataObj, callback) {
        try {
            // UPDATE burgers SET devoured = 1 WHERE id = 5
            var str = "UPDATE " + table + " SET " + objToSql(dataObj) + " WHERE " + condition;
            var result = await connection.query(str)
            callback(result);
        } catch (error) {
            console.log(error)
        }
    },

};

function printQ(arr) {
    var qArr = [];
    for (var i = 0; i < arr.length; i++) {
        qArr.push("?")
    }
    return qArr.toString();
}

function objToSql(obj){
    // { devoured: "1", "burger_name", "cheese"} => devoured = 1, burger_name = cheese
    var sqlArr = [];
    for(var key in obj){
        // key: "devoured", obj[key] === obj["devoured"] => 1
        // key: "burger_name", obj[key] === obj["burger_name"] => cheese
        sqlArr.push(key + " = " + obj[key])
    }
    return sqlArr.toString();
}


module.exports = orm;