const prodect = require("../model/prodectsmodel")




const getpdt = async (req, res) => {
    try {
        const data = await prodect.find({})
        if (!data) {
            res.status(404).json({ error: "data not found" })
        }
        res.status(200).json(data)
    } catch (error) {
        res.status(200).json(error)
    }

}

const findpdt = async (req, res) => {
    try {
        const data = await prodect.findById(req.params._id)
        if (!data) {
            res.status(404).json({ error: "data not found" })
        }
        res.status(200).json(data)
    } catch (error) {
        res.status(200).json(error)
    }

}


const postpdt = async (req, res) => {

    try {
        const { title, dis, price, image, reting, } = req.body
        if (!title || !dis || !price || !image || !reting) {
            res.status(400).json({ error: "missing filds" })
        }
        const data = await prodect.create({
            title,
            price,
            reting,
            dis,
            image,
        })
        res.status(200).json(data)

    } catch (error) {
        res.status(404).json(error)
    }

}

const putpdt = async (req, res) => {
    try {
        const data = await prodect.findById(req.params._id)
        if (!data) {
            res.status(401).json({ massage: "id is not define" })
        }
        let updatedata = await prodect.findByIdAndUpdate(req.params._id, req.body, {
            new: true
        })
        console.log("=========>", updatedata)
        res.status(201).json(updatedata)
    } catch (error) {
        res.status.json(error);
    }


}

const deletepdt = async (req, res) => {

    try {
        let findid = await prodect.findById(req.params._id);
        if (!findid) {
            res.status(400);
            res.send("user not found");
        }
        await findid.remove();

        res.status(200).json({ message: `delete data ${req.params._id}` });
    } catch (error) {
        res.status(404).json(error)
    }

}



module.exports = { getpdt, postpdt, putpdt, deletepdt, findpdt }