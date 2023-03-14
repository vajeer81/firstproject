const Addcart = require("../model/Addtocardmodel")
const jwt = require("jsonwebtoken")

const gettoken = async (req, res) => {
    const { title, price } = await Addcart.findById(req.addtocard.id)
    res.status(201).json({

        title,
        price
    })
}


const getadd = async (req, res) => {

    try {
        const data = await Addcart.find({})
        if (!data) {
            res.status(404).json({ error: "data is missing" })
        }
        res.status(200).json({
            title: data.title,
            price: data.price,
            rating: data.rating,
            token: generateToken(data._id)

        })
    } catch (error) {
        res.status(404).json(error)
    }

}


const postadd = async (req, res) => {
    try {
        const { title, image, price, rating, dis, quantity } = req.body
        if (!title || !image || !price || !rating || !dis || !quantity) {
            res.status(400).json({ error: "missing the fild" })
        }
        const data = await Addcart.create({
            title,
            price,
            dis,
            rating,
            image,
            quantity
        })
        res.status(200).json({
            title: data.title,
            price: data.price,
            rating: data.rating,
            token: generateToken(data._id)
        })
    } catch (error) {
        res.status(404).json(error)
    }
}

const addput = async (req, res) => {
    try {
        const findid = await Addcart.findById(req.params._id)
        if (!findid) {
            res.status(404).json({ error: "id is not difain" })
        }
        const updata = await Addcart.findByIdAndUpdate(req.params._id, req.body, { new: true })
        if (!updata) {
            res.status(404).json({ error: "not updata" })
        }
        res.status(200).json({
            token: generateToken(updata._id)

        })
    } catch (error) {
        res.status(404).json(error)
    }


}


const deletecard = async (req, res) => {
    try {
        const data = await Addcart.findById(req.params._id)
        if (!data) {
            res.status.json({ status: false, error: "id is not defin" })
        }
        if (generateToken) {
            await data.remove()

        }else{
            res.status(400).json({error:"token is missing"})
        }
            await data.remove()

res.send(data)
    } catch (error) {
        res.status(400).json(error)
    }
}


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "20d" })
}



module.exports = { getadd, postadd, gettoken, addput,deletecard }