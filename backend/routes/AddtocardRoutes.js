const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const {getadd,postadd} = require("../controllers/Addtocardcontrollers")

Router.get("/",getadd);
Router.post("/",postadd)


module.exports = Router