const express = require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const { postuser, findpost, deleteusre, getuser,findapi } = require("../controllers/usrescontrollers")

Router.post("/", postuser)
Router.get("/", getuser)
Router.post("/insart/:_id", findpost)
Router.delete("/:_id", deleteusre)
Router.get("/api",findapi)


module.exports = Router