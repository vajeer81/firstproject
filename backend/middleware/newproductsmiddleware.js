const jwt = require("jsonwebtoken")
const products = require("../model/newproductmodel/productsmodel")
const protect = async(req,res,next)=>{
    try {
        let token ;
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
            token = req.headers.authorization.split(" ")[1]
            const decored = jwt.verify(token,process.env.JWT_SECRET)
            req = await products.findById(decored.id)
        }
    } catch (error) {
        res.status.json(error)
    }
}

module.exports = {protect}