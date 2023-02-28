const express= require('express');
const app = express()
const {getprofile,postprofile} = require("../controllers/profilecontrollers")
const Router = express.Router()
Router.use(express.json())

Router.get("/:_id",getprofile)
Router.post("/:_id",postprofile)

module.exports = Router