const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
    auther_name:{
        type:String,
        required:true
    },
    book_name:{
        type:String,
        required:true
    },
    publish_date:{
        type: Date,
        default:Date.now()
    },
    image_link:{
        type:String
    },
    book_price:{
        type:Number,
        min:500,
        max:5000,
        required:true
    }
})

module.exports = mongoose.model("book",bookSchema);