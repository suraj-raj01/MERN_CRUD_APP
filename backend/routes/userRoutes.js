const express = require("express");
const route = express.Router();
const userController = require("../controllers/userController")

route.post("/userlogin",userController.userData);
route.get("/userdisplay",userController.userdisplay);

module.exports = route;