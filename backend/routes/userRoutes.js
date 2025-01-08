const express = require("express");
const route = express.Router();
const userController = require("../controllers/userController")

route.post("/userlogin",userController.userData);
route.get("/userdisplay",userController.userdisplay);
route.get("/userdetails/:id",userController.userDetails);

module.exports = route;