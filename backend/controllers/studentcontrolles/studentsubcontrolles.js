const studentsub = require("../../model/studentmodel/studentsubmodel")

const getsub = async (req,res)=>{
    const data = await studentsub.find()
    res.send(data)
}

const addsub = async(req,res)=>{
    const {subname}= req.body
    const data = await studentsub.create({
        subname
    })
    res.send(data)
}


module.exports = {
    getsub,
    addsub
}