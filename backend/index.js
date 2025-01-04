const express = require("express");
const app = express();
const port = 8000;
const bookRoutes = require("./routes/BookRoutes")
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/bookmanagement").then(()=>{
    console.log("database connected !!");
})

app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use("/books",bookRoutes);
app.use("/user",userRoutes);

app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
})