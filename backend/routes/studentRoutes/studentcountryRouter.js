const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const {getcountry,addcountry,countrypost} = require("../../controllers/studentcontrolles/studentcountry")


Router.get("/",getcountry);
Router.post("/",addcountry)
Router.post("/count",countrypost)

module.exports = Router
