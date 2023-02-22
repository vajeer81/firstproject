const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const asynchandler = require('express-async-handler');
// const User = require('../Model/userAuthModel');
const User = require('../model/userAuthModel');



 

//des registeruser  new users
// routes post /api/userAuth
// access public

const registeruser = asynchandler(async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error("please add all fields");
    }
    //check userExits user email
    const userExists = await User.findOne({ email })
    // console.log("=======>SDS userExists====>",userExists);
    if (userExists) {
        res.status(400)
        throw new Error("Email already exits")
    }
    // check userExits user password
    // const salt = await bcrypt.getSalt(10)
    //  const hashedPassword = await bcrypt.hash(password,salt);
    // const passexits = User.findOne(password)
    const data = await User.create({
        name,
        email,
        password,
    })


    if (data) {
        res.status(201).json({
            _id: data.id,
            name: data.name,
            email: data.email,
            password: data.password,
        })
    } else {
        res.status(400)
        throw new Error("data is already exits")
    }
})

//des loginuser  new users
// routes post /api/userAuth/login
// access public
const loginuser = asynchandler(async (req, res) => {
    const { email, password } = req.body
    const user1 = await User.findOne({ email })
    console.log("====dsds===>>>", user1);
    if (user1 && (bcrypt.compare(password, user1.password))) {
        res.json({ 
            _id: user1.id,
            name: user1.name,
            email: user1.email,
            token: generateToken(user1._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid credentials")
    }


    // res.json({message:"login user"});

})


//des getMe  new users
// routes post /api/userAuth/me
// access public
const getMe = asynchandler(async (req, res) => {
    let data = await User.find({})
    res.send(data)
    // let data = await User.find({
    //     "$or":[
    //         {
    //             name:{$regex:req.params.name}
    //         },
    //         {
    //             email:{$regex:req.params.name}
    //         },
    //         {
    //             password:{$regex:req.params.name}
    //         }
    //     ]
    //     // res.send(data);
    // })
    // res.json({ message: data });
    // res.send(data);
    // res.send(data)
    // res.json(data);
})
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}




module.exports = {
    registeruser,
    loginuser,
    getMe
}