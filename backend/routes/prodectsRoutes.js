const express = require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
Router.use(express.urlencoded({ extended: false }))
const uploard = require("../middleware/photouplord")
const { getpdt, postpdt, deletepdt, putpdt, findpdt } = require("../controllers/prodectscontrollers")

Router.get("/", getpdt)
Router.get("/find/:_id", findpdt)
Router.post("/uploard", postpdt,)
Router.put("/:_id", putpdt)
Router.delete("/:_id", deletepdt)



module.exports = Router;