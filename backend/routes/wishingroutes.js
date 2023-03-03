const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())

const {postwishing,getwishing} = require("../controllers/Wishingcontrollers")

Router.get("/",getwishing);
Router.post("/",postwishing)


module.exports = Router