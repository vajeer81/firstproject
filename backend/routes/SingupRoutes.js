const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const {getsing,postsing,updates,deletes} = require("../controllers/Singupcontrollers")
const {protect} = require("../middleware/Singupmiddleware")

Router.post("/",postsing)
Router.get("/",getsing)
Router.put("/:_id",updates)
Router.delete("/:_id",deletes,protect)


module.exports = Router