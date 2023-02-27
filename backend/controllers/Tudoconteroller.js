const db = require('../config');
db();
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const mongodb = require('mongodb');
const tudos = require('../model/Todomodel');
const asyncHandler = require('express-async-handler');


const gettudo = async (req, res) => {
    let data = await tudos.find();
    console.log("======>", data);
    res.status(200).json(data)
}



const getMe = async (req, res) => {
    const { _id, fistname, email } = await tudos.findById(req.tudoes.id)
    res.status(200).json({
        id: _id,
        fistname,
        email,
        // token: generateToken(tudos._id)

    })
}




const posttudo = async (req, res) => {
    const { fistname, lastname, email, phone, pincode, address, password, state } = req.body
    if (!fistname || !lastname || !email || !phone || !pincode || !address || !password || !state) {
        res.status(400)
        res.send("please add all fields");
    }

    // const exits = tudos.findOne({ email })
    // if (exits) {
    //     res.status(500)
    //     res.send ("alredy email exist");
    // } else {
    //     if (password.length > 8 || password.length < 8) {
    //         res.status(404)
    //         throw  new Error ("password length should be minimum 8 character");
    //     }
    // }

    let checkemail = email.includes("@gmail.com")
    if (!checkemail) {
        res.status(400)
        throw new Error("please add the @gmail.com")
    }



    // const salt =  bcrypt.getSalt(10)
    //  const hashedPassword = await bcrypt.hash(password,10);
    // const passexits = tudos.findOne(password)

    let data = await tudos.create({
        fistname,
        lastname,
        email,
        address,
        pincode,
        phone,
        password,
        state
    })

    res.status(201).json({
        fistname: data.fistname,
        email: data.email,
        phone: data.phone,
        state: data.state,
        token: generateToken(data._id)
    })
}


const logintudo = async (req, res) => {
    const { email, password } = req.body
    const finds = await tudos.findOne({ email: email })
    if (finds && finds.password) {
        res.status(201).json({
            fistname: finds.fistname,
            phone: finds.phone,
            email: finds.email,
            token: generateToken(finds._id)
        })
    }
}




const updates = async (req, res) => {
    const data = await tudos.findById(req.params._id)
    if (!data) {
        res.status(401).json({ massage: "id is not define" })
    }
    let updatedata = await tudos.findByIdAndUpdate(req.params._id, req.body, {
        new: true
    })
    console.log("=========>", updatedata)
    res.status(200).json({
        token: generateToken({ massage: `data is update ` })
    })
    //  res.status(200).json({message : `updatedata ${req.params._id}`})
}



const deletes = async (req, res) => {
    const data = await tudos.findById(req.params._id)
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
    gettudo,
    posttudo,
    updates,
    deletes,
    getMe,
    logintudo
}