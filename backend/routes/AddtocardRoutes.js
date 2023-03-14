const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const {getadd,postadd,gettoken,addput,deletecard} = require("../controllers/Addtocardcontrollers")
const {protect} = require("../middleware/AAdcardmiddleware")
Router.get("/",getadd);
Router.post("/",postadd)
Router.get("/token",protect,gettoken)
Router.put("/:_id",protect,addput)
Router.delete("/:_id",deletecard)

module.exports = Router