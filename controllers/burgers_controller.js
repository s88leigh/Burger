//Inside the burgers_controller.js file, import the following: Express, burger.js
const router = require("express").Router();
const burger = require('../models/burger.js');
const orm = require('../config/orm')



//Create the router for the app, and export the router at the end of your file.
router.get("/", function (req, res) {
    burger.getAll(function (data) {
        console.log(data)
        res.render("index.handlebars", {burger_name:data});
    });
});

// router.get("/name/:name", function (req, res) {
//     burger.getByName(req.params.name, function (data) {
//         console.log(data)
//     });
// });

// router.get("/id/:id", function (req, res) {
//     burger.getById(req.params.id, function (data) {
//         console.log(data)
//     });
// });

//add a new burger
router.post("/api/burgers", function (req, res) {
    console.log(req.body)
    burger.addBurger(req.body.new_burger, function (data) {
        console.log(data)
      
        res.json({ id: result.insertId });
    });
});

//change devour to true after having been eaten
router.put("/api/burgers/:id", function(req, res) {
    var id = req.params.id;
    console.log("id", id)

    burger.update(id, function(result) {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
    
});

module.exports = router;