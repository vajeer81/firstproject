const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const {getcourse,addcourse} = require("../../controllers/studentcontrolles/studentcoursecontrollers")

Router.get("/:_id",getcourse)
Router.post("/",addcourse)

module.exports = Router