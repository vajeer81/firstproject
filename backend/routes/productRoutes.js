const express = require('express');
const { getproduct, addproduct, updateproduct, deleteproduct, findids } = require("../controllers/productControllers");
const Router = express.Router();
Router.use(express.json())


Router.get('/getproduct', getproduct)
Router.get("/:_id",findids)
Router.post('/insertproduct', addproduct)
Router.put('/updateproduct/:_id', updateproduct)
Router.delete('/deleteproduct/:_id', deleteproduct)


module.exports = Router;