//Inside burger.js, import orm.js into burger.js
const orm = require("../config/orm");

//create the code that will call the ORM functions using burger specific input for the ORM.


 const dbBurgers= {
     //gets all the burgers from the database
    getAll: function (callback) {
        orm.findAll("burgers", callback);
    
    },
    findByName: function (name, callback) {
        const condition = "burger_name = '" + name + "'"
        orm.findByCondition("burgers", condition, callback);
    },
    findById: function (id, callback) {
        const condition = "id = " + id;
        orm.findByCondition("burgers", condition, callback);
    },
    
    //adds a new burger to the database under the burger_name column
    addBurger: function (burger_name, callback) {
        orm.insertBurger("burgers", ["burger_name"], [burger_name], callback);

    },

    //changes the burger to devoured
    updateBurger: function(id, callback) {
        orm.update("burgers", id, "devoured", true, callback);
    }
};



module.exports = dbBurgers