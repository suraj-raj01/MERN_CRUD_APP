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
    const {id} = req.params;
    console.log(req.params);
    // await BookModel.findByIdAndUpdate(id);
    const mydata = await BookModel.findByIdAndUpdate(id);
    console.log("Edit Data save")
    res.send("HEllo")
}

module.exports = {
    DataSave,
    dataDisplay,
    Details,
    deleteRec,
    editdisplay,
    editDataSave
}