const UserModel = require("../model/UserModel")
const userData = async(req,res)=>{
    const {name,email,mobile,password} = req.body;
    await UserModel.create({
        user_name:name,
        user_email:email,
        user_phone:mobile,
        password:password
    })
}

const userdisplay = async(req,res) =>{
    const mydata = await UserModel.find();
    res.send(mydata);
}
module.exports = {
    userData,
    userdisplay
}