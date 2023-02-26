const jwt = require("jsonwebtoken")
const asynchandler = require("express-async-handler")
// const usereauth = require("../model/userAuthModel")
const tudoes = require("../model/Todomodel")
const protect = asynchandler(async (req, res, next) => {
    let token
    // console.log(req);

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            //Get token from headr
            token = req.headers.authorization.split(" ")[1]
            console.log(token)
            // verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            console.log(decoded);
            // Get usereauth from the token
            req.tudoes = await tudoes.findById(decoded.id).select("-password")
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