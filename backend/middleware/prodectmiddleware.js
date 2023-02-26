const jwt = require("jsonwebtoken")
const asynchandler = require("express-async-handler")
const products = require("../model/productModel")
const protect = asynchandler(async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            //Get token from headr
            token = req.headers.authorization.split(" ")[1]
            // verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            // Get usereauth from the token
            req.products = await products.findById(decoded.id).select("_password")
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error("not authorized")
        }
    }
    if (!token) {
        res.status(401)
        throw new Error("not authorized no token")
    }

})

module.exports = {
    protect,

}