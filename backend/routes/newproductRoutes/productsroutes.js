const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const {protect} = require("../../middleware/newproductsmiddleware")
const {addpro,putproduct,deleteproduct,getfindid,getproducts} = require("../../controllers/newproduct/productscontrollers")

Router.post("/",addpro)
Router.get("/",getproducts)
Router.get("/find",getfindid)
Router.put("/:_id",putproduct)
Router.delete("/:_id",deleteproduct)

module.exports = Router