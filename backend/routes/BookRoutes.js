const express = require("express");
const route = express.Router();
const bookController = require("../controllers/BookController")

route.post("/datasave",bookController.DataSave);
route.get("/display",bookController.dataDisplay);
route.get("/details/:id",bookController.Details);
route.post("/delrec",bookController.deleteRec);
route.post("/editdisplay",bookController.editdisplay);
route.post("/editdatasave",bookController.editDataSave);
route.post("/searchdisplay",bookController.searchDisplay);


module.exports = route;