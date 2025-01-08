const express = require("express");
const app = express();
const bookRoutes = require("./routes/BookRoutes")
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
// const port = 8000;

require('dotenv').config();
const DB = process.env.MYDB;
const port = process.env.PORT || 8000;

mongoose.connect(DB).then(()=>{
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