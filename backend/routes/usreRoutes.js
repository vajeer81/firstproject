const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const {postuser,findpost} = require("../controllers/usrescontrollers")

Router.post("/",postuser)
Router.post("/insart/:_id",findpost)


module.exports = Router