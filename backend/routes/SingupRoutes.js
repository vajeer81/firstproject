const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const {getsing,postsing} = require("../controllers/Singupcontrollers")
const {protect} = require("../middleware/Singupmiddleware")

Router.post("/",postsing)
Router.get("/",getsing)


module.exports = Router