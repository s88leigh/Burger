//Inside the burgers_controller.js file, import Express to create route. 
const router = require("express").Router();
//import sql queries
const burger = require("../models/burger");



//Create the router for the app, and export the router at the end of your file.
router.get("/", function (req, res) {
  burger.getAll(function (data) {
    console.log(data)
    res.render("index.handlebars", { burger_name: data });
  });
});

// router.get("/name/:name", function (req, res) {
//     dbBurgers.getByName(req.params.name, function (data) {
//         console.log(data)
//     });
// });


//add a new burger
router.post("/api/burgers", function (req, res) {
  console.log(req.body)
  burger.addBurger(req.body.new_burger, function (result) {
    console.log(result)
    // returns id of the burger that has been added
    res.json({ id: result.insertId });
  });
});


//change devour to true after having been eaten
router.put("/api/burgers/:id", function (req, res) {
  var id = req.params.id;

  console.log(req.body, req.params.id)

  burger.updateBurger(id, req.body, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });

});



module.exports = router;