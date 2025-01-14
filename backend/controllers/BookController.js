const BookModel = require("../model/BookModel");

const DataSave = async(req,res)=>{
    const {authername,bookname,publishdate,imagelink,bookprice} = req.body;
    try {
        await BookModel.create({
            auther_name:authername,
            book_name:bookname,
            publish_date:publishdate,
            image_link:imagelink,
            book_price:bookprice
        }) 
        res.status(200).send({msg:"Data Inserted Successfully!!"});
    } catch (error) {
        res.status(400).send({msg:"Data Insertion Failed"});
    }
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
    try {
        await BookModel.findByIdAndDelete(id);
        res.status(200).send({msg:"Item deleted Successfully!!"});
    } catch (error) {
        res.status(400).send({msg:"Data not Deleted !!!"});
    }
}
const editdisplay = async(req,res) =>{
    const {id} = req.body;
    try {
        const Data = await BookModel.findById(id);
        res.send(Data); 
    } catch (error) {
        res.status(400).send({msg:"Something went wrong !!"});
    }
}

const editDataSave = async(req,res) => {
    const{_id,auther_name,book_name,publish_date,image_link,book_price} = req.body;
    try {
        await BookModel.findByIdAndUpdate(_id,{
            auther_name:auther_name,
            book_name:book_name,
            publish_date:publish_date,
            image_link:image_link,
            book_price:book_price
        })
        res.status(200).send({msg:"Data Updated Successfully"});
    } catch (error) {
        res.status(400).send({msg:"Data update failed !!"});
    }
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