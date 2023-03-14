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
    }else{
        console.log("wertyu========>>>",password.length);
        if(password.length > 8 || password.length < 8 ){
           
            res.status(400)
            throw new Error("password length should be minimum 8 character")

        }
    }

    let checkemail = email.includes("@gmail.com")
    if(!checkemail){
        res.status(400)
        throw new Error("please add the @gmail.com")
    }



    
    // check userExits user password
    // const salt = await bcrypt.getSalt(10)
    //  const hashedPassword = await bcrypt.hash(password,salt);
    // const passexits = User.findOne(password)
    const data = await User.create({
        name,
        email,
        password
    })


    if (data) {
        res.status(201).json({
            _id: data.id,
            name: data.name,
            email: data.email,
            password: data.password,
            token: generateToken(data._id)

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
    const {_id,name,email} = await User.findById(req.usereauth.id)
    res.status(200).json({
        id: _id,
        name,
        email
    })
});





const updates = asynchandler(async(req,res)=>{
       const  data = await User.findById(req.params._id)
        if(!data){
            res.status(401).json({massage:"id is not define"}) 
        }
     let updatedata = await User.findByIdAndUpdate(req.params._id,req.body,{
        new: true
     })
     console.log("=========>",updatedata)
    //  res.status(200).json({message : `updatedata ${req.params._id}`})
    res.status(200).json({
        token :generateToken({massage:`data is update `})
    })
})


const deletes = asynchandler(async(req,res)=>{
    const  data = await User.findById(req.params._id)
    if(!data){
        res.status(401).json({massage:"id is not define"}) 
    }
    if(generateToken){
        await data.remove()
    }

    // await data.remove()

    res.status(200).json({
        token:generateToken({massage:`data is delete`})
    })


})


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}





module.exports = {
    registeruser,
    loginuser,
    getMe,
    updates,
    deletes
}








































// const updateproduct=asyncHandler( async (req,res)=>{
//     let findid = await product.findById(req.params._id);
//     if(!findid){
//         res.status(400);
//         res.send("user not found");
//     }
//     const updateusers = await user.findByIdAndUpdate(req.params._id,req.body,{
//         new : true
//     })
//     console.log("=====>",updateusers);
//     // let data = await db();
//     // let result = await  data.updateOne({_id: new mongodb.ObjectId(req.params._id)},{$set:req.body});
//     // res.status(200).json({result})
//     res.status(200).json({message : `updatedata ${req.params._id}`})
// })











// const getMe = asynchandler(async (req, res) => {
//     const {_id,name,email} = await User.findById(req.usereauth.id)
//     res.status(200).json({
//         id: _id,
//         name,
//         email
//     })



    
    // let data = await User.find({})
    // res.send(data)
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
// })