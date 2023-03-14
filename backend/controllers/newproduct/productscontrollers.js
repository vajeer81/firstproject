const jwt = require("jsonwebtoken")

const newproduct = require("../../model/newproductmodel/productsmodel")



const getproducts = async (req, res) => {
    try {
        const data = await newproduct.find({})
        if (!data) {
            res.status(404).json({ error: "data is not found" })
        }

        res.status(201).json(data)
    } catch (error) {
        res.status(404).json(error)
    }

}




const getfindid = async (req, res) => {
    try {
        const data = await newproduct.findById(req.params._id)
        if (!data) {
            res.status(404).json({ error: "data is not found" })
        }

        res.status(201).json(data)
    } catch (error) {
        res.status(404).json(error)
    }

}





const addpro = async (req, res) => {
    try {
        const { MEN, WOMEN, ELECTRONICS, FASHION } = req.body
        if (!MEN || !WOMEN || !ELECTRONICS || !FASHION) {
            res.status(400).json({ error: "missing field" })
        }
        const data = await newproduct.create({
            MEN,
            WOMEN,
            ELECTRONICS,
            FASHION
        })
        res.status(200).json(data)
    } catch (error) {
        res.status(200).json(error)

    }

}



const putproduct = async (req, res) => {
    const data = await newproduct.findById(req.params._id)
    if (!data) {
        res.status(401).json({ massage: "id is not define" })
    }
    let updatedata = await newproduct.findByIdAndUpdate(req.params._id, req.body, {
        new: true
    })
    res.status(201).json(updatedata)
}

const deleteproduct = async (req, res) => {
    const data = await newproduct.findById(req.params._id)
    if (!data) {
        res.status(401).json({ massage: "id is not define" })
    }
    await data.remove()
    res.status(201).json({ massage: "data is delete" })

}


const tokenjanret = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" })
}



module.exports = {
    addpro,
    getfindid,
    getproducts,
    putproduct,
    deleteproduct
}