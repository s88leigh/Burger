//Inside the burgers_controller.js file, import the following: Express, burger.js
const router = require("express").Router();
const burger = require('../models/burger.js');
const orm = require('../config/orm')



//Create the router for the app, and export the router at the end of your file.
router.get("/", function (req, res) {
    burger.findAll(function (data) {
        console.log(data)
    })
})

router.get("/name/:name", function (req, res) {
    burger.findByName(req.params.name, function (data) {
        console.log(data)
    })
})

router.get("/id/:id", function (req, res) {
    burger.findById(req.params.id, function (data) {
        console.log(data)
    })
})

module.exports = router;