const singup = require("../model/Singupmodel")
const jwt = require("jsonwebtoken")
const { model } = require("mongoose")


const getsing = async (req,res)=>{
    const data = await singup.findOne({})
    res.send(data)
}


const postsing = async (req,res)=>{
    const {fistname,lastname,password,email,gender} = req.body

    let checkemail = email.includes("@gmail.com")
    if (!checkemail) {
        res.status(400)
        throw new Error("please add the @gmail.com")
    }

    const data = await singup.create({
        fistname,
        lastname,
        password,
        email,
        gender
    })

    res.status(201).json({
        fistname:data.fistname,
        lastname:data.lastname,
        email:data.email,
        gender:data.gender,
        token:generateToken(data._id)
    })
}


const updates = async (req, res) => {
    const data = await singup.findById(req.params._id)
    if (!data) {
        res.status(401).json({ massage: "id is not define" })
    }
    let updatedata = await singup.findByIdAndUpdate(req.params._id, req.body, {
        new: true
    })
    console.log("=========>", updatedata)
    res.status(200).json({
        token: generateToken({ massage: `data is update ` })
    })
    //  res.status(200).json({message : `updatedata ${req.params._id}`})
}



const deletes = async (req, res) => {
    const data = await singup.findById(req.params._id)
    if (!data) {
        res.status(401).json({ massage: "id is not define" })
    }
    if (generateToken) {
        await data.remove()
    }
    res.status(200).json({
        token: generateToken({ massage: `data is delete` })
    })
}





const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}





module.exports = {
    getsing,
    postsing,
    deletes,
    updates
}