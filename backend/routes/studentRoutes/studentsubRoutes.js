const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())

const {getsub,addsub} = require("../../controllers/studentcontrolles/studentsubcontrolles")
Router.get("/",getsub)
Router.post("/",addsub)

module.exports = Router