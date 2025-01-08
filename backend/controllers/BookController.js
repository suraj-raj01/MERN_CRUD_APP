const BookModel = require("../model/BookModel");

const DataSave = async(req,res)=>{
    const {authername,bookname,publishdate,imagelink,bookprice} = req.body;
    await BookModel.create({
        auther_name:authername,
        book_name:bookname,
        publish_date:publishdate,
        image_link:imagelink,
        book_price:bookprice
    })
}

const dataDisplay = async(req,res)=>{
    const Mydata = await BookModel.find();
    res.send(Mydata);
}

const Details = async(req,res) => {
    const mydata = await BookModel.findById(req.params.id);
    res.send(mydata);
    
}

const deleteRec = async(req,res) =>{
    const {id} = req.body;
    await BookModel.findByIdAndDelete(id);
    res.send("item deleted");
}
const editdisplay = async(req,res) =>{
    const {id} = req.body;
    const Data = await BookModel.findById(id);
    res.send(Data);
}

const editDataSave = async(req,res) => {
    const{_id,auther_name,book_name,publish_date,image_link,book_price} = req.body;
    await BookModel.findByIdAndUpdate(_id,{
        auther_name:auther_name,
        book_name:book_name,
        publish_date:publish_date,
        image_link:image_link,
        book_price:book_price
    })
    res.send("HEllo")
}

const searchDisplay=async(req,res)=>{
    const {book} = req.body;
    const Data = await BookModel.find({"book_name": { $regex: book,$options:'i'}});
    res.send(Data)
}

module.exports = {
    DataSave,
    dataDisplay,
    Details,
    deleteRec,
    editdisplay,
    editDataSave,
    searchDisplay
}